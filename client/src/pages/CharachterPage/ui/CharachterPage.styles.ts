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
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'flex-start',
  py: 3,
  pt: '100px',
};

export const containerStyles: SxProps<Theme> = {
  maxWidth: 'lg',
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
};

export const contentWrapperStyles: SxProps<Theme> = {
  width: '100%',
  maxWidth: '800px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: 2,
};

export const backButtonStyles: SxProps<Theme> = {
  color: '#FFE81F',
  borderColor: '#FFE81F',
  fontFamily: '"Roboto Condensed", sans-serif',
  fontWeight: 'bold',
  textTransform: 'uppercase',
  letterSpacing: '0.1em',
  marginLeft: { xs: 2, md: 0 },
  '&:hover': {
    borderColor: '#FFE81F',
    background: 'rgba(255, 232, 31, 0.1)',
    boxShadow: '0 0 15px rgba(255, 232, 31, 0.3)',
  },
};

export const cardStyles: SxProps<Theme> = {
  background: 'linear-gradient(135deg, rgba(12, 12, 12, 0.95) 0%, rgba(26, 26, 26, 0.95) 100%)',
  border: '2px solid #333',
  borderRadius: 3,
  p: { xs: 3, md: 4 },
  boxShadow: '0 20px 40px rgba(0, 0, 0, 0.5)',
  backdropFilter: 'blur(10px)',
  width: '100%',
};

export const titleStyles: SxProps<Theme> = {
  color: '#FFE81F',
  fontFamily: '"Star Jedi", "Arial", sans-serif',
  textAlign: 'center',
  textTransform: 'uppercase',
  fontSize: { xs: '1.8rem', md: '2.5rem' },
  letterSpacing: '0.1em',
  mb: 3,
  textShadow: '0 0 10px rgba(255, 232, 31, 0.5)',
};

export const dividerStyles: SxProps<Theme> = {
  bgcolor: '#333',
  mb: 3,
  mt: 2,
};

export const infoGridStyles: SxProps<Theme> = {
  mb: 3,
  justifyContent: 'center',
};

export const infoItemStyles: SxProps<Theme> = {
  p: 2,
  textAlign: 'center',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  minHeight: '100px',
};

export const infoLabelStyles: SxProps<Theme> = {
  color: '#999',
  fontFamily: '"Roboto Condensed", sans-serif',
  fontWeight: 'bold',
  textTransform: 'uppercase',
  fontSize: '0.9rem',
  letterSpacing: '0.05em',
  mb: 1,
};

export const infoValueStyles: SxProps<Theme> = {
  color: 'white',
  fontFamily: '"Roboto Mono", monospace',
  fontWeight: 'bold',
  fontSize: '1.2rem',
  textAlign: 'center',
};

export const chipsContainerStyles: SxProps<Theme> = {
  display: 'flex',
  justifyContent: 'center',
  gap: 2,
  flexWrap: 'wrap',
  mt: 3,
};

export const chipStyles: SxProps<Theme> = {
  bgcolor: '#2c2c2c',
  color: 'white',
  fontFamily: '"Roboto Condensed", sans-serif',
  fontWeight: 'bold',
  border: '1px solid #444',
  fontSize: '1rem',
  padding: '8px 16px',
  '&:hover': {
    bgcolor: '#FFE81F',
    color: '#000',
  },
};

export const formStyles: SxProps<Theme> = {
  mt: 3,
  p: 3,
  background: 'rgba(26, 26, 26, 0.8)',
  borderRadius: 2,
  border: '1px solid #333',
};

export const formGridStyles: SxProps<Theme> = {
  mb: 3,
};

export const formItemStyles: SxProps<Theme> = {
  p: 1,
};

export const textFieldStyles: SxProps<Theme> = {
  '& .MuiInputBase-input': {
    color: 'white',
    fontFamily: '"Roboto Mono", monospace',
  },
  '& .MuiInputLabel-root': {
    color: '#999',
    fontFamily: '"Roboto Condensed", sans-serif',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: '#333',
    },
    '&:hover fieldset': {
      borderColor: '#FFE81F',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#FFE81F',
    },
  },
  '& .MuiFormHelperText-root': {
    color: '#FF6B6B',
    fontFamily: '"Roboto Mono", monospace',
  },
};

export const buttonGroupStyles: SxProps<Theme> = {
  display: 'flex',
  gap: 2,
  justifyContent: 'center',
  mt: 3,
};

export const saveButtonStyles: SxProps<Theme> = {
  background: '#FFE81F',
  color: '#000',
  fontFamily: '"Roboto Condensed", sans-serif',
  fontWeight: 'bold',
  textTransform: 'uppercase',
  '&:hover': {
    background: '#ffd700',
    boxShadow: '0 0 15px rgba(255, 232, 31, 0.5)',
  },
};

export const cancelButtonStyles: SxProps<Theme> = {
  color: '#999',
  borderColor: '#333',
  fontFamily: '"Roboto Condensed", sans-serif',
  fontWeight: 'bold',
  textTransform: 'uppercase',
  '&:hover': {
    color: '#FFE81F',
    borderColor: '#FFE81F',
  },
};

export const editButtonStyles: SxProps<Theme> = {
  color: '#FFE81F',
  borderColor: '#FFE81F',
  fontFamily: '"Roboto Condensed", sans-serif',
  fontWeight: 'bold',
  textTransform: 'uppercase',
  mt: 2,
  '&:hover': {
    background: 'rgba(255, 232, 31, 0.1)',
    boxShadow: '0 0 15px rgba(255, 232, 31, 0.3)',
  },
};
