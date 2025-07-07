import React from 'react';
import type { UploadStatusFilter } from '../types';

interface UploadStatusFilterProps {
  currentFilter: UploadStatusFilter;
  onFilterChange: (filter: UploadStatusFilter) => void;
  imageCounts: {
    all: number;
    idle: number;
    uploading: number;
    success: number;
    error: number;
  };
}

export const UploadStatusFilterComponent: React.FC<UploadStatusFilterProps> = ({
  currentFilter,
  onFilterChange,
  imageCounts
}) => {
  const filterOptions: Array<{ value: UploadStatusFilter; label: string; emoji: string }> = [
    { value: 'all', label: 'All Images', emoji: '📄' },
    { value: 'idle', label: 'Not Uploaded', emoji: '⏸️' },
    { value: 'uploading', label: 'Uploading', emoji: '⬆️' },
    { value: 'success', label: 'Uploaded', emoji: '✅' },
    { value: 'error', label: 'Failed', emoji: '❌' }
  ];

  const containerStyle: React.CSSProperties = {
    margin: '20px 0',
    padding: '20px',
    border: '1px solid #ddd',
  };

  const titleStyle: React.CSSProperties = {
    margin: '0 0 15px 0',
  };

  const buttonContainerStyle: React.CSSProperties = {
    display: 'flex',
    gap: '10px',
    flexWrap: 'wrap'
  };

  const getButtonStyle = (isActive: boolean): React.CSSProperties => ({
    borderColor: isActive ? 'black' : 'white',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    minWidth: '120px',
    justifyContent: 'center'
  });

  return (
    <div style={containerStyle}>
      <h3 style={titleStyle}>Filter by Upload Status</h3>
      <div style={buttonContainerStyle}>
        {filterOptions.map(({ value, label, emoji }) => (
          <button
            key={value}
            style={getButtonStyle(currentFilter === value)}
            onClick={() => onFilterChange(value)}
            title={`Show ${label.toLowerCase()}`}
          >
            <span>{emoji}</span>
            <span>{label}</span>
            <span>({imageCounts[value]})</span>
          </button>
        ))}
      </div>
    </div>
  );
};
