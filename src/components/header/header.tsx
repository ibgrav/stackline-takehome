// import { Logo } from "@/components/logo/logo";

export function Header() {
  return (
    <header className="bg-primary shadow-sm">
      <div className="flex container py-4">
        {/* eager loading for an image in FCP, for better core web vital performance */}
        {/* <Logo className="w-40" pathClassName="fill-white" /> */}
        <img className="w-40" src="/assets/media/stackline_logo.svg" loading="eager" alt="Stackline Logo" />
        <h1 className="sr-only">Stackline Takehome</h1>
      </div>
    </header>
  );
}
