import { useNavigate } from "react-router-dom";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { deletePost } from "@/services/posts";
import { useEffect } from "react";

export function useDeletePost(postId: number) {
    const navigate = useNavigate();
    const queryClient = useQueryClient();

    const mutation = useMutation({
        mutationFn: (postId: number) => deletePost(postId)
    })

    useEffect(() => {
        if (mutation.isSuccess) {
            toast.success("Post deleted successfully");
            queryClient.invalidateQueries({ queryKey: ["posts"] });
            navigate("/");
        }
    }, [mutation.isSuccess])

    useEffect(() => {
        if (mutation.isError) {
            console.error(mutation.error);
            toast.error("Error deleting post");
        }
    }, [mutation.isError])

    return {
        deletePost: mutation.mutate,
        isLoading: mutation.isPending,
    }
}
