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
  py: 4,
  pt: '100px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'flex-start',
};

export const containerStyles: SxProps<Theme> = {
  maxWidth: 'md',
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: 3,
};

export const titleStyles: SxProps<Theme> = {
  color: '#FFE81F',
  fontFamily: '"Star Jedi", "Arial", sans-serif',
  textAlign: 'center',
  textTransform: 'uppercase',
  fontSize: { xs: '2rem', md: '2.5rem' },
  letterSpacing: '0.1em',
  textShadow: '0 0 10px rgba(255, 232, 31, 0.5)',
  mb: 2,
};

export const subtitleStyles: SxProps<Theme> = {
  color: '#999',
  fontFamily: '"Roboto Condensed", sans-serif',
  textAlign: 'center',
  fontSize: '1.1rem',
  mb: 4,
};

export const chatContainerStyles: SxProps<Theme> = {
  width: '100%',
  maxWidth: '800px',
  background: 'linear-gradient(135deg, rgba(12, 12, 12, 0.95) 0%, rgba(26, 26, 26, 0.95) 100%)',
  border: '2px solid #333',
  borderRadius: 3,
  p: 3,
  boxShadow: '0 20px 40px rgba(0, 0, 0, 0.5)',
  backdropFilter: 'blur(10px)',
};

export const messagesContainerStyles: SxProps<Theme> = {
  height: '400px',
  overflowY: 'auto',
  mb: 3,
  p: 2,
  background: 'rgba(0, 0, 0, 0.3)',
  borderRadius: 2,
  border: '1px solid #333',
};

export const messageStyles: SxProps<Theme> = {
  mb: 2,
  p: 2,
  borderRadius: 2,
  maxWidth: '80%',
};

export const userMessageStyles: SxProps<Theme> = {
  ...messageStyles,
  background: 'linear-gradient(135deg, #1a1a1a 0%, #2c2c2c 100%)',
  border: '1px solid #444',
  marginLeft: 'auto',
  textAlign: 'right',
};

export const aiMessageStyles: SxProps<Theme> = {
  ...messageStyles,
  background: 'linear-gradient(135deg, #2c2c2c 0%, #1a1a1a 100%)',
  border: '1px solid #FFE81F',
  marginRight: 'auto',
};

export const messageTextStyles: SxProps<Theme> = {
  color: 'white',
  fontFamily: '"Roboto Condensed", sans-serif',
  fontSize: '1rem',
  lineHeight: 1.5,
};

export const inputContainerStyles: SxProps<Theme> = {
  display: 'flex',
  gap: 2,
  alignItems: 'center',
};

export const inputStyles: SxProps<Theme> = {
  flexGrow: 1,
  '& .MuiInputBase-input': {
    color: 'white',
    fontFamily: '"Roboto Mono", monospace',
    background: 'rgba(0, 0, 0, 0.5)',
    borderRadius: 1,
    padding: '12px 16px',
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
};

export const sendButtonStyles: SxProps<Theme> = {
  background: '#FFE81F',
  color: '#000',
  fontFamily: '"Roboto Condensed", sans-serif',
  fontWeight: 'bold',
  textTransform: 'uppercase',
  letterSpacing: '0.1em',
  padding: '12px 24px',
  minWidth: '120px',
  '&:hover': {
    background: '#ffd700',
    boxShadow: '0 0 15px rgba(255, 232, 31, 0.5)',
  },
  '&:disabled': {
    background: '#666',
    color: '#999',
  },
};

export const loadingStyles: SxProps<Theme> = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  py: 2,
};

export const errorStyles: SxProps<Theme> = {
  color: '#FF6B6B',
  fontFamily: '"Roboto Mono", monospace',
  textAlign: 'center',
  p: 2,
  background: 'rgba(255, 107, 107, 0.1)',
  borderRadius: 2,
  border: '1px solid #FF6B6B',
};
