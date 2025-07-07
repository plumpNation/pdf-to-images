import React from 'react';
import { ImageData } from '../types';

interface UploadProgressProps {
  images: ImageData[];
  isUploading: boolean;
}

export const UploadProgress: React.FC<UploadProgressProps> = ({ images, isUploading }) => {
  const selectedImages = images.filter(image => image.selected);
  const totalToUpload = selectedImages.length;
  const successfulUploads = selectedImages.filter(image => image.uploadStatus === 'success').length;
  const failedUploads = selectedImages.filter(image => image.uploadStatus === 'error').length;
  const uploading = selectedImages.filter(image => image.uploadStatus === 'uploading').length;

  // Don't show the component if there are no selected images or if not uploading/uploaded
  if (totalToUpload === 0 || (!isUploading && successfulUploads === 0 && failedUploads === 0)) {
    return null;
  }

  const progressPercentage = totalToUpload > 0 ? ((successfulUploads + failedUploads) / totalToUpload) * 100 : 0;

  return (
    <div style={{
      marginTop: '20px',
      marginBottom: '20px',
    }}>
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '10px'
      }}>
        <h4 style={{ margin: 0 }}>Upload Progress</h4>
        <span>
          {successfulUploads + failedUploads} / {totalToUpload}
        </span>
      </div>

      {/* Progress Bar */}
      <div style={{
        width: '100%',
        height: '8px',
        backgroundColor: '#e9ecef',
        borderRadius: '4px',
        overflow: 'hidden',
        marginBottom: '10px'
      }}>
        <div style={{
          width: `${progressPercentage}%`,
          height: '100%',
          backgroundColor: failedUploads > 0 ? '#dc3545' : successfulUploads === totalToUpload ? '#28a745' : '#007bff',
          transition: 'width 0.3s ease'
        }} />
      </div>

      {/* Status Details */}
      <div style={{
        display: 'flex',
        gap: '15px'
      }}>
        {successfulUploads > 0 && (
          <span>
            ✅ {successfulUploads} successful
          </span>
        )}
        {uploading > 0 && (
          <span>
            ⏳ {uploading} uploading
          </span>
        )}
        {failedUploads > 0 && (
          <span>
            ❌ {failedUploads} failed
          </span>
        )}
      </div>
    </div>
  );
};
