import { fetchPost } from "@/services/posts";
import { useQuery } from "@tanstack/react-query";
import { toast } from "sonner";
import { useEffect } from "react";

export function usePost(postId: number) {
    const { data, isLoading, isError, error } = useQuery({
        queryKey: ["post", postId],
        queryFn: () => fetchPost(postId),
        enabled: !!postId,
        retry: false
    });

    useEffect(() => {
        if (isError) {
            console.error(error);
            toast.error("Error al cargar el post");
        }
    }, [isError, error])

    return {
        post: data,
        isLoading
    };
}
