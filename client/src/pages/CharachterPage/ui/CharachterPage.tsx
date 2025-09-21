import { useAppDispatch, useAppSelector } from '@/shared/hooks/hooks';
import {
  Box,
  Container,
  Typography,
  Paper,
  Divider,
  Grid,
  Chip,
  Button,
  TextField,
} from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  pageStyles,
  containerStyles,
  contentWrapperStyles,
  backButtonStyles,
  cardStyles,
  titleStyles,
  dividerStyles,
  infoGridStyles,
  infoItemStyles,
  infoLabelStyles,
  infoValueStyles,
  chipsContainerStyles,
  chipStyles,
  formStyles,
  formGridStyles,
  formItemStyles,
  textFieldStyles,
  buttonGroupStyles,
  saveButtonStyles,
  cancelButtonStyles,
  editButtonStyles,
} from './CharachterPage.styles';
import type { Charachter } from '@/entities/StarWars/types/starwarsTypes';
import { CharacterSchema } from '@/entities/StarWars/types/starwarsSchema';
import { updateCharacter } from '@/entities/StarWars/model/starwarsSlice';

export default function CharachterPage(): React.JSX.Element {
  const { name } = useParams<{ name: string }>();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { charachters } = useAppSelector((store) => store.starwars);
  const rightCharachter = charachters.find((char) => char.name === name);
  const [editMode, setEditMode] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<Charachter>({
    resolver: zodResolver(CharacterSchema),
    defaultValues: rightCharachter ?? {},
  });

  useEffect(() => {
    if (rightCharachter) {
      reset(rightCharachter);
    }
  }, [rightCharachter, reset]);

  const onSubmit = (data: Charachter): void => {
    dispatch(updateCharacter(data));
    setEditMode(false);
  };

  const handleCancel = (): void => {
    reset(rightCharachter);
    setEditMode(false);
  };

  if (!rightCharachter) {
    return (
      <Box sx={pageStyles}>
        <Container sx={containerStyles}>
          <Box sx={contentWrapperStyles}>
            <Button variant="outlined" onClick={() => navigate(-1)} sx={backButtonStyles}>
              ← Back to Characters
            </Button>
            <Typography
              variant="h4"
              sx={{ color: '#FFE81F', textAlign: 'center', width: '100%', mt: 2 }}
            >
              Character not found
            </Typography>
          </Box>
        </Container>
      </Box>
    );
  }

  return (
    <Box sx={pageStyles}>
      <Container sx={containerStyles}>
        <Box sx={contentWrapperStyles}>
          <Button variant="outlined" onClick={() => navigate(-1)} sx={backButtonStyles}>
            ← Back to Characters
          </Button>

          <Paper elevation={10} sx={cardStyles}>
            <Typography variant="h2" sx={titleStyles}>
              {rightCharachter.name}
            </Typography>

            <Divider sx={dividerStyles} />

            {editMode ? (
              // Форма редактирования
              <form onSubmit={handleSubmit(onSubmit)}>
                <Box sx={formStyles}>
                  <Grid container spacing={2} sx={formGridStyles}>
                    <Grid size={{ xs: 12, sm: 6 }} sx={formItemStyles}>
                      <TextField
                        label="Birth Year"
                        {...register('birth_year')}
                        error={!!errors.birth_year}
                        helperText={errors.birth_year?.message}
                        fullWidth
                        sx={textFieldStyles}
                      />
                    </Grid>
                    <Grid size={{ xs: 12, sm: 6 }} sx={formItemStyles}>
                      <TextField
                        label="Gender"
                        {...register('gender')}
                        error={!!errors.gender}
                        helperText={errors.gender?.message}
                        fullWidth
                        sx={textFieldStyles}
                      />
                    </Grid>
                    <Grid size={{ xs: 12, sm: 6 }} sx={formItemStyles}>
                      <TextField
                        label="Hair Color"
                        {...register('hair_color')}
                        error={!!errors.hair_color}
                        helperText={errors.hair_color?.message}
                        fullWidth
                        sx={textFieldStyles}
                      />
                    </Grid>
                    <Grid size={{ xs: 12, sm: 6 }} sx={formItemStyles}>
                      <TextField
                        label="Mass"
                        {...register('mass')}
                        error={!!errors.mass}
                        helperText={errors.mass?.message}
                        fullWidth
                        sx={textFieldStyles}
                      />
                    </Grid>
                    <Grid size={{ xs: 12, sm: 6 }} sx={formItemStyles}>
                      <TextField
                        label="Height"
                        {...register('height')}
                        error={!!errors.height}
                        helperText={errors.height?.message}
                        fullWidth
                        sx={textFieldStyles}
                      />
                    </Grid>
                    <Grid size={{ xs: 12 }} sx={formItemStyles}>
                      <TextField
                        label="Skin Color"
                        {...register('skin_color')}
                        error={!!errors.skin_color}
                        helperText={errors.skin_color?.message}
                        fullWidth
                        sx={textFieldStyles}
                      />
                    </Grid>
                  </Grid>

                  <Box sx={buttonGroupStyles}>
                    <Button type="submit" variant="contained" sx={saveButtonStyles}>
                      Save Changes
                    </Button>
                    <Button onClick={handleCancel} variant="outlined" sx={cancelButtonStyles}>
                      Cancel
                    </Button>
                  </Box>
                </Box>
              </form>
            ) : (
              <>
                <Grid container spacing={2} sx={infoGridStyles}>
                  <Grid size={{ xs: 12, sm: 6, md: 4 }}>
                    <Box sx={infoItemStyles}>
                      <Typography sx={infoLabelStyles}>Mass</Typography>
                      <Typography sx={infoValueStyles}>{rightCharachter.mass} kg</Typography>
                    </Box>
                  </Grid>

                  <Grid size={{ xs: 12, sm: 6, md: 4 }}>
                    <Box sx={infoItemStyles}>
                      <Typography sx={infoLabelStyles}>Height</Typography>
                      <Typography sx={infoValueStyles}>{rightCharachter.height} cm</Typography>
                    </Box>
                  </Grid>

                  <Grid size={{ xs: 12, sm: 6, md: 4 }}>
                    <Box sx={infoItemStyles}>
                      <Typography sx={infoLabelStyles}>Gender</Typography>
                      <Typography sx={infoValueStyles}>{rightCharachter.gender}</Typography>
                    </Box>
                  </Grid>

                  <Grid size={{ xs: 12, sm: 6, md: 4 }}>
                    <Box sx={infoItemStyles}>
                      <Typography sx={infoLabelStyles}>Birth Year</Typography>
                      <Typography sx={infoValueStyles}>{rightCharachter.birth_year}</Typography>
                    </Box>
                  </Grid>

                  <Grid size={{ xs: 12, sm: 6, md: 4 }}>
                    <Box sx={infoItemStyles}>
                      <Typography sx={infoLabelStyles}>Hair Color</Typography>
                      <Typography sx={infoValueStyles}>{rightCharachter.hair_color}</Typography>
                    </Box>
                  </Grid>

                  <Grid size={{ xs: 12, sm: 6, md: 4 }}>
                    <Box sx={infoItemStyles}>
                      <Typography sx={infoLabelStyles}>Skin Color</Typography>
                      <Typography sx={infoValueStyles}>{rightCharachter.skin_color}</Typography>
                    </Box>
                  </Grid>
                </Grid>

                <Divider sx={dividerStyles} />

                <Box sx={chipsContainerStyles}>
                  <Chip label={`Hair: ${rightCharachter.hair_color}`} sx={chipStyles} />
                  <Chip label={`Skin: ${rightCharachter.skin_color}`} sx={chipStyles} />
                </Box>

                <Button
                  variant="outlined"
                  onClick={() => setEditMode(true)}
                  sx={editButtonStyles}
                  fullWidth
                >
                  Edit Character
                </Button>
              </>
            )}
          </Paper>
        </Box>
      </Container>
    </Box>
  );
}
