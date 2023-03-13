/** @format */

import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { Cards } from './type';

export const fetchCards = createAsyncThunk<Cards[]>('cards/fetchCardsStatus', async () => {
  const { data } = await axios.get('https://rickandmortyapi.com/api/character');
  return data.results as Cards[];
});
