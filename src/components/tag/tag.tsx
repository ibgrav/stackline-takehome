export interface TagProps {
  text: string;
}

// not clear from mockup if this has interaction, but could be <a /> or <button /> if required
export function Tag({ text }: TagProps) {
  return <span className="border rounded px-3 py-1 text-sm whitespace-nowrap">{text}</span>;
}
