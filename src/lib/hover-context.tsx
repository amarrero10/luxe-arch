"use client";

import { createContext, useContext, useMemo, useState, type ReactNode } from "react";

type HoverContextValue = {
  hoveredId: string | null;
  setHoveredId: (id: string | null) => void;
};

const noop = () => {};
const defaultValue: HoverContextValue = { hoveredId: null, setHoveredId: noop };

const HoverContext = createContext<HoverContextValue>(defaultValue);

export function HoveredPropertyProvider({ children }: { children: ReactNode }) {
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const value = useMemo(() => ({ hoveredId, setHoveredId }), [hoveredId]);

  return <HoverContext.Provider value={value}>{children}</HoverContext.Provider>;
}

export function useHoveredProperty() {
  return useContext(HoverContext);
}
