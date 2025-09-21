import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import { getAllCharachters } from './starwarsThunk';
import type { Charachter } from '../types/starwarsTypes';
import { type CharachterList } from '../types/starwarsTypes';

type StarwarsStateType = {
  charachters: CharachterList;
  loading: boolean;
  error: null | string;
};

const initialState: StarwarsStateType = {
  charachters: [],
  loading: false,
  error: null,
};

const starwarsSlice = createSlice({
  name: 'starwars',
  initialState,
  reducers: {
    updateCharacter: (state, action: PayloadAction<Charachter>) => {
      const index = state.charachters.findIndex((char) => char.name === action.payload.name);
      if (index !== -1) {
        state.charachters[index] = action.payload;
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllCharachters.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getAllCharachters.fulfilled, (state, action: PayloadAction<CharachterList>) => {
        state.loading = false;
        state.charachters = action.payload;
      })
      .addCase(getAllCharachters.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? 'Ошибка при добавлении персонажей';
      });
  },
});

export default starwarsSlice.reducer;
export const { updateCharacter } = starwarsSlice.actions;
