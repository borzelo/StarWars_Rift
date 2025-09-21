import { getAiAnswer } from '@/entities/Ai/model/aiThunk';
import { useAppDispatch, useAppSelector } from '@/shared/hooks/hooks';
import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  Paper,
  CircularProgress,
} from '@mui/material';
import React, { useState } from 'react';
import {
  pageStyles,
  containerStyles,
  titleStyles,
  subtitleStyles,
  chatContainerStyles,
  messagesContainerStyles,
  userMessageStyles,
  aiMessageStyles,
  messageTextStyles,
  inputContainerStyles,
  inputStyles,
  sendButtonStyles,
  loadingStyles,
  errorStyles,
} from './AiPage.styles';

type Message = {
  text: string;
  isUser: boolean;
  timestamp: Date;
};

export default function AiPage(): React.JSX.Element {
  const { loading, error } = useAppSelector((store) => store.ai);
  const dispatch = useAppDispatch();
  const [question, setQuestion] = useState('');
  const [inputError, setInputError] = useState<string | null>(null);
  const [messages, setMessages] = useState<Message[]>([]);

  const getAnswerHandler = async (e: React.FormEvent) => {
    e.preventDefault();

    const trimmedQuestion = question.trim();

    if (!trimmedQuestion) {
      setInputError('Введите вопрос перед отправкой.');
      return;
    }

    setInputError(null);

    const userMessage: Message = {
      text: trimmedQuestion,
      isUser: true,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);

    try {
      const aiResponse = await dispatch(getAiAnswer({ question: trimmedQuestion })).unwrap();

      const aiMessage: Message = {
        text: aiResponse,
        isUser: false,
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, aiMessage]);
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : String(err);
      setInputError(errorMessage);
      console.error('Error getting AI answer:', err);
    }

    setQuestion('');
  };

  const formatTime = (date: Date): string =>
    date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

  return (
    <Box sx={pageStyles}>
      <Container sx={containerStyles}>
        <Typography variant="h2" sx={titleStyles}>
          AI Chat Assistant
        </Typography>

        <Typography sx={subtitleStyles}>Ask me anything about Star Wars universe</Typography>

        <Paper elevation={10} sx={chatContainerStyles}>
          {/* История сообщений */}
          <Box sx={messagesContainerStyles}>
            {messages.length === 0 ? (
              <Typography
                sx={{
                  color: '#666',
                  textAlign: 'center',
                  fontStyle: 'italic',
                  fontFamily: '"Roboto Condensed", sans-serif',
                }}
              >
                Start a conversation about Star Wars...
              </Typography>
            ) : (
              messages.map((message, index) => (
                <Box key={index} sx={message.isUser ? userMessageStyles : aiMessageStyles}>
                  <Typography sx={messageTextStyles}>{message.text}</Typography>
                  <Typography
                    sx={{
                      fontSize: '0.75rem',
                      color: '#999',
                      mt: 1,
                      textAlign: message.isUser ? 'right' : 'left',
                    }}
                  >
                    {formatTime(message.timestamp)}
                  </Typography>
                </Box>
              ))
            )}

            {loading && (
              <Box sx={loadingStyles}>
                <CircularProgress size={24} sx={{ color: '#FFE81F' }} />
                <Typography
                  sx={{ color: '#999', ml: 2, fontFamily: '"Roboto Condensed", sans-serif' }}
                >
                  AI is thinking...
                </Typography>
              </Box>
            )}

            {error && (
              <Box sx={errorStyles}>
                <Typography>Error: {error}</Typography>
              </Box>
            )}
          </Box>

          {/* Форма ввода */}
          <form onSubmit={getAnswerHandler}>
            <Box sx={inputContainerStyles}>
              <TextField
                placeholder="Ask your question about Star Wars..."
                value={question}
                onChange={(e) => {
                  setQuestion(e.target.value);
                  if (inputError) {
                    setInputError(null);
                  }
                }}
                disabled={loading}
                error={Boolean(inputError)}
                helperText={inputError ?? undefined}
                fullWidth
                sx={inputStyles}
              />
              <Button type="submit" disabled={loading || !question.trim()} sx={sendButtonStyles}>
                Send
              </Button>
            </Box>
          </form>
        </Paper>
      </Container>
    </Box>
  );
}
