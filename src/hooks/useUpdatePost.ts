import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updatePost as apiUpdatePost } from "@/services/posts";
import { toast } from "sonner";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export function useUpdatePost() {
    const queryClient = useQueryClient();
    const navigate = useNavigate();
    const mutation = useMutation({
        mutationFn: ({ postId, data }: { postId: number; data: { title: string; content: string } }) =>
            apiUpdatePost(postId, data),
    })

    useEffect(() => {
        if (mutation.isSuccess) {
            toast.success('Post actualizado correctamente');
            queryClient.invalidateQueries({ queryKey: ['posts'] });
            navigate('/');
        }
    }, [mutation.isSuccess])

    useEffect(() => {
        if (mutation.isError) {
            toast.error('Error al actualizar el post');
        }
    }, [mutation.isError, mutation.error])

    return {
        updatePost: mutation.mutate,
        isLoading: mutation.isPending
    }
}
