import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useNavigate, useParams } from "react-router-dom";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import MarkdownEditor from "@/components/MarkdownEditor";
import { useCreatePost } from "@/hooks/useCreatePost";
import { useUpdatePost } from "@/hooks/useUpdatePost";
import { usePost } from "@/hooks/usePost";
import { Spinner } from "@/components/ui/spinner";
import SidebarTips from "@/components/SidebarTips";
import { useAutosave } from "@/hooks/useAutosave";

const postSchema = z.object({
  title: z.string().min(1, "Requerido"),
  content: z.string().min(1, "Requerido"),
});
type PostFormValues = z.infer<typeof postSchema>;

export default function PostForm() {
  const { postId } = useParams<{ postId?: string }>();
  const isEdit = Boolean(postId);
  const navigate = useNavigate();

  const { post, isLoading } = usePost(Number(postId));
  const { createPost, isLoading: isCreating } = useCreatePost();
  const { updatePost, isLoading: isUpdating } = useUpdatePost();

  const form = useForm<PostFormValues>({
    resolver: zodResolver(postSchema),
    defaultValues: {
      title: "",
      content: "",
    },
  });
  const { setValue, watch } = form;

  const draftKey = `draft-post-${postId || "new"}`;
  const values = watch();
  const isSaving = useAutosave<PostFormValues>(
    draftKey,
    values,
    (restored) => {
      if (!isEdit) {
        setValue("title", restored.title);
        setValue("content", restored.content);
      }
    },
    1000
  );

  useEffect(() => {
    if (post) {
      setValue("title", post.title);
      setValue("content", post.content);
    }
  }, [post, setValue]);

  function onSubmit(values: PostFormValues) {
    if (isEdit && postId) {
      updatePost({ postId: Number(postId), data: values });
    } else {
      createPost(values);
    }
  }

  if (isEdit && isLoading) {
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <Spinner className="size-8 text-indigo-600 m-auto" />
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto p-4">
      <div className="flex justify-end mb-4">
        <SidebarTips />
      </div>
      <h1 className="text-2xl mb-6 font-heading font-bold text-center">
        {isEdit ? "Editar Post" : "Crear Post"}
      </h1>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem className="font-sans">
                <FormLabel>Título</FormLabel>
                <FormControl>
                  <Input placeholder="Título del post" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="content"
            render={({ field }) => (
              <FormItem className="font-sans">
                <FormLabel>Contenido (Markdown)</FormLabel>
                <FormControl>
                  <div>
                    <MarkdownEditor
                      value={field.value}
                      onChange={field.onChange}
                    />
                  </div>
                </FormControl>
                <FormMessage />

                <div className="h-6 mt-2 flex items-center justify-start text-sm font-sans text-gray-500">
                  {isSaving && (
                    <>
                      <Spinner className="size-4 text-gray-500" />
                      <span className="ml-2">Guardando borrador...</span>
                    </>
                  )}
                </div>
              </FormItem>
            )}
          />

          <Button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-700 font-heading font-semibold"
            disabled={form.formState.isSubmitting}
          >
            {isEdit
              ? isUpdating
                ? "Actualizando..."
                : "Actualizar Post"
              : isCreating
              ? "Creando..."
              : "Crear Post"}
          </Button>
        </form>
      </Form>
    </div>
  );
}
