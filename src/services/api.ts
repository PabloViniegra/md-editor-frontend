import axios from 'axios';

export const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL || 'http://localhost:8000',
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
    },
})

api.interceptors.request.use(cfg => {
    const token = localStorage.getItem('token')
    if (token) cfg.headers!['Authorization'] = `Bearer ${token}`
    return cfg
})

api.interceptors.response.use(
    res => res,
    err => {
        const status = err.response?.status
        const currentPath = window.location.pathname
        if (status === 401 && currentPath !== '/login') {
            localStorage.removeItem('token')
            window.location.href = '/login'
        }
        return Promise.reject(err)
    }
)
