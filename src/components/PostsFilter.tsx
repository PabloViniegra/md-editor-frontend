import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface PostsFilterProps {
  search: string;
  onSearch: (search: string) => void;
  orderBy: string;
  onOrderBy: (orderBy: string) => void;
}

export default function PostsFilter({
  search,
  onSearch,
  orderBy,
  onOrderBy,
}: PostsFilterProps) {
  return (
    <article className="flex flex-col sm:flex-row items-center justify-between space-y-2 sm:space-y-0 sm:space-x-4">
      <div className="flex w-full items-center space-x-2">
        <Input
          placeholder="Busca tu post"
          value={search}
          onChange={(e) => onSearch(e.target.value)}
          className="max-w-sm font-sans bg-white dark:bg-surface-dark dark:text-text-dark border border-gray-200 dark:border-gray-600 placeholder-gray-400 dark:placeholder-gray-500 focus:ring-primary-500 focus:border-primary-500"
        />
        <Select value={orderBy} onValueChange={onOrderBy}>
          <SelectTrigger className="w-48 font-sans bg-white dark:bg-surface-dark border border-gray-200 dark:border-gray-600 focus:ring-primary-500 focus:border-primary-500">
            <SelectValue placeholder="Ordenar por" />
          </SelectTrigger>
          <SelectContent className="bg-white dark:bg-surface-dark text-text-light dark:text-text-dark">
            <SelectItem value="created_at">Creado (más recientes)</SelectItem>
            <SelectItem value="updated_at">
              Actualizado (más recientes)
            </SelectItem>
            <SelectItem value="title">Título (Z-A)</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </article>
  );
}
