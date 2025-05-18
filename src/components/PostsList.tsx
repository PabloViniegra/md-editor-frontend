import { usePosts } from "@/hooks/usePosts";
import { ScrollArea } from "@/components/ui/scroll-area";
import PostItem from "./PostItem";
import { Spinner } from "./ui/spinner";
import { motion } from "framer-motion";
import PostsFilter from "./PostsFilter";
import { useState } from "react";
import { useDebounce } from "@/hooks/useDebounce";

export default function PostsList() {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [orderBy, setOrderBy] = useState<string>("created_at");
  const debouncedSearch = useDebounce(searchTerm, 500);
  const { posts, isLoading } = usePosts(debouncedSearch, orderBy);
  if (isLoading) {
    return (
      <div className="flex justify-center py-10 bg-background-light dark:bg-background-dark min-h-screen">
        <Spinner className="size-8 text-primary-500 dark:text-primary-400" />
      </div>
    );
  }

  return (
    <div className="bg-background-light dark:bg-background-dark min-h-screen">
      <div className="bg-surface-light dark:bg-surface-dark p-4 rounded-lg shadow mb-4">
        <PostsFilter
          search={searchTerm}
          onSearch={setSearchTerm}
          orderBy={orderBy}
          onOrderBy={setOrderBy}
        />
      </div>

      <ScrollArea className="h-[calc(100vh-4rem)] p-4">
        <motion.section
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.1 } },
          }}
        >
          {posts.map((post) => (
            <PostItem key={post.id} post={post} />
          ))}
        </motion.section>
      </ScrollArea>
    </div>
  );
}
