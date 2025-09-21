import { createAsyncThunk } from '@reduxjs/toolkit';
import { getAnswer } from '../api/aiService';

type GetAiAnswerPayload = {
  question: string;
};

export const getAiAnswer = createAsyncThunk<string, GetAiAnswerPayload, { rejectValue: string }>(
  'ai/getAiAnswer',
  async ({ question }, { rejectWithValue }) => {
    const trimmedQuestion = question.trim();

    if (!trimmedQuestion) {
      return rejectWithValue('Введите вопрос перед отправкой.');
    }

    try {
      const answer = await getAnswer({ question: trimmedQuestion });
      return answer;
    } catch (error) {
      if (error instanceof Error) {
        return rejectWithValue(error.message);
      }

      return rejectWithValue('Не удалось получить ответ от модели.');
    }
  },
);
