import Link from "next/link";

const navLinks = [
  { href: "/projects", label: "Projects" },
  { href: "/writing", label: "Writing" },
  { href: "/reading", label: "Reading" },
  { href: "/hobbies", label: "Hobbies" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full bg-background/80 backdrop-blur-sm pt-4 pb-3 sm:pt-6 sm:pb-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <nav className="relative inline-flex items-center gap-0 bg-card-bg rounded-full shadow-sm px-2 sm:px-3 py-1.5 overflow-x-auto max-w-full scrollbar-hide">
          {/* Fade gradient for scroll affordance */}
          <div className="absolute right-0 top-0 bottom-0 w-6 bg-gradient-to-l from-card-bg to-transparent pointer-events-none sm:hidden" />
          <Link
            href="/"
            className="text-xs sm:text-sm font-semibold text-foreground px-2 py-1 shrink-0"
          >
            Siratal
          </Link>
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-xs sm:text-sm text-muted hover:text-foreground rounded-full px-2 sm:px-3 py-1 transition-colors whitespace-nowrap shrink-0"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
