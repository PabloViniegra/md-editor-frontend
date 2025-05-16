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

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/posts/new" element={<PostForm />} />
        <Route path="/posts/:postId/edit" element={<PostForm />} />
        <Route path="/posts/:postId" element={<PostView />} />
      </Routes>
    </BrowserRouter>
    <Toaster position="top-right" richColors />
  </QueryClientProvider>
);
