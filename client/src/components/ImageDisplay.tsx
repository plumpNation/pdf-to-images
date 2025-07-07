import React from 'react';
import { ImageData } from '../types';

interface ImageDisplayProps {
  images: ImageData[];
  onImageToggle: (pageNumber: number, selected: boolean) => void;
  onImageReorder?: (fromIndex: number, toIndex: number) => void;
}

const getUploadStatusIcon = (uploadStatus?: string) => {
  switch (uploadStatus) {
    case 'uploading':
      return '⏳'; // Hourglass for uploading
    case 'success':
      return '✅'; // Green checkmark for success
    case 'error':
      return '❌'; // Red X for error
    default:
      return null;
  }
};

export const ImageDisplay: React.FC<ImageDisplayProps> = ({ images, onImageToggle, onImageReorder }) => {
  const selectedCount = images.filter(img => img.selected).length;
  const totalCount = images.length;

  const handleSelectAll = () => {
    images.forEach(image => {
      if (!image.selected) {
        onImageToggle(image.pageNumber, true);
      }
    });
  };

  const handleDeselectAll = () => {
    images.forEach(image => {
      if (image.selected) {
        onImageToggle(image.pageNumber, false);
      }
    });
  };

  const handleMoveUp = (index: number) => {
    if (index > 0 && onImageReorder) {
      onImageReorder(index, index - 1);
    }
  };

  const handleMoveDown = (index: number) => {
    if (index < images.length - 1 && onImageReorder) {
      onImageReorder(index, index + 1);
    }
  };

  if (images.length === 0) {
    return null;
  }

  return (
    <div>
      <div style={{ marginBottom: '20px', padding: '10px', backgroundColor: '#f5f5f5', borderRadius: '5px' }}>
        <h3>Generated Images ({selectedCount} of {totalCount} selected for upload)</h3>
        <div style={{ display: 'flex', gap: '10px' }}>
          <button
            onClick={handleSelectAll}
            disabled={selectedCount === totalCount}
            style={{
              padding: '5px 10px',
              backgroundColor: selectedCount === totalCount ? '#ccc' : '#007bff',
              color: 'white',
              border: 'none',
              borderRadius: '3px',
              cursor: selectedCount === totalCount ? 'not-allowed' : 'pointer'
            }}
          >
            Select All
          </button>
          <button
            onClick={handleDeselectAll}
            disabled={selectedCount === 0}
            style={{
              padding: '5px 10px',
              backgroundColor: selectedCount === 0 ? '#ccc' : '#dc3545',
              color: 'white',
              border: 'none',
              borderRadius: '3px',
              cursor: selectedCount === 0 ? 'not-allowed' : 'pointer'
            }}
          >
            Deselect All
          </button>
        </div>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '20px',
        maxWidth: '100%'
      }}>
        {images.map((image, index) => (
          <div key={image.pageNumber} style={{
            border: '1px solid #ccc',
            padding: '15px',
            borderRadius: '8px',
            backgroundColor: 'white',
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
            width: '100%',
            maxWidth: '25vw',
            minWidth: '250px'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '10px' }}>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <input
                  type="checkbox"
                  id={`page-${image.pageNumber}`}
                  checked={image.selected}
                  onChange={(e) => onImageToggle(image.pageNumber, e.target.checked)}
                  style={{ marginRight: '10px' }}
                />
                <label htmlFor={`page-${image.pageNumber}`}>
                  Page {image.pageNumber} {image.selected ? '(will be uploaded)' : '(will be skipped)'}
                </label>
                {image.uploadStatus && (
                  <span style={{ marginLeft: '10px', fontSize: '16px' }}>
                    {getUploadStatusIcon(image.uploadStatus)}
                  </span>
                )}
              </div>

              {onImageReorder && (
                <div style={{ display: 'flex', gap: '5px' }}>
                  <button
                    onClick={() => handleMoveUp(index)}
                    disabled={index === 0}
                    style={{
                      padding: '4px 8px',
                      backgroundColor: index === 0 ? '#ccc' : '#28a745',
                      color: 'white',
                      border: 'none',
                      borderRadius: '3px',
                      cursor: index === 0 ? 'not-allowed' : 'pointer',
                      fontSize: '12px'
                    }}
                    title="Move up"
                  >
                    ↑
                  </button>
                  <button
                    onClick={() => handleMoveDown(index)}
                    disabled={index === images.length - 1}
                    style={{
                      padding: '4px 8px',
                      backgroundColor: index === images.length - 1 ? '#ccc' : '#28a745',
                      color: 'white',
                      border: 'none',
                      borderRadius: '3px',
                      cursor: index === images.length - 1 ? 'not-allowed' : 'pointer',
                      fontSize: '12px'
                    }}
                    title="Move down"
                  >
                    ↓
                  </button>
                </div>
              )}
            </div>

            <img
              src={image.url}
              alt={`Page ${image.pageNumber}`}
              style={{
                width: '100%',
                height: 'auto',
                opacity: image.selected ? 1 : 0.5,
                transition: 'opacity 0.2s ease',
                borderRadius: '4px'
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
