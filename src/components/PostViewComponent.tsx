import { Post } from "@/types/types";
import { Button } from "@/components/ui/button";
import { Card, CardFooter } from "@/components/ui/card";
import { format } from "date-fns";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

interface PostViewComponentProps {
  post: Post;
}

export function PostViewComponent({ post }: PostViewComponentProps) {
  const navigate = useNavigate();
  return (
    <section className="min-h-screen bg-background-light dark:bg-background-dark p-6">
      <div className="max-w-3xl mx-auto space-y-4">
        <Button
          variant="link"
          onClick={() => navigate(-1)}
          className="flex items-center space-x-1 text-text-light dark:text-text-dark"
        >
          <ArrowLeft className="size-5" />
          <span className="font-sans">Volver</span>
        </Button>
        <Card className="prose dark:prose-invert bg-white dark:bg-surface-dark max-w-none p-6 rounded-lg shadow">
          <h1 className="font-heading text-3xl mb-4 text-text-light dark:text-text-dark">
            {post.title}
          </h1>
          <ReactMarkdown remarkPlugins={[remarkGfm]}>
            {post.content}
          </ReactMarkdown>
        </Card>
        <CardFooter className="max-w-3xl mx-auto font-sans text-sm text-text-light dark:text-text-dark">
          Creado: {format(new Date(post.created_at), "dd/MM/yyyy HH:mm")}
        </CardFooter>
      </div>
    </section>
  );
}
