import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://63db5f70a3ac95cec5a0332d.mockapi.io/quiz-app/users',
});

export const getUsers = async () => {
  const { data } = await instance.get('/');
  return data;
};

export const addUser = async data => {
  const { data: result } = await instance.post('/', data);
  return result;
};

export const removeUser = async id => {
  const { data } = await instance.delete(`/${id}`);
  return data;
};
