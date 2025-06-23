import React from 'react';
import { ImageData } from '../types';

interface ImageDisplayProps {
  images: ImageData[];
  onImageToggle: (pageNumber: number, selected: boolean) => void;
}

export const ImageDisplay: React.FC<ImageDisplayProps> = ({ images, onImageToggle }) => {
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
      
      {images.map((image) => (
        <div key={image.pageNumber} style={{ marginBottom: '20px', border: '1px solid #ccc', padding: '10px' }}>
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
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
          </div>
          <img 
            src={image.url} 
            alt={`Page ${image.pageNumber}`} 
            style={{ 
              maxWidth: '100%', 
              opacity: image.selected ? 1 : 0.5,
              transition: 'opacity 0.2s ease'
            }} 
          />
        </div>
      ))}
    </div>
  );
};
