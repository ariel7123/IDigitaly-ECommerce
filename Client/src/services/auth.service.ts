// client/src/services/auth.service.ts
import api from './api';
import { IAuthResponse } from '../types';

export const authService = {
  // Register new user
  register: async (
    name: string,
    email: string,
    password: string,
    confirmPassword: string
  ): Promise<IAuthResponse> => {
    const response = await api.post<IAuthResponse>('/auth/register', {
      name,
      email,
      password,
      confirmPassword,
    });
    return response.data;
  },

  // Login user
  login: async (email: string, password: string): Promise<IAuthResponse> => {
    const response = await api.post<IAuthResponse>('/auth/login', {
      email,
      password,
    });
    return response.data;
  },

  // Logout user
  logout: async (): Promise<void> => {
    await api.post('/auth/logout');
  },

  // Get current user
  getMe: async (): Promise<IAuthResponse> => {
    const response = await api.get<IAuthResponse>('/auth/me');
    return response.data;
  },
};

export default authService;
