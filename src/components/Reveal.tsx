"use client";

import { motion } from "motion/react";

const tagMap = {
  div: motion.div,
  section: motion.section,
} as const;

export default function Reveal({
  as = "div",
  children,
  delay = 0,
  y = 28,
  className,
  id,
}: {
  as?: keyof typeof tagMap;
  children: React.ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  id?: string;
}) {
  const Component = tagMap[as];
  return (
    <Component
      id={id}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </Component>
  );
}
