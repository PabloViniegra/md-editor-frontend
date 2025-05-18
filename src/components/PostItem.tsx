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
  const { deletePost } = useDeletePost(post.id);
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.2 }}
      whileHover={{ scale: 1.02 }}
      className="group"
    >
      <Card className="relative hover:shadow-lg h-80 flex flex-col bg-white dark:bg-surface-dark">
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
          <Edit className="size-5 text-gray-600 dark:text-text-light hover:text-primary-500" />
        </Button>
        <CardHeader>
          <CardTitle className="font-heading truncate text-text-light dark:text-text-dark">
            {post.title}
          </CardTitle>
        </CardHeader>
        <CardContent className="flex-1 overflow-hidden">
          <p className="font-sans overflow-hidden text-ellipsis line-clamp-3 text-text-light dark:text-text-dark">
            {post.content}
          </p>
        </CardContent>
        <CardFooter className="flex items-center justify-between mt-auto">
          <span className="text-sm text-gray-500 dark:text-text-dark">
            {format(new Date(post.created_at), "dd/MM/yyyy HH:mm")}
          </span>
          <div className="flex items-center space-x-2">
            <Button
              variant="link"
              size="sm"
              onClick={() => navigate(`/posts/${post.id}`)}
              className="flex items-center space-x-1 text-primary-500 hover:underline"
            >
              <Eye className="size-4" />
              <span className="font-sans text-text-light dark:text-text-dark">
                Ver detalle
              </span>
            </Button>
          </div>
        </CardFooter>
      </Card>
      <Dialog open={isOpen} onOpenChange={handleOpenChange}>
        <DialogContent className="bg-white dark:bg-surface-dark">
          <DialogHeader>
            <DialogTitle className="text-text-light dark:text-text-dark">
              Confirmar eliminación
            </DialogTitle>
            <DialogDescription className="text-text-light dark:text-text-dark">
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
