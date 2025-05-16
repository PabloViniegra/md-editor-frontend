import { api } from './api';

export const register = (user: { username: string, password: string }) => api.post('/auth/register', user)

export const login = (user: { username: string, password: string }) => api.post<{ access_token: string }>('/auth/login', user)
