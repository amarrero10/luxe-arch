import Link from "next/link";

const links = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Service", href: "/terms" },
  { label: "Cookie Policy", href: "/cookies" },
];

export default function Footer() {
  return (
    <footer className="bg-surface-container-low w-full border-t border-outline-variant mt-auto">
      <div className="flex flex-col md:flex-row justify-between items-center w-full px-6 py-8 mx-auto gap-4 max-w-container-container-max">
        <div className="text-headline-md font-semibold text-primary">LUXE ARCH</div>
        <div className="flex flex-wrap justify-center gap-4 text-label-md font-semibold text-on-surface-variant">
          {links.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="transition-all duration-300 hover:underline decoration-primary underline-offset-4"
            >
              {link.label}
            </Link>
          ))}
        </div>
        <div className="text-label-md font-semibold text-on-surface">
          © 2026 Luxe Arch Global Realty. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
