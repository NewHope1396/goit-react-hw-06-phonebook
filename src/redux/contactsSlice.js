import { nanoid } from 'nanoid';
import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: { contacts: [] },
  reducers: {
    adder(state, action) {
      state.contacts.push({
        name: action.payload.name,
        number: action.payload.number,
        id: nanoid(),
      });
    },
    deleter(state, action) {
      const newContacts = state.contacts.filter(
        contact => !(contact.id === action.payload)
      );
      return { contacts: newContacts };
    },
  },
});

export const { adder, deleter } = contactsSlice.actions;

const persistConfig = {
  key: 'contacts',
  storage,
};

export const persistedContactsReducer = persistReducer(
  persistConfig,
  contactsSlice.reducer
);
