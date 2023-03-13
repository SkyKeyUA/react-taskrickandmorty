/** @format */

import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import cardsSlice from './cards/slice';
import filterSlice from './filter/slice';

export const store = configureStore({
  reducer: {
    cardsSlice,
    filterSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
