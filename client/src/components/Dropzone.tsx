import React, { useState } from 'react';

interface DropzoneProps {
  onFileChange: (file: File) => void;
}

const Dropzone: React.FC<DropzoneProps> = ({ onFileChange }) => {
  const [isDragOver, setIsDragOver] = useState(false);

  const handleDragEnter = (event: React.DragEvent<HTMLDivElement>): void => {
    event.preventDefault();
    setIsDragOver(true);
  };

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>): void => {
    event.preventDefault();
  };

  const handleDragLeave = (event: React.DragEvent<HTMLDivElement>): void => {
    event.preventDefault();
    setIsDragOver(false);
  };

  const handleDrop = (event: React.DragEvent<HTMLDivElement>): void => {
    event.preventDefault();
    setIsDragOver(false);

    try {
      // Check if dataTransfer exists
      if (!event.dataTransfer) {
        console.warn('DataTransfer is null');
        return;
      }

      // Extract files from dataTransfer
      const fileList = event.dataTransfer.files;
      
      // Convert FileList to regular array and filter for PDF files
      const filesArray = Array.from(fileList);
      const pdfFiles = filesArray.filter(file => file.type === 'application/pdf');
      
      // For this PDF converter, we only handle the first PDF file
      if (pdfFiles.length > 0) {
        onFileChange(pdfFiles[0]);
      } else if (filesArray.length > 0) {
        console.warn('Only PDF files are supported');
      }
    } catch (error) {
      console.error('Error handling dropped files:', error);
    }
  };

  return (
    <div
      onDragEnter={handleDragEnter}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
      style={{
        border: isDragOver ? '2px dashed #007bff' : '2px dashed #ccc',
        borderRadius: '8px',
        padding: '40px',
        textAlign: 'center' as const,
        backgroundColor: isDragOver ? '#f8f9fa' : '#fff',
        cursor: 'pointer',
        transition: 'all 0.3s ease',
        minHeight: '120px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
      role="button"
      tabIndex={0}
      aria-label="Drop files here to upload"
    >
      Drop PDF files here
    </div>
  );
};

export default Dropzone;
