import { nanoid } from 'nanoid';
import { createSlice } from '@reduxjs/toolkit';

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: [],
  reducers: {
    adder(state, action) {
      state.push({
        name: action.payload.name,
        number: action.payload.number,
        id: nanoid(),
      });
    },
    deleter(state, action) {
      return state.filter(contact => !(contact.id === action.payload));
    },
  },
});

export const { adder, deleter } = contactsSlice.actions;
