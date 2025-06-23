import React, { useState } from 'react';

interface UploadSectionProps {
  onUpload: (endpoint: string) => Promise<void>;
}

export const UploadSection: React.FC<UploadSectionProps> = ({ onUpload }) => {
  const [endpoint, setEndpoint] = useState<string>('');

  const handleUpload = (): void => {
    onUpload(endpoint);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter upload endpoint URL"
        value={endpoint}
        onChange={(e) => setEndpoint(e.target.value)}
      />
      <button onClick={handleUpload}>
        Upload All to Endpoint
      </button>
    </div>
  );
};
