import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { ChevronDown, Sun, Moon } from "lucide-react";
import { useDarkMode } from "@/hooks/useDarkMode";

interface NavbarProps {
  username: string;
}

export default function Navbar({ username }: NavbarProps) {
  const navigate = useNavigate();
  const { isDark, toggle } = useDarkMode();
  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };
  return (
    <nav className="bg-surface-light dark:bg-surface-dark border-b border-border dark:border-gray-700 px-4 py-3 flex items-center justify-between">
      <div className="flex items-center space-x-2">
        <span className="text-xl font-heading font-bold text-text-light dark:text-text-dark">
          MD-Editor
        </span>
      </div>
      <div className="flex items-center space-x-4">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              className="flex items-center space-x-1 text-text-light dark:text-text-dark hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              <span>{username}</span>
              <ChevronDown className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            align="end"
            className="bg-white dark:bg-gray-800"
          >
            <DropdownMenuItem
              onSelect={() => navigate("/posts/new")}
              className="text-text-light dark:text-text-dark hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              Crear Post
            </DropdownMenuItem>
            <DropdownMenuItem
              onSelect={handleLogout}
              className="text-destructive-foreground hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              Cerrar sesión
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <Button
          variant="outline"
          onClick={toggle}
          aria-label="Modo Oscuro"
          className="p-2"
        >
          {isDark ? (
            <Sun className="h-5 w-5 text-text-light dark:text-text-dark" />
          ) : (
            <Moon className="h-5 w-5 text-text-light dark:text-text-dark" />
          )}
        </Button>
      </div>
    </nav>
  );
}
