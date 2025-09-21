import { createAsyncThunk } from '@reduxjs/toolkit';
import { getAll } from '../api/starwarsService';
import { type CharachterList } from '../types/starwarsTypes';

export const getAllCharachters = createAsyncThunk(
  'starwars/getAllCharachters',
  async (): Promise<CharachterList> => {
    const charachters = await getAll();
    return charachters;
  },
);
