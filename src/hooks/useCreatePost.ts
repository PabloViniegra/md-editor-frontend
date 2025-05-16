import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createPost } from "@/services/posts";
import { toast } from "sonner";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export function useCreatePost() {
    const queryClient = useQueryClient()
    const navigate = useNavigate()

    const mutation = useMutation({
        mutationFn: (data: { title: string, content: string }) => createPost(data)
    })

    useEffect(() => {
        if (mutation.isSuccess) {
            toast.success("Post creado con éxito")
            queryClient.invalidateQueries({ queryKey: ["posts"] })
            navigate("/")
        }
    }, [mutation.isSuccess])

    useEffect(() => {
        if (mutation.isError) {
            console.error(mutation.error);
            toast.error("Error al crear el post")
        }
    }, [mutation.isError, mutation.error]);

    return {
        createPost: mutation.mutate,
        isLoading: mutation.isPending,
    }
}
