import { useMutation, useQueryClient } from "@tanstack/react-query";
import { login as apiLogin } from "@/services/auth";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";

export function useLogin() {
    const navigate = useNavigate();
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (data: { username: string, password: string }) => apiLogin(data),
        onSuccess: (response) => {
            // @ts-ignore: La API realmente devuelve `token` (no `access_token`)
            localStorage.setItem("token", response.data.token);
            queryClient.invalidateQueries({ queryKey: ["currentUser"] });
            toast.success("Usuario logueado con éxito");
            navigate("/");
        },
        onError: (err: any) => {
            console.error(err);
            const status = err?.response?.status
            if (status === 401) {
                toast.error("Usuario o contraseña incorrectos");
            } else {
                toast.error(err?.response?.data?.message || "Error al loguear");
            }
        }
    })
}
