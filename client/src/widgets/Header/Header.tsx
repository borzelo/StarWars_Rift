import React from 'react';
import { NavLink, matchPath, useLocation } from 'react-router';
import { Box, Container, Typography } from '@mui/material';
import {
  headerStyles,
  navContainerStyles,
  logoStyles,
  navLinksContainerStyles,
} from './ui/Header.style';
import { getNavLinkStyles } from './Header.helper';

const navigationLinks = [
  { to: '/', label: 'Все персонажи', end: true },
  { to: '/ai', label: 'Чат с ИИ', end: true },
];

export default function Header(): React.JSX.Element {
  const location = useLocation();

  return (
    <Box component="header" sx={headerStyles}>
      <Container maxWidth="xl">
        <Box sx={navContainerStyles}>
          <Typography component={NavLink} to="/" sx={logoStyles}>
            SW
          </Typography>

          <Box component="nav" sx={navLinksContainerStyles}>
            {navigationLinks.map(({ to, label, end }) => {
              const isActive = Boolean(
                matchPath({ path: to, caseSensitive: false, end }, location.pathname),
              );

              return (
                <Box key={to} component={NavLink} to={to} sx={getNavLinkStyles(isActive)}>
                  {label}
                </Box>
              );
            })}
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
