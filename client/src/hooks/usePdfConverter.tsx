import { useState, useCallback, useRef, useEffect } from 'react';
import * as pdfjsLib from 'pdfjs-dist';

import type { ProcessingStatus, ImageData, UploadResponse } from '../types';

// Set worker path
pdfjsLib.GlobalWorkerOptions.workerSrc = '/pdf.js-4.10.38-pdf.worker.min.mjs';

export const usePdfConverter = () => {
  const [quality, setQuality] = useState<number>(0.9);
  const [status, setStatus] = useState<ProcessingStatus>('idle');
  const [statusMessage, setStatusMessage] = useState<string>('');
  const [images, setImages] = useState<ImageData[]>([]);
  const [isProcessingComplete, setIsProcessingComplete] = useState<boolean>(false);
  
  const pdfDocumentRef = useRef<pdfjsLib.PDFDocumentProxy | null>(null);
  const isProcessingRef = useRef<boolean>(false);

  const clearImages = useCallback((): void => {
    images.forEach(image => URL.revokeObjectURL(image.url));

    setImages([]);
    setIsProcessingComplete(false);
  }, [images]);

  const loadPDF = useCallback(async (file: File): Promise<void> => {
    try {
      setStatus('loading');
      setStatusMessage('Loading PDF...');

      const arrayBuffer = await file.arrayBuffer();

      pdfDocumentRef.current = await pdfjsLib.getDocument(arrayBuffer).promise;

      await convertToJPEGs();

    } catch (error) {
      setStatus('error');
      setStatusMessage(`Error loading PDF: ${(error as Error).message}`);
    }
  }, []);

  const convertToJPEGs = useCallback(async (): Promise<void> => {
    if (isProcessingRef.current || !pdfDocumentRef.current) {
      return;
    }

    try {
      isProcessingRef.current = true;

      setStatus('processing');
      clearImages();

      const pdf = pdfDocumentRef.current;
      const totalPages = pdf.numPages;
      const tempImages: ImageData[] = [];

      for (let pageNum = 1; pageNum <= totalPages; pageNum++) {
        if (!isProcessingRef.current) return;

        setStatusMessage(`Converting page ${pageNum} of ${totalPages} to JPEG...`);

        const page = await pdf.getPage(pageNum);

        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d')!;

        const scale = 2.0;
        const viewport = page.getViewport({ scale });

        canvas.width = viewport.width;
        canvas.height = viewport.height;
        
        await page.render({
          canvasContext: ctx,
          viewport: viewport
        }).promise;

        if (!isProcessingRef.current) {
          return;
        }

        const blob = await new Promise<Blob>((resolve) => {
          canvas.toBlob((blob) => resolve(blob!), 'image/jpeg', quality);
        });

        if (!isProcessingRef.current) {
          return;
        }

        const url = URL.createObjectURL(blob);

        tempImages.push({
          blob,
          url,
          pageNumber: pageNum,
          selected: true // Default to selected
        });
      }

      if (isProcessingRef.current) {
        setImages(tempImages);
        setStatus('success');
        setStatusMessage(`Successfully converted all ${totalPages} pages!`);
        setIsProcessingComplete(true);
      }

    } catch (error) {
      setStatus('error');
      setStatusMessage(`Error converting PDF: ${(error as Error).message}`);

    } finally {
      isProcessingRef.current = false;
    }

  }, [quality, clearImages]);

  const handleFileChange = useCallback((file: File): void => {
    loadPDF(file);
  }, [loadPDF]);

  const handleUpload = useCallback(async (endpoint: string): Promise<void> => {
    if (!endpoint.trim()) {
      setStatus('error');
      setStatusMessage('Please enter an endpoint URL');

      return;
    }

    const selectedImages = images.filter(image => image.selected);

    if (selectedImages.length === 0) {
      setStatus('error');
      setStatusMessage('No images selected for upload');

      return;
    }

    try {
      setStatus('loading');
      setStatusMessage(`Uploading ${selectedImages.length} selected images...`);

      const formData = new FormData();
      
      selectedImages.forEach((image) => {
        formData.append('images', image.blob, `page_${image.pageNumber}.jpg`);
      });

      const response = await fetch(endpoint, {
        method: 'POST',
        body: formData
      });

      if (!response.ok) {
        throw new Error(`Upload failed: ${response.status} ${response.statusText}`);
      }

      const result: UploadResponse = await response.json();

      setStatus('success');
      setStatusMessage(
        `Successfully uploaded ${selectedImages.length} selected images! Files: ${
          result.files?.map(f => f.originalName).join(', ') || 'uploaded'
        }`
      );

    } catch (error) {
      setStatus('error');
      setStatusMessage(`Error uploading images: ${(error as Error).message}`);
    }
  }, [images]);

  const handleQualityChange = useCallback((newQuality: number): void => {
    setQuality(newQuality);
    if (pdfDocumentRef.current && !isProcessingRef.current) {
      isProcessingRef.current = false;
      setIsProcessingComplete(false);
      convertToJPEGs();
    }
  }, [convertToJPEGs]);

  const handleImageToggle = useCallback((pageNumber: number, selected: boolean): void => {
    setImages(prevImages => 
      prevImages.map(image => 
        image.pageNumber === pageNumber 
          ? { ...image, selected }
          : image
      )
    );
  }, []);

  useEffect(() => {
    return () => {
      images.forEach(image => URL.revokeObjectURL(image.url));
    };
  }, [images]);

  return {
    quality,
    setQuality: handleQualityChange,
    status,
    statusMessage,
    images,
    isProcessingComplete,
    handleFileChange,
    handleUpload,
    handleImageToggle
  };
};