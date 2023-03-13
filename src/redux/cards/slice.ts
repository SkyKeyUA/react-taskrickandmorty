/** @format */

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchCards } from './asyncActions';
import { Cards, CardsSliceState, Status } from './type';

const initialState: CardsSliceState = {
  items: [],
  status: Status.LOADING,
};

export const cardsSlice = createSlice({
  name: 'cards',
  initialState,
  reducers: {
    setItems(state, action: PayloadAction<Cards[]>) {
      state.items = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCards.pending, (state) => {
      state.items = [];
      state.status = Status.LOADING;
      console.log('The data is sending');
    });
    builder.addCase(fetchCards.fulfilled, (state, action) => {
      state.items = action.payload;
      state.status = Status.SUCCESS;
      console.log(state, 'All Good');
    });
    builder.addCase(fetchCards.rejected, (state) => {
      state.items = [];
      state.status = Status.ERROR;
      console.log('Was Error');
    });
  },
});

export const { setItems } = cardsSlice.actions;

export default cardsSlice.reducer;
