import React from 'react';
import { ImageData } from '../types';

interface ImageDisplayProps {
  images: ImageData[];
}

export const ImageDisplay: React.FC<ImageDisplayProps> = ({ images }) => {
  return (
    <div>
      {images.map((image) => (
        <div key={image.pageNumber}>
          <p>Page {image.pageNumber}</p>
          <img src={image.url} alt={`Page ${image.pageNumber}`} />
        </div>
      ))}
    </div>
  );
};
