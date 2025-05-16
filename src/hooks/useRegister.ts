import { useMutation } from "@tanstack/react-query";
import { register as apiRegister } from "@/services/auth";
import { toast } from 'sonner'
import { useNavigate } from "react-router-dom";

export function useRegister() {
    const navigate = useNavigate();
    return useMutation({
        mutationFn: (data: { username: string, password: string }) => apiRegister(data),
        onSuccess: () => {
            toast.success("Usuario registrado con éxito");
            navigate("/login");
        },
        onError: (err: any) => {
            toast.error(err?.response?.data?.message || "Error al registrar");
        }
    })
}
