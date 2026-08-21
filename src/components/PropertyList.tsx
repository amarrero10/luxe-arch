"use client";

import { useEffect, useRef, useState } from "react";
import PropertyCard from "./PropertyCard";
import Reveal from "./Reveal";
import type { Property } from "@/lib/types";

const PAGE_SIZE = 4;

export default function PropertyList({ properties }: { properties: Property[] }) {
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);
  const sentinelRef = useRef<HTMLDivElement>(null);

  const hasMore = visibleCount < properties.length;

  useEffect(() => {
    if (!hasMore) return;

    const sentinel = sentinelRef.current;
    if (!sentinel) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setVisibleCount((count) => Math.min(count + PAGE_SIZE, properties.length));
        }
      },
      { rootMargin: "400px 0px" },
    );

    observer.observe(sentinel);
    return () => observer.disconnect();
  }, [hasMore, properties.length]);

  const visibleProperties = properties.slice(0, visibleCount);

  return (
    <div className="flex flex-col gap-stack-lg">
      {visibleProperties.map((property, index) => (
        <Reveal key={property.id} delay={(index % PAGE_SIZE) * 0.08} y={16}>
          <PropertyCard property={property} />
        </Reveal>
      ))}
      {hasMore && <div ref={sentinelRef} aria-hidden />}
    </div>
  );
}
