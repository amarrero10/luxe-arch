"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";

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
        className="flex items-center justify-center p-2 rounded-full transition-colors hover:bg-surface-container-low active:scale-90 text-primary"
      >
        <motion.span
          key={open ? "close" : "menu"}
          initial={{ rotate: -45, opacity: 0 }}
          animate={{ rotate: 0, opacity: 1 }}
          transition={{ duration: 0.2 }}
          className="material-symbols-outlined"
        >
          {open ? "close" : "menu"}
        </motion.span>
      </button>

      <AnimatePresence>
        {open && (
          <>
            <motion.button
              key="overlay"
              aria-label="Close menu overlay"
              onClick={() => setOpen(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-primary/20 z-40"
            />
            <motion.nav
              key="drawer"
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="fixed inset-x-0 top-18 bg-surface-container-lowest border-b border-on-surface-variant/10 shadow-lg z-50 flex flex-col px-6 py-2"
            >
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.label}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.25, delay: index * 0.05 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className={`block py-3 text-body-lg ${
                      index < navLinks.length - 1 ? "border-b border-outline-variant/20" : ""
                    } ${link.label === active ? "text-primary font-bold" : "text-on-surface"}`}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
