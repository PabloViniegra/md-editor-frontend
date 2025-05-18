import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  FormControl,
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useLogin } from "@/hooks/useLogin";
import { Link } from "react-router-dom";

const loginSchema = z.object({
  username: z.string().min(1, "Requerido"),
  password: z.string().min(1, "Requerido"),
});

type LoginFormValues = z.infer<typeof loginSchema>;

export default function LoginForm() {
  const { mutate, isPending } = useLogin();
  const form = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    mode: "onTouched",
    defaultValues: {
      username: "",
      password: "",
    },
  });

  function onSubmit(data: LoginFormValues) {
    mutate(data);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem className="font-sans">
              <FormLabel className="text-text-light dark:text-text-dark">
                Usuario
              </FormLabel>
              <FormControl>
                <Input
                  placeholder="Usuario"
                  {...field}
                  className="bg-white dark:bg-surface-light dark:text-text-dark border border-gray-200 dark:border-gray-600 placeholder-gray-400 dark:placeholder-gray-500 focus:ring-primary-500 focus:border-primary-500"
                />
              </FormControl>
              <FormMessage className="dark:text-destructive-foreground" />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem className="font-sans">
              <FormLabel className="text-text-light dark:text-text-dark">
                Contraseña
              </FormLabel>
              <FormControl>
                <Input
                  type="password"
                  placeholder="Contraseña"
                  {...field}
                  className="bg-white dark:bg-surface-light dark:text-text-dark border border-gray-200 dark:border-gray-600 placeholder-gray-400 dark:placeholder-gray-500 focus:ring-primary-500 focus:border-primary-500"
                />
              </FormControl>
              <FormMessage className="dark:text-destructive-foreground" />
            </FormItem>
          )}
        />

        <Button
          type="submit"
          disabled={!form.formState.isValid || isPending}
          className="w-full font-sans font-semibold bg-primary-500 text-white hover:bg-primary-600 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isPending ? "Entrando..." : "Entrar"}
        </Button>
        <p className="text-center text-sm font-sans text-text-light dark:text-text-dark">
          ¿No tienes cuenta?{" "}
          <Link to="/register" className="text-primary-500 hover:underline">
            Registrate aquí
          </Link>
        </p>
      </form>
    </Form>
  );
}
