import axios from 'axios';

import ICollaborator from '../@types/collaborator';
import IProject from '../@types/project';
import { ResponseError } from '../@types/responseError';
import ITask from '../@types/task';
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

export const handleFetchGetOneProject = async (
  authorization: string,
  projectId: string,
): Promise<IProject | ResponseError> => {
  const { data } = await api.get(
    `/projects/${projectId}`,
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

export const handleFetchGetAllTasks = async (
  authorization: string,
): Promise<ITask[] | ResponseError> => {
  const { data } = await api.get('/tasks', {
    headers: { authorization },
  }).catch((error) => {
    if ('response' in error) {
      return error.response;
    }
  });

  return data;
};

export const handleFetchCreateTask = async (
  authorization: string,
  task: { name: string, description: string, projectId: string },
): Promise<ITask | ResponseError> => {
  const { data } = await api.post(
    '/tasks',
    task,
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

export const handleFetchGetOneTask = async (
  authorization: string,
  taskId: string,
): Promise<ITask | ResponseError> => {
  const { data } = await api.get(
    `/tasks/${taskId}`,
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

export const handleFetchUpdateTask = async (
  authorization: string,
  task: { name: string, description: string, projectId: string },
  taskId: string,
): Promise<ITask | ResponseError> => {
  const { data } = await api.patch(
    `/tasks/${taskId}`,
    task,
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

export const handleFetchDeleteTask = async (
  authorization: string,
  taskId: string,
): Promise<void | ResponseError> => {
  await api.delete(
    `/tasks/${taskId}`,
    {
      headers: { authorization },
    },
  ).catch((error) => {
    if ('response' in error) {
      return error.response;
    }
  });
};

export const handleFetchGetAllCollaborators = async (
  authorization: string,
): Promise<ICollaborator[] | ResponseError> => {
  const { data } = await api.get('/collaborators', {
    headers: { authorization },
  }).catch((error) => {
    if ('response' in error) {
      return error.response;
    }
  });

  return data;
};

export const handleFetchCreateCollaboratorTask = async (
  authorization: string,
  collaboratorTask: { collaboratorId: string, taskId: string },
): Promise<ICollaboratorTask | ResponseError> => {
  const { data } = await api.post(
    '/collaboratortask',
    collaboratorTask,
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

export default api;
