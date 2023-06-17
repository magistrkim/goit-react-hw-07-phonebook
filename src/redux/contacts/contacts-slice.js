import { createSlice } from '@reduxjs/toolkit';
import {
  fetchContactsError,
  fetchContactsRequest,
  fetchContactsSuccess,
  fetchAddContactsRequest,
  fetchAddContactsSuccess,
  fetchAddContactsError,
  fetchRemoveContactsRequest,
  fetchRemoveContactsSuccess,
  fetchRemoveContactsError,
} from './contacts-actions';

const initialState = {
  items: [],
  isLoading: false,
  error: null,
};
const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: {
    [fetchContactsRequest]: store => {
      store.isLoading = true;
    },
    [fetchContactsSuccess]: (store, { payload }) => {
      store.isLoading = false;
      store.items = payload;
    },
    [fetchContactsError]: (store, { payload }) => {
      store.isLoading = false;
      store.error = payload;
    },
    [fetchAddContactsRequest]: store => {
      store.isLoading = true;
    },
    [fetchAddContactsSuccess]: (store, { payload }) => {
      store.isLoading = false;
      store.items.push(payload);
    },
    [fetchAddContactsError]: (store, { payload }) => {
      store.isLoading = false;
      store.error = payload;
    },
    [fetchRemoveContactsRequest]: store => {
      store.isLoading = true;
    },
    [fetchRemoveContactsSuccess]: (store, { payload }) => {
      store.isLoading = false;
      const index = store.items.findIndex(item => item.id === payload);
      store.items.splice(index, 1);
    },
    [fetchRemoveContactsError]: (store, { payload }) => {
      store.isLoading = false;
      store.error = payload;
    },
  },
});

export const { addContact, removeContact } = contactsSlice.actions;
export default contactsSlice.reducer;
