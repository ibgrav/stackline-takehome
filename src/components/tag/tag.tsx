export interface TagProps {
  text: string;
}

export function Tag({ text }: TagProps) {
  return <span className="border rounded px-3 py-1 text-sm whitespace-nowrap">{text}</span>;
}
