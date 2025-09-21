import type { CharacterListSchema, CharacterSchema } from './starwarsSchema';
import type { z } from 'zod';

export type Charachter = z.infer<typeof CharacterSchema>;
export type CharachterList = z.infer<typeof CharacterListSchema>;
