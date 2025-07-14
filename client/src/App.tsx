import { type FC } from 'react';

import Dropzone from './components/Dropzone';
import { QualitySlider } from './components/QualitySlider';
import { UploadSection } from './components/UploadSection';
import { StatusDisplay } from './components/StatusDisplay';
import { ImageDisplay } from './components/ImageDisplay';
import { UploadProgress } from './components/UploadProgress';
import { UploadStatusFilterComponent } from './components/UploadStatusFilter';
import { usePdfConverter } from './hooks/usePdfConverter';

const App: FC = () => {
  const {
    quality,
    setQuality,
    status,
    statusMessage,
    images,
    filteredImages,
    imageCounts,
    isProcessingComplete,
    isUploading,
    uploadStatusFilter,
    handleFileChange,
    handleUpload,
    handleImageToggle,
    handleImageReorder,
    handleUploadStatusFilterChange
  } = usePdfConverter();

  const hasSelectedImages = images.some(image => image.selected);

  return (
    <div>
      <Dropzone onFileChange={handleFileChange} />

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

      {isProcessingComplete && (
        <UploadStatusFilterComponent
          currentFilter={uploadStatusFilter}
          onFilterChange={handleUploadStatusFilterChange}
          imageCounts={imageCounts}
        />
      )}

      <ImageDisplay
        images={filteredImages}
        onImageToggle={handleImageToggle}
        onImageReorder={handleImageReorder}
      />
    </div>
  );
};

export default App;