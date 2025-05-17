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
import { Edit, Eye, Trash } from "lucide-react";
import { useModal } from "@/hooks/useModal";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { useDeletePost } from "@/hooks/useDeletePost";

export default function PostItem({ post }: { post: Post }) {
  const navigate = useNavigate();
  const { isOpen, openModal, closeModal, handleOpenChange } = useModal();
  const { isLoading, deletePost } = useDeletePost(post.id);
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
          className="absolute top-2 right-10 p-1 opacity-0 group-hover:opacity-100 transition-opacity"
          onClick={openModal}
        >
          <Trash className="size-5 text-red-600 hover:text-red-800" />
        </Button>
        <Button
          variant="ghost"
          className="absolute top-2 right-2 p-1 opacity-0 group-hover:opacity-100 transition-opacity"
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
      <Dialog open={isOpen} onOpenChange={handleOpenChange}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Confirmar eliminación</DialogTitle>
            <DialogDescription>
              ¿Estás seguro de que quieres eliminar el post "{post.title}"? Esta
              acción es irreversible.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button variant="outline" onClick={closeModal}>
              Cancelar
            </Button>
            <Button
              variant="destructive"
              onClick={() => {
                deletePost(post.id);
                closeModal();
              }}
            >
              Eliminar
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </motion.div>
  );
}
