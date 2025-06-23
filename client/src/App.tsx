import { type FC } from 'react';

import { FileInput } from './components/FileInput';
import { QualitySlider } from './components/QualitySlider';
import { UploadSection } from './components/UploadSection';
import { StatusDisplay } from './components/StatusDisplay';
import { ImageDisplay } from './components/ImageDisplay';
import { usePdfConverter } from './hooks/usePdfConverter';

const App: FC = () => {
  const {
    quality,
    setQuality,
    status,
    statusMessage,
    images,
    isProcessingComplete,
    handleFileChange,
    handleUpload,
    handleImageToggle
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
      
      <StatusDisplay 
        status={status} 
        message={statusMessage} 
      />
      
      <ImageDisplay 
        images={images} 
        onImageToggle={handleImageToggle} 
      />
    </div>
  );
};

export default App;