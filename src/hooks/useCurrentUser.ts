import { useQuery } from "@tanstack/react-query";
import { api } from "@/services/api";
import { useNavigate } from "react-router-dom";

export function useCurrentUser() {
    const navigate = useNavigate()
    return useQuery({
        queryKey: ['currentUser'],
        queryFn: async () => {
            const res = await api.get('/auth/me')
            return res.data
        },
        retry: false,
        refetchOnWindowFocus: false
    })
}
