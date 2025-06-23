import React from 'react';
import { ProcessingStatus } from '../types';

interface StatusDisplayProps {
  status: ProcessingStatus;
  message: string;
}

export const StatusDisplay: React.FC<StatusDisplayProps> = ({ status, message }) => {
  if (!message) return null;

  return <div>{message}</div>;
};
