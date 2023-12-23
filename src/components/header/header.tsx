export function Header() {
  return (
    <header className="bg-primary shadow-sm">
      <div className="flex p-4">
        {/* eager loading for an image above-the-fold, for better core web vital performance */}
        <img className="w-40" src="/assets/stackline_logo.svg" loading="eager" />
      </div>
    </header>
  );
}
