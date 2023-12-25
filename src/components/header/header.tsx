import { Logo } from "@/components/logo/logo";

export function Header() {
  return (
    <header className="bg-primary shadow-sm">
      <div className="flex container py-4">
        <Logo className="w-40" pathClassName="fill-white" />
        <h1 className="sr-only">Stackline Takehome</h1>
      </div>
    </header>
  );
}
