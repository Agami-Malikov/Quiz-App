import { createSlice } from '@reduxjs/toolkit';

import { fetchUsers, addUser, removeUser } from './items-operations';

const initialState = {
  items: [],
  loading: false,
  error: null,
};

const contactsSlice = createSlice({
  name: 'users',
  initialState,
  extraReducers: {
    [fetchUsers.pending]: store => {
      store.loading = true;
      store.error = null;
    },
    [fetchUsers.fulfilled]: (store, { payload }) => {
      store.loading = false;
      store.items = payload;
    },
    [fetchUsers.rejected]: (store, { payload }) => {
      store.loading = false;
      store.error = payload;
    },
    [addUser.pending]: store => {
      store.loading = true;
      store.error = null;
    },
    [addUser.fulfilled]: (store, { payload }) => {
      store.loading = false;
      store.items.push(payload);
    },
    [addUser.rejected]: (store, { payload }) => {
      store.loading = false;
      store.error = payload;
    },
    [removeUser.pending]: store => {
      store.loading = true;
      store.error = null;
    },
    [removeUser.fulfilled]: (store, { payload }) => {
      store.loading = false;
      store.items = store.items.filter(item => item.id !== payload)
    },
    [removeUser.rejected]: (store, { payload }) => {
      store.loading = false;
      store.error = payload;
    },
  },
});

export default contactsSlice.reducer;
