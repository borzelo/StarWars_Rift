import React from 'react';
import { Box, Typography } from '@mui/material';
import { footerStyles, textStyles, heartStyles } from './ui/Footer.styles';

export default function Footer(): React.JSX.Element {
  return (
    <Box component="footer" sx={footerStyles}>
      <Typography sx={textStyles}>
        From Islam Ediyev to <span>$Rift</span> with
        <Box component="span" sx={heartStyles}>
          ❤️
        </Box>
      </Typography>
    </Box>
  );
}
