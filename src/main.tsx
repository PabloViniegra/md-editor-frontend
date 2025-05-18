import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Register } from "./pages/Register";
import Login from "./pages/Login";
import { Toaster } from "sonner";
import PostForm from "./pages/PostForm";
import PostView from "./pages/PostView";
import { useDarkMode } from "@/hooks/useDarkMode";

const queryClient = new QueryClient();

function Root() {
  const { isDark } = useDarkMode();
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <div className={isDark ? "dark" : ""}>
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/posts/new" element={<PostForm />} />
            <Route path="/posts/:postId/edit" element={<PostForm />} />
            <Route path="/posts/:postId" element={<PostView />} />
          </Routes>
        </div>
      </BrowserRouter>
      <Toaster
        position="top-right"
        richColors
        theme={isDark ? "dark" : "light"}
        toastOptions={{
          className:
            "border p-4 rounded-lg shadow-lg " +
            "bg-white text-black " +
            "dark:bg-gray-800 dark:text-white",
          descriptionClassName: "mt-1 text-sm",
        }}
      />
    </QueryClientProvider>
  );
}

const rootElement = document.getElementById("root");
if (!rootElement) {
  throw new Error('Root element with id "root" not found');
}
ReactDOM.createRoot(rootElement).render(<Root />);
