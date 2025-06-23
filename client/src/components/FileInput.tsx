import React from 'react';

interface FileInputProps {
  onFileChange: (file: File) => void;
}

export const FileInput: React.FC<FileInputProps> = ({ onFileChange }) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const file = event.target.files?.[0];
    if (file) {
      onFileChange(file);
    }
  };

  return (
    <input 
      type="file" 
      accept=".pdf" 
      onChange={handleChange}
    />
  );
};
