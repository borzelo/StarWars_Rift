import type { SxProps, Theme } from '@mui/material';

export const paginationContainerStyles: SxProps<Theme> = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: 2,
  mt: 4,
  mb: 2,
  flexWrap: 'wrap',
  p: 2,
  background: 'rgba(0, 0, 0, 0.7)',
  borderRadius: 2,
  border: '1px solid #333',
  backdropFilter: 'blur(10px)',
};

export const pageInfoStyles: SxProps<Theme> = {
  color: '#FFE81F',
  fontFamily: '"Roboto Mono", monospace',
  fontWeight: 'bold',
  minWidth: '140px',
  textAlign: 'center',
  textShadow: '0 0 5px rgba(255, 232, 31, 0.5)',
  fontSize: '1rem',
};

export const navButtonStyles: SxProps<Theme> = {
  color: '#FFE81F',
  borderColor: '#FFE81F',
  fontFamily: '"Roboto Condensed", sans-serif',
  fontWeight: 'bold',
  textTransform: 'uppercase',
  letterSpacing: '0.1em',
  '&:hover': {
    borderColor: '#FFE81F',
    background: 'rgba(255, 232, 31, 0.1)',
    boxShadow: '0 0 15px rgba(255, 232, 31, 0.3)',
  },
  '&:disabled': {
    color: '#666',
    borderColor: '#333',
  },
};

export const pageButtonStyles: SxProps<Theme> = {
  minWidth: '40px',
  height: '40px',
  color: '#999',
  borderColor: '#333',
  fontFamily: '"Roboto Mono", monospace',
  fontWeight: 'bold',
  '&:hover': {
    color: '#FFE81F',
    borderColor: '#FFE81F',
    background: 'rgba(255, 232, 31, 0.1)',
  },
  '&.MuiButton-contained': {
    background: '#FFE81F',
    color: '#000',
    fontWeight: 'bold',
    '&:hover': {
      background: '#ffd700',
      boxShadow: '0 0 15px rgba(255, 232, 31, 0.5)',
    },
  },
};

export const pagesContainerStyles: SxProps<Theme> = {
  display: 'flex',
  gap: 1,
  flexWrap: 'wrap',
  justifyContent: 'center',
};
