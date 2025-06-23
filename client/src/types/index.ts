export interface UploadResponse {
  files?: Array<{
    originalName: string;
  }>;
}

export interface ImageData {
  blob: Blob;
  url: string;
  pageNumber: number;
  selected: boolean;
}

export type ProcessingStatus = 'idle' | 'loading' | 'processing' | 'success' | 'error';