import { createSlice } from '@reduxjs/toolkit';
import { getAiAnswer } from './aiThunk';

type AiStateType = {
  answer: string | null;
  loading: boolean;
  error: null | string;
};

const initialState: AiStateType = {
  answer: null,
  loading: false,
  error: null,
};

const aiSlice = createSlice({
  name: 'ai',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAiAnswer.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.answer = null;
      })
      .addCase(getAiAnswer.fulfilled, (state, action) => {
        state.loading = false;
        state.answer = action.payload;
      })
      .addCase(getAiAnswer.rejected, (state, action) => {
        state.loading = false;
        state.error =
          (typeof action.payload === 'string' && action.payload) ||
          action.error.message ??
          'Ошибка при получении ответа от AI';
      });
  },
});

export default aiSlice.reducer;
