import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { Spinner } from "@/components/ui/spinner";
import { useRegister } from "@/hooks/useRegister";
import { useEffect, useState } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";

const registerSchema = z
  .object({
    username: z
      .string()
      .min(3, "Mínimo 3 carácteres")
      .max(40, "Máximo 40 carácteres"),
    password: z
      .string()
      .min(6, "Mínimo 6 carácteres")
      .max(15, "Máximo 15 carácteres")
      .regex(/[a-z]/, "Debe incluir al menos una letra minúscula")
      .regex(/[A-Z]/, "Debe incluir al menos una letra mayúscula")
      .regex(/[0-9]/, "Debe incluir al menos un número")
      .regex(/[^A-Za-z0-9]/, "Debe incluir al menos un carácter especial"),
    confirmPassword: z.string(),
  })
  .superRefine((data, ctx) => {
    if (data.password !== data.confirmPassword) {
      ctx.addIssue({
        path: ["confirmPassword"],
        code: "custom",
        message: "Las contraseñas no coinciden",
      });
    }
  });

type RegisterFormValues = z.infer<typeof registerSchema>;

const getStrengthLabel = (score: number) => {
  if (score < 40) return "Muy débil";
  if (score < 60) return "Débil";
  if (score < 80) return "Media";
  if (score < 100) return "Fuerte";
  return "Excelente";
};

const getBarColor = (score: number) => {
  if (score < 40) return "bg-red-500";
  if (score < 60) return "bg-orange-500";
  if (score < 80) return "bg-yellow-500";
  return "bg-green-500";
};

export default function RegisterForm() {
  const { mutate, isPending } = useRegister();
  const form = useForm<RegisterFormValues>({
    resolver: zodResolver(registerSchema),
    mode: "onChange",
    defaultValues: {
      username: "",
      password: "",
      confirmPassword: "",
    },
  });
  const passwordValue = form.watch("password");
  const [strength, setStrength] = useState(0);

  useEffect(() => {
    let score = 0;
    if (passwordValue.length >= 6) score++;
    if (/[a-z]/.test(passwordValue)) score++;
    if (/[A-Z]/.test(passwordValue)) score++;
    if (/[0-9]/.test(passwordValue)) score++;
    if (/[^A-Za-z0-9]/.test(passwordValue)) score++;
    setStrength((score / 5) * 100);
  }, [passwordValue]);

  async function onSubmit(data: RegisterFormValues) {
    mutate({ username: data.username, password: data.password });
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <div className="w-full max-w-md bg-white p-6 rounded-lg shadow">
        <h2 className="text-2xl font-heading font-bold mb-6 text-center text-primary-500">
          Registro
        </h2>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem className="font-sans">
                  <FormLabel className="font-sans">Usuario</FormLabel>
                  <FormControl>
                    <Input placeholder="Nombre de usuario" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem className="font-sans">
                  <FormLabel className="font-sans">Contraseña</FormLabel>
                  <FormControl>
                    <Input
                      type="password"
                      placeholder="Contraseña segura"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                  <div className="mt-2">
                    <Progress
                      value={strength}
                      max={100}
                      className={`${getBarColor(strength)} h-2 rounded`}
                    />
                    <p
                      className={`mt-1 text-sm font-sans font-medium text-center \$\{strength < 60 ? "text-red-600" : "text-green-700"\}
                      }`}
                    >
                      {getStrengthLabel(strength)}
                    </p>
                  </div>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="confirmPassword"
              render={({ field }) => (
                <FormItem className="font-sans">
                  <FormLabel className="font-sans">
                    Confirmar Contraseña
                  </FormLabel>
                  <FormControl>
                    <Input
                      type="password"
                      placeholder="Repite tu contraseña"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button
              type="submit"
              className="w-full font-sans font-semibold text-white bg-blue-500 hover:bg-primary-600 disabled:bg-gray-300 disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={!form.formState.isValid || isPending}
            >
              {isPending ? (
                <>
                  <Spinner className="h-5 w-5 mr-2 inline-block" />
                  Registrando...
                </>
              ) : (
                "Registrar"
              )}
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
}
