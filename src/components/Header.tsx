import Link from "next/link";

const navLinks = [
  { label: "Discover", href: "/" },
  { label: "Agents", href: "/agents" },
  { label: "Dashboard", href: "/dashboard" },
  { label: "About", href: "/about" },
];

export default function Header({ active = "Discover" }: { active?: string }) {
  return (
    <header className="bg-surface-container-lowest w-full top-0 sticky border-b border-on-surface-variant/10 z-50">
      <div className="flex justify-between items-center w-full px-6 md:px-margin-desktop py-4 max-w-container-container-max mx-auto">
        <Link
          href="/"
          className="text-headline-md font-bold text-primary tracking-tight"
        >
          LUXE ARCH
        </Link>

        <nav className="hidden md:flex items-center gap-gutter">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={
                link.label === active
                  ? "text-primary font-bold border-b-2 border-primary pb-1 transition-opacity hover:opacity-70"
                  : "text-on-secondary-container text-body-md transition-colors duration-200 hover:text-primary"
              }
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-stack-md text-primary text-body-md">
          <button
            aria-label="Notifications"
            className="flex items-center justify-center p-2 rounded-full transition-colors hover:bg-surface-container-low active:opacity-70"
          >
            <span className="material-symbols-outlined">notifications</span>
          </button>
          <button
            aria-label="Saved properties"
            className="flex items-center justify-center p-2 rounded-full transition-colors hover:bg-surface-container-low active:opacity-70"
          >
            <span className="material-symbols-outlined">favorite</span>
          </button>
          <div className="w-10 h-10 rounded-full overflow-hidden border border-outline-variant cursor-pointer ml-2 bg-surface-container-high" />
        </div>
      </div>
    </header>
  );
}
