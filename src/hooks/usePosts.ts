import { useQuery } from "@tanstack/react-query";
import { fetchPosts } from "@/services/posts";
import { toast } from "sonner";
import { usePostsStore } from "@/store/posts";
import { useEffect } from "react";

export function usePosts(search: string = '', orderBy: string = 'created_at') {
    const { posts, setPosts } = usePostsStore();

    const query = useQuery({
        queryKey: ["posts", search, orderBy],
        queryFn: async () => fetchPosts(search, orderBy),
        retry: false,
        refetchOnWindowFocus: false,
    })

    useEffect(() => {
        if (query.data) {
            setPosts(query.data)
        }
    }, [query.data])

    useEffect(() => {
        if (query.isError) {
            console.error(query.error);
            toast.error("Error al cargar los posts")
        }
    }, [query.isError, query.error]);

    return {
        posts,
        isLoading: query.isLoading || query.isFetching,
    }


}
