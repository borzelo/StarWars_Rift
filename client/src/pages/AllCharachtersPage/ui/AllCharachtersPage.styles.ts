import type { SxProps, Theme } from '@mui/material';

export const pageStyles: SxProps<Theme> = {
  minHeight: 'calc(100vh - 140px)',
  background: () => `
    url(${import.meta.env.BASE_URL}background.jpg)
  `,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundAttachment: 'fixed',
  py: 2,
  pt: '90px',
  display: 'flex',
  flexDirection: 'column',
};

export const titleStyles: SxProps<Theme> = {
  mb: 4,
  color: '#FFE81F',
  textTransform: 'uppercase',
  fontFamily: '"Star Jedi", "Arial", sans-serif',
  textAlign: 'center',
  textShadow: '2px 2px 4px rgba(0,0,0,0.8)',
  fontSize: { xs: '2rem', md: '3rem' },
  letterSpacing: '0.1em',
};

export const containerStyles: SxProps<Theme> = {
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
};

export const loaderContainerStyles: SxProps<Theme> = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  minHeight: '40vh',
  flexGrow: 1,
};

export const loaderStyles: SxProps<Theme> = {
  color: '#FFE81F',
  '& .MuiCircularProgress-circle': {
    strokeWidth: 3,
  },
};

export const contentContainerStyles: SxProps<Theme> = {
  flexGrow: 1,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
};

export const cardsWrapperStyles: SxProps<Theme> = {
  flexGrow: 1,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  minHeight: '350px',
};

export const gridContainerStyles: SxProps<Theme> = {
  width: '100%',
  justifyContent: 'center',
};
