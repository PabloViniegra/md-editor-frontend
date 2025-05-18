import LoginForm from "@/components/LoginForm";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export default function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-background-light dark:bg-background-dark">
      <Card className="w-full max-w-md bg-surface-light dark:bg-surface-dark rounded-lg shadow-lg p-8">
        <CardHeader>
          <CardTitle className="text-center text-2xl font-heading font-bold text-text-light dark:text-text-dark mb-6">
            Iniciar sesión
          </CardTitle>
        </CardHeader>
        <CardContent>
          <LoginForm />
        </CardContent>
      </Card>
    </div>
  );
}
