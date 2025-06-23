import React from 'react';

interface QualitySliderProps {
  quality: number;
  onQualityChange: (quality: number) => void;
}

export const QualitySlider: React.FC<QualitySliderProps> = ({ quality, onQualityChange }) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    onQualityChange(parseFloat(event.target.value));
  };

  return (
    <div>
      <label htmlFor="qualitySlider">JPEG Quality:</label>
      <input
        id="qualitySlider"
        type="range"
        min="0.1"
        max="1"
        step="0.1"
        value={quality}
        onChange={handleChange}
      />
      <span>{quality}</span>
    </div>
  );
};
