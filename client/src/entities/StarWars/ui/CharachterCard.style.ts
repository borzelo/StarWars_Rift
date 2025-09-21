// CharachterCard.styles.ts
import type { SxProps, Theme } from '@mui/material';

export const cardStyles: SxProps<Theme> = {
  background: 'linear-gradient(135deg, #0c0c0c 0%, #1a1a1a 100%)',
  border: '2px solid #333',
  borderRadius: 2,
  transition: 'all 0.3s ease',
  height: '100%',
  minHeight: '280px', // Увеличиваем минимальную высоту
  display: 'flex',
  flexDirection: 'column',
  '&:hover': {
    transform: 'translateY(-4px) scale(1.02)', // Добавляем небольшое увеличение
    boxShadow: '0 8px 25px rgba(255, 232, 31, 0.2)',
    borderColor: '#FFE81F'
  }
};

export const cardContentStyles: SxProps<Theme> = {
  flexGrow: 1,
  p: 3,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between', // Распределяем контент внутри карточки
};

export const titleStyles: SxProps<Theme> = {
  color: '#FFE81F',
  fontFamily: '"Roboto Condensed", sans-serif',
  fontWeight: 'bold',
  textAlign: 'center',
  mb: 2, // Уменьшаем отступ
  textTransform: 'uppercase',
  letterSpacing: '0.05em',
  fontSize: '1.3rem', // Увеличиваем размер шрифта
};

export const dividerStyles: SxProps<Theme> = {
  bgcolor: '#333',
  mb: 3,
};

export const infoContainerStyles: SxProps<Theme> = {
  mb: 3,
};

export const infoRowStyles: SxProps<Theme> = {
  display: 'flex',
  justifyContent: 'space-between',
  mb: 1,
};

export const infoLabelStyles: SxProps<Theme> = {
  color: '#999',
  fontWeight: 'medium',
  textTransform: 'uppercase',
  fontSize: '0.8rem' // Немного уменьшаем для баланса
};

export const infoValueStyles: SxProps<Theme> = {
  color: 'white',
  fontWeight: 'bold',
  fontFamily: '"Roboto Mono", monospace',
  fontSize: '0.95rem' // Немного увеличиваем
};

export const chipsContainerStyles: SxProps<Theme> = {
  display: 'flex',
  flexWrap: 'wrap',
  gap: 1,
  justifyContent: 'center',
};

export const chipStyles: SxProps<Theme> = {
  bgcolor: '#2c2c2c',
  color: 'white',
  fontSize: '0.75rem',
};
