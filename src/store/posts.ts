import { Post } from '@/types/types';
import { create } from 'zustand';

interface PostsState {
    posts: Post[]
    setPosts: (posts: Post[]) => void
}

export const usePostsStore = create<PostsState>((set) => ({
    posts: [],
    setPosts: (posts: Post[]) => set({ posts })
}))
