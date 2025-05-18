import { useParams } from "react-router-dom";
import { Spinner } from "@/components/ui/spinner";
import { usePost } from "@/hooks/usePost";
import { PostViewComponent } from "@/components/PostViewComponent";

export default function PostView() {
  const { postId } = useParams<{ postId: string }>();
  const { post, isLoading } = usePost(Number(postId));
  if (isLoading || !post) {
    return (
      <div className="flex items-center justify-center h-screen bg-background-light dark:bg-background-dark">
        <Spinner className="size-8 text-primary-500 dark:text-primary-400" />
      </div>
    );
  }
  return <PostViewComponent post={post} />;
}
