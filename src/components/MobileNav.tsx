"use client";

import { useState } from "react";
import Link from "next/link";

type NavLink = { label: string; href: string };

export default function MobileNav({
  navLinks,
  active,
}: {
  navLinks: NavLink[];
  active: string;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        onClick={() => setOpen((prev) => !prev)}
        className="flex items-center justify-center p-2 rounded-full transition-colors hover:bg-surface-container-low active:opacity-70 text-primary"
      >
        <span className="material-symbols-outlined">{open ? "close" : "menu"}</span>
      </button>

      {open && (
        <>
          <button
            aria-label="Close menu overlay"
            onClick={() => setOpen(false)}
            className="fixed inset-0 bg-primary/20 z-40"
          />
          <nav className="fixed inset-x-0 top-18 bg-surface-container-lowest border-b border-on-surface-variant/10 shadow-lg z-50 flex flex-col px-6 py-2">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`py-3 text-body-lg border-b border-outline-variant/20 last:border-b-0 ${
                  link.label === active ? "text-primary font-bold" : "text-on-surface"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </>
      )}
    </div>
  );
}
