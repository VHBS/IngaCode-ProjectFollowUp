import axios from 'axios';

import IProject from '../@types/project';
import { ResponseError } from '../@types/responseError';
import { UserLoginType } from '../@types/user';

const api = axios.create({
  baseURL: 'http://localhost:3001',
});

export const handleUserLogin = async (
  userName: string,
  password: string,
): Promise<UserLoginType | ResponseError> => {
  const { data } = await api.post('/users/login', {
    userName,
    password,
  }).catch((error) => {
    if ('response' in error) {
      return error.response;
    }
  });

  return data;
};

export const handleGetAllProjects = async (
  authorization: string,
): Promise<IProject[] | ResponseError> => {
  const { data } = await api.get('/projects', {
    headers: { authorization },
  }).catch((error) => {
    if ('response' in error) {
      return error.response;
    }
  });

  return data;
};

export default api;
