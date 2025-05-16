import { create } from 'zustand'

type UserState = {
    token: string | null;
    setToken: (token: string | null) => void;
}

export const useUserStore = create<UserState>((set) => ({
    token: localStorage.getItem('token'),
    setToken: (t) => {
        set({ token: t })
        if (t) localStorage.setItem('token', t)
        else localStorage.removeItem('token')
    }
}))
