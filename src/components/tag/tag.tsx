export interface TagProps {
  text: string;
}

export function Tag({ text }: TagProps) {
  return <span className="border rounded px-4 py-1">{text}</span>;
}
