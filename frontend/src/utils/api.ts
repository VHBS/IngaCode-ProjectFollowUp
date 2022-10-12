import axios from 'axios';

import IProject from '../@types/project';
import { ResponseError } from '../@types/responseError';
import { UserLoginType } from '../@types/user';

const api = axios.create({
  baseURL: 'http://localhost:3001',
});

export const handleFetchUserLogin = async (
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

export const handleFetchGetAllProjects = async (
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

export const handleFetchCreateProject = async (
  authorization: string,
  project: { name: string },
): Promise<IProject | ResponseError> => {
  const { data } = await api.post(
    '/projects',
    project,
    {
      headers: { authorization },
    },
  ).catch((error) => {
    if ('response' in error) {
      return error.response;
    }
  });

  return data;
};

export const handleFetchUpdateProject = async (
  authorization: string,
  projectId: string,
  project: { name: string },
): Promise<IProject | ResponseError> => {
  const { data } = await api.patch(
    `/projects/${projectId}`,
    project,
    {
      headers: { authorization },
    },
  ).catch((error) => {
    if ('response' in error) {
      return error.response;
    }
  });

  return data;
};

export const handleFetchDeleteProject = async (
  authorization: string,
  projectId: string,
): Promise<void | ResponseError> => {
  await api.delete(
    `/projects/${projectId}`,
    {
      headers: { authorization },
    },
  ).catch((error) => {
    if ('response' in error) {
      return error.response;
    }
  });
};

export default api;