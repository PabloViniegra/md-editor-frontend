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
        className="w-full h-[500px] p-4 border rounded-md focus:ring-2 focus:ring-indigo-400 resize-y font-sans"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Escribe tu Markdown aquí..."
      />
      <div className="prose prose-indigo p-2 border rounded-md overflow-auto h-[500px] font-sans">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{value}</ReactMarkdown>
      </div>
    </div>
  );
}
