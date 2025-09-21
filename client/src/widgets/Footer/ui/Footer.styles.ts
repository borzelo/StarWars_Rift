// Footer.styles.ts
import type { SxProps, Theme } from '@mui/material';

export const footerStyles: SxProps<Theme> = {
  background: 'linear-gradient(135deg, #000000 0%, #1a1a1a 100%)',
  borderTop: '1px solid #333',
  py: 3,
  px: 2,
  textAlign: 'center',
  marginTop: 'auto',
};

export const textStyles: SxProps<Theme> = {
  color: '#999',
  fontFamily: '"Roboto Mono", monospace',
  fontSize: '0.9rem',
  letterSpacing: '0.05em',
  '& span': {
    color: '#FFE81F',
    fontWeight: 'bold',
  },
};

export const heartStyles: SxProps<Theme> = {
  color: '#e74c3c',
  mx: 0.5,
  fontSize: '1rem',
};
