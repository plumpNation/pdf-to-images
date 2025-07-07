export interface UploadResponse {
  files?: Array<{
    originalName: string;
  }>;
  folder?: string;
}

export type UploadStatus = 'idle' | 'uploading' | 'success' | 'error';

export interface ImageData {
  blob: Blob;
  url: string;
  pageNumber: number;
  selected: boolean;
  uploadStatus?: UploadStatus;
}

export type ProcessingStatus = 'idle' | 'loading' | 'processing' | 'success' | 'error';