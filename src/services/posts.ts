import { Post } from "@/types/types";
import { api } from "./api";

export const fetchPosts = (
    search?: string,
    orderBy?: string
): Promise<Post[]> =>
    api
        .get("/posts/", {
            params: { search: search || undefined, order_by: orderBy || undefined },
        })
        .then((res) => res.data);

export const fetchPost = (postId: number): Promise<Post> =>
    api.get(`/posts/${postId}`).then((res) => res.data);

export const createPost = (data: { title: string; content: string }) =>
    api.post("/posts/", data).then((res) => res.data);

export const updatePost = (
    postId: number,
    data: { title: string; content: string }
) => api.put(`/posts/${postId}`, data).then((res) => res.data);

export const deletePost = (postId: number) =>
    api.delete(`/posts/${postId}`).then((res) => res.data);
