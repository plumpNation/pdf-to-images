import React, { useState } from 'react';

interface DropzoneProps {
  onFilesDrop: (files: File[]) => void;
}

const Dropzone: React.FC<DropzoneProps> = ({ onFilesDrop }) => {
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
      
      // Convert FileList to regular array
      const filesArray = Array.from(fileList);
      
      // Call the callback with the files array
      onFilesDrop(filesArray);
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
      Drop files here
    </div>
  );
};

export default Dropzone;
