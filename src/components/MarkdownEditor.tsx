import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

interface MarkdownEditorProps {
  value: string;
  onChange: (value: string) => void;
}

export default function MarkdownEditor({
  value,
  onChange,
}: MarkdownEditorProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <textarea
        className="w-full h-[500px] p-4 border rounded-md focus:ring-2 focus:ring-primary-500 resize-y font-sans bg-white dark:bg-surface-dark dark:text-text-dark border-gray-300 dark:border-gray-600 placeholder-gray-400 dark:placeholder-gray-500"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Escribe tu Markdown aquí..."
      />
      <div className="prose dark:prose-invert p-4 border rounded-md overflow-auto h-[500px] bg-white dark:bg-surface-dark text-text-light dark:text-text-dark">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{value}</ReactMarkdown>
      </div>
    </div>
  );
}
