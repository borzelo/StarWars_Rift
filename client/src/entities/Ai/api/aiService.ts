import axios from 'axios';

type GetAnswerRequest = {
  question: string;
};

type GetAnswerResponse = {
  success: boolean;
  answer: string;
  message?: string;
};

export const getAnswer = async ({ question }: GetAnswerRequest): Promise<string> => {
  try {
    const { data } = await axios.post<GetAnswerResponse>('/api/ai/answer', { question });

    if (!data.success) {
      throw new Error(data.message ?? 'AI service returned an error');
    }

    return data.answer;
  } catch (error) {
    if (error instanceof Error) {
      console.error('[AiService:getAnswer] Request failed:', error.message);
      throw error;
    }

    throw new Error('Unknown error while requesting AI answer');
  }
};
