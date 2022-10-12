import axios from 'axios';
import { ResponseError } from '../@types/responseError';
import { UserLoginType } from '../@types/user';

const api = axios.create({
  baseURL: 'http://localhost:3001',
});

export const handleUserLogin = async(userName: string, password: string): Promise<UserLoginType | ResponseError> => {
    const { data } = await api.post('/users/login', {
      userName,
      password,
    }).catch((error) => {
      if (error.response) {
        return error.response
      }
    })

    return data;
}

export default api;