import { createAsyncThunk } from '@reduxjs/toolkit';
import * as api from '../../api/usersApi';

const isDublicate = ({ name }, items) => {
  const normalizedName = name.toLowerCase();
  const result = items.find(item => {
    return normalizedName === item.name.toLowerCase();
  });
  return Boolean(result);
};

export const fetchUsers = createAsyncThunk(
  'users/fetch',
  async (_, thunkAPI) => {
    try {
      const data = await api.getUsers();
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const addUser = createAsyncThunk(
  'users/add',
  async (data, { rejectWithValue }) => {
    try {
      const result = await api.addUser(data);
      return result;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
  {
    condition: (data, { getState }) => {
      const { contacts } = getState();
      if (isDublicate(data, contacts.items)) {
        alert(`${data.name} is alredy exist`);
        return false;
      }
    },
  }
);

export const removeUser = createAsyncThunk(
  'users/remove',
  async(id, {rejectWithValue}) => {
    try {
      await api.removeUser(id);
      return id;
    } catch (error) {
      rejectWithValue(error)
    }
  }
)
