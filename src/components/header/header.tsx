export function Header() {
  return (
    <header className="bg-primary shadow-sm">
      <div className="flex container py-4">
        {/* eager loading for an image above-the-fold, for better core web vital performance */}
        <img className="w-40" src="/assets/media/stackline_logo.svg" loading="eager" />
        <h1 className="sr-only">Stackline Takehome</h1>
      </div>
    </header>
  );
}
