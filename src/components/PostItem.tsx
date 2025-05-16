import { Post } from "@/types/types";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { format } from "date-fns";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Edit, Eye } from "lucide-react";

export default function PostItem({ post }: { post: Post }) {
  const navigate = useNavigate();
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.2 }}
      whileHover={{ scale: 1.02 }}
      className="group"
    >
      <Card className="relative hover:shadow-lg h-80 flex flex-col">
        <Button
          variant="ghost"
          className="absolute tp-2 right-2 p-1 opacity-0 group-hover:opacity-100 transition-opacity"
          onClick={() => navigate(`/posts/${post.id}/edit`)}
        >
          <Edit className="size-5 text-gray-600 hover:text-primary-500" />
        </Button>
        <CardHeader>
          <CardTitle className="font-heading truncate">{post.title}</CardTitle>
        </CardHeader>
        <CardContent className="flex-1 overflow-hidden">
          <p className="text-gray-700 font-sans overflow-hidden text-ellipsis line-clamp-3 h-full">
            {post.content}
          </p>
        </CardContent>
        <CardFooter className="flex items-center justify-between mt-auto">
          <span className="text-sm text-gray-500">
            {format(new Date(post.created_at), "dd/MM/yyyy HH:mm")}
          </span>
          <div className="flex items-center space-x-2">
            <Button
              variant="link"
              size="sm"
              onClick={() => navigate(`/posts/${post.id}`)}
              className="flex items-center space-x-1"
            >
              <Eye className="size-4" />
              Ver detalle
            </Button>
          </div>
        </CardFooter>
      </Card>
    </motion.div>
  );
}
