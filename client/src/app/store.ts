import { configureStore } from '@reduxjs/toolkit';
import starwarsReducer from '../entities/StarWars/model/starwarsSlice';
import aiReducer from '../entities/Ai/model/aiSlice';

export const store = configureStore({
  reducer: {
    starwars: starwarsReducer,
    ai: aiReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppStore = typeof store;
