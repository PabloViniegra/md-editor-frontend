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
    <section className="max-w-3xl mx-auto p-6 space-y-4">
      <Button
        variant="link"
        onClick={() => navigate(-1)}
        className="flex items-center space-x-1"
      >
        <ArrowLeft className="size-5" />
        <span className="font-sans">Volver</span>
      </Button>
      <Card className="prose prose-indigo max-w-none p-4 font-sans">
        <h1 className="font-heading text-3xl mb-4">{post.title}</h1>
        <ReactMarkdown remarkPlugins={[remarkGfm]}>
          {post.content}
        </ReactMarkdown>
      </Card>
      <CardFooter className="font-sans text-sm text-gray-500">
        Creado: {format(new Date(post.created_at), "dd/MM/yyyy HH:mm")}
      </CardFooter>
    </section>
  );
}
