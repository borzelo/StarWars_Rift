import { z } from 'zod';

export const CharacterSchema = z.object({
  name: z.string(),
  height: z.string(),
  hair_color: z.string(),
  birth_year: z.string(),
  mass: z.string(),
  skin_color: z.string(),
  gender: z.string(),
});

export const CharacterListSchema = z.array(CharacterSchema);
