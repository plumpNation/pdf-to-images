import { type FC } from 'react';

import { FileInput } from './components/FileInput';
import { QualitySlider } from './components/QualitySlider';
import { UploadSection } from './components/UploadSection';
import { StatusDisplay } from './components/StatusDisplay';
import { ImageDisplay } from './components/ImageDisplay';
import { UploadProgress } from './components/UploadProgress';
import { usePdfConverter } from './hooks/usePdfConverter';

const App: FC = () => {
  const {
    quality,
    setQuality,
    status,
    statusMessage,
    images,
    isProcessingComplete,
    isUploading,
    handleFileChange,
    handleUpload,
    handleImageToggle,
    handleImageReorder
  } = usePdfConverter();

  const hasSelectedImages = images.some(image => image.selected);

  return (
    <div>
      <FileInput onFileChange={handleFileChange} />

      <QualitySlider
        quality={quality}
        onQualityChange={setQuality}
      />

      {isProcessingComplete && hasSelectedImages && (
        <UploadSection onUpload={handleUpload} />
      )}

      <UploadProgress
        images={images}
        isUploading={isUploading}
      />

      <StatusDisplay
        status={status}
        message={statusMessage}
      />

      <ImageDisplay
        images={images}
        onImageToggle={handleImageToggle}
        onImageReorder={handleImageReorder}
      />
    </div>
  );
};

export default App;