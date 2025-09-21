import React, { memo } from 'react';
import { type Charachter } from '../types/starwarsTypes';
import { Card, CardContent, Typography, Box, Chip, Divider } from '@mui/material';
import {
  cardStyles,
  cardContentStyles,
  titleStyles,
  dividerStyles,
  infoContainerStyles,
  infoRowStyles,
  infoLabelStyles,
  infoValueStyles,
  chipsContainerStyles,
  chipStyles,
} from './CharachterCard.style';

type CharachterCardProps = {
  charachter: Charachter;
};

function CharachterCard({ charachter }: CharachterCardProps): React.JSX.Element {
  const InfoRow = ({ label, value }: { label: string; value: string }): React.JSX.Element => (
    <Box sx={infoRowStyles}>
      <Typography variant="body2" sx={infoLabelStyles}>
        {label}:
      </Typography>
      <Typography variant="body2" sx={infoValueStyles}>
        {value}
      </Typography>
    </Box>
  );
  return (
    <Card sx={cardStyles}>
      <CardContent sx={cardContentStyles}>
        <Typography variant="h5" component="h2" sx={titleStyles}>
          {charachter.name}
        </Typography>

        <Divider sx={dividerStyles} />

        <Box sx={infoContainerStyles}>
          <InfoRow label="Gender" value={charachter.gender} />
          <InfoRow label="Birth Year" value={charachter.birth_year} />
          <InfoRow label="Height" value={`${charachter.height} cm`} />
          <InfoRow label="Mass" value={`${charachter.mass} kg`} />
        </Box>

        <Divider sx={dividerStyles} />

        <Box sx={chipsContainerStyles}>
          <Chip label={`Hair: ${charachter.hair_color}`} size="small" sx={chipStyles} />
          <Chip label={`Skin: ${charachter.skin_color}`} size="small" sx={chipStyles} />
        </Box>
      </CardContent>
    </Card>
  );
}

export default memo(CharachterCard);
