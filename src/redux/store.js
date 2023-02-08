import { configureStore } from '@reduxjs/toolkit';
import contactsSlice from './items/items-slice';

const store = configureStore({
  reducer: {
    contacts: contactsSlice,
  },
});

export default store;
