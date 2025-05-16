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
    <article className="flex flex-col sm:flex-row items-center justify-between mb-4 space-y-2 sm:space-y-0 sm:space-x-4">
      <div className="flex flex-row w-full mx-10 justify-between items-center space-x-2">
        <Input
          placeholder="Busca tu post"
          value={search}
          onChange={(e) => onSearch(e.target.value)}
          className="max-w-sm font-sans"
        />
        <Select value={orderBy} onValueChange={onOrderBy}>
          <SelectTrigger className="w-48 font-sans">
            <SelectValue placeholder="Ordenar por" />
          </SelectTrigger>
          <SelectContent>
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
