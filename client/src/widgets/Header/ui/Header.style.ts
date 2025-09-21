// Header.styles.ts
import type { SxProps, Theme } from '@mui/material';

export const headerStyles = {
  background: 'linear-gradient(135deg, #000000 0%, #1a1a1a 100%)',
  borderBottom: '2px solid #FFE81F',
  boxShadow: '0 2px 20px rgba(255, 232, 31, 0.1)',
  py: 2,
  px: 4,
  position: 'sticky',
  top: 0,
  zIndex: 1000,
  backdropFilter: 'blur(10px)',
} satisfies SxProps<Theme>;

export const navContainerStyles = {
  display: 'flex',
  alignItems: 'center',
  gap: 4,
  maxWidth: 'xl',
  margin: '0 auto',
} satisfies SxProps<Theme>;

export const logoStyles = {
  fontFamily: '"Star Jedi", "Arial", sans-serif',
  color: '#FFE81F',
  fontSize: '1.8rem',
  textDecoration: 'none',
  marginRight: 'auto', // Логотип сдвигается влево
  textShadow: '0 0 10px rgba(255, 232, 31, 0.5)',
  letterSpacing: '0.1em',
  '&:hover': {
    color: '#FFE81F',
    textShadow: '0 0 15px rgba(255, 232, 31, 0.8)',
  },
} satisfies SxProps<Theme>;

export const navLinksContainerStyles = {
  display: 'flex',
  gap: 3,
  alignItems: 'center',
} satisfies SxProps<Theme>;

export const navLinkBaseStyles = {
  color: '#999',
  textDecoration: 'none',
  fontFamily: '"Roboto Condensed", sans-serif',
  fontWeight: 'bold',
  textTransform: 'uppercase',
  letterSpacing: '0.1em',
  fontSize: '1.1rem',
  padding: '0.5rem 1rem',
  border: '2px solid transparent',
  borderRadius: '4px',
  transition: 'all 0.3s ease',
  position: 'relative',
  '&:hover': {
    color: '#FFE81F',
    borderColor: '#FFE81F',
    boxShadow: '0 0 15px rgba(255, 232, 31, 0.3)',
  },
} satisfies SxProps<Theme>;

export const navLinkActiveStyles = {
  color: '#FFE81F',
  borderColor: '#FFE81F',
  background: 'rgba(255, 232, 31, 0.1)',
  '&::after': {
    content: '""',
    position: 'absolute',
    bottom: '-8px',
    left: '50%',
    transform: 'translateX(-50%)',
    width: '20px',
    height: '2px',
    background: '#FFE81F',
  },
} satisfies SxProps<Theme>;
