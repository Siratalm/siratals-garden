import Link from "next/link";

const navLinks = [
  { href: "/projects", label: "Projects" },
  { href: "/writing", label: "Writing" },
  { href: "/reading", label: "Reading" },
  { href: "/hobbies", label: "Hobbies" },
];

export default function Navbar() {
  return (
    <header className="w-full bg-background pt-6 pb-4">
      <div className="max-w-7xl mx-auto px-6">
        <nav className="inline-flex items-center gap-0 bg-card-bg rounded-full shadow-sm px-3 py-1.5">
          <Link
            href="/"
            className="text-sm font-semibold text-foreground px-2 py-1 shrink-0"
          >
            Siratal
          </Link>
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-muted hover:text-foreground rounded-full px-3 py-1 transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
