import axios from 'axios';
import { CharacterListSchema } from '../types/starwarsSchema';
import { type CharachterList } from '../types/starwarsTypes';

export const getAll = async (): Promise<CharachterList> => {
  try {
    const response = await axios.get('/api/starwars/charachters');
    console.log(response.data);
    const validateData = CharacterListSchema.parse(response.data);
    return validateData;
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message);
    }
    throw error;
  }
};
