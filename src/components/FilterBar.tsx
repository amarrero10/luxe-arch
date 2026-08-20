"use client";

import { useEffect, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import FilterDropdown from "./FilterDropdown";
import { PROPERTY_TYPES } from "@/lib/types";

const PRICE_RANGES: { label: string; min?: number; max?: number }[] = [
  { label: "Any Price" },
  { label: "Under $1M", max: 1_000_000 },
  { label: "$1M – $2M", min: 1_000_000, max: 2_000_000 },
  { label: "$2M – $5M", min: 2_000_000, max: 5_000_000 },
  { label: "$5M+", min: 5_000_000 },
];

const BEDS_OPTIONS = [1, 2, 3, 4, 5];
const BATHS_OPTIONS = [1, 2, 3, 4];

const optionClass = (isSelected: boolean) =>
  `flex items-center justify-between gap-4 text-left px-3 py-2 rounded-lg transition-colors ${
    isSelected
      ? "bg-primary/10 text-primary font-semibold"
      : "text-on-surface hover:bg-surface-container-low"
  }`;

export default function FilterBar() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [search, setSearch] = useState(searchParams.get("q") ?? "");

  const minPrice = searchParams.get("minPrice") ?? undefined;
  const maxPrice = searchParams.get("maxPrice") ?? undefined;
  const propertyType = searchParams.get("type") ?? undefined;
  const minBeds = searchParams.get("minBeds") ?? undefined;
  const minBaths = searchParams.get("minBaths") ?? undefined;

  function updateParams(updates: Record<string, string | undefined>) {
    const params = new URLSearchParams(searchParams.toString());
    for (const [key, value] of Object.entries(updates)) {
      if (value) params.set(key, value);
      else params.delete(key);
    }
    const query = params.toString();
    router.push(query ? `${pathname}?${query}` : pathname, { scroll: false });
  }

  useEffect(() => {
    const currentQ = searchParams.get("q") ?? "";
    if (search === currentQ) return;
    const handle = setTimeout(() => {
      updateParams({ q: search.trim() || undefined });
    }, 350);
    return () => clearTimeout(handle);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search]);

  const activePriceRange = PRICE_RANGES.find(
    (range) =>
      (range.min ? String(range.min) : undefined) === minPrice &&
      (range.max ? String(range.max) : undefined) === maxPrice,
  );

  const hasAnyFilter = Boolean(
    search || minPrice || maxPrice || propertyType || minBeds || minBaths,
  );

  function clearAll() {
    setSearch("");
    router.push(pathname, { scroll: false });
  }

  return (
    <div className="bg-surface-container-lowest border-b border-on-surface-variant/10 h-18 px-6 md:px-margin-desktop hidden md:flex items-center gap-stack-md shrink-0">
      <div className="relative">
        <input
          className="w-64 pl-10 pr-4 py-2 bg-surface rounded-full border border-surface-variant focus:border-on-tertiary-container focus:ring-1 focus:ring-on-tertiary-container outline-none transition-all text-body-md placeholder:text-on-surface-variant"
          placeholder="Search location..."
          type="text"
          value={search}
          onChange={(event) => setSearch(event.target.value)}
        />
        <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant pointer-events-none">
          search
        </span>
      </div>

      <div className="h-6 w-px bg-surface-variant mx-2" />

      <FilterDropdown
        label="Price Range"
        displayLabel={minPrice || maxPrice ? activePriceRange?.label : undefined}
        isActive={Boolean(minPrice || maxPrice)}
      >
        {(close) => (
          <div className="flex flex-col">
            {PRICE_RANGES.map((range) => {
              const isSelected = range === activePriceRange;
              return (
                <button
                  key={range.label}
                  type="button"
                  onClick={() => {
                    updateParams({
                      minPrice: range.min ? String(range.min) : undefined,
                      maxPrice: range.max ? String(range.max) : undefined,
                    });
                    close();
                  }}
                  className={optionClass(isSelected)}
                >
                  {range.label}
                  {isSelected && (
                    <span className="material-symbols-outlined text-[18px]">check</span>
                  )}
                </button>
              );
            })}
          </div>
        )}
      </FilterDropdown>

      <FilterDropdown
        label="Property Type"
        displayLabel={propertyType}
        isActive={Boolean(propertyType)}
      >
        {(close) => (
          <div className="flex flex-col">
            <button
              type="button"
              onClick={() => {
                updateParams({ type: undefined });
                close();
              }}
              className={optionClass(!propertyType)}
            >
              Any Type
              {!propertyType && (
                <span className="material-symbols-outlined text-[18px]">check</span>
              )}
            </button>
            {PROPERTY_TYPES.map((type) => {
              const isSelected = propertyType === type;
              return (
                <button
                  key={type}
                  type="button"
                  onClick={() => {
                    updateParams({ type });
                    close();
                  }}
                  className={optionClass(isSelected)}
                >
                  {type}
                  {isSelected && (
                    <span className="material-symbols-outlined text-[18px]">check</span>
                  )}
                </button>
              );
            })}
          </div>
        )}
      </FilterDropdown>

      <FilterDropdown label="More Filters" isActive={Boolean(minBeds || minBaths)}>
        {(close) => (
          <div className="flex flex-col gap-stack-sm w-56 p-1">
            <div>
              <div className="text-label-md font-semibold text-on-surface-variant mb-1">
                Min Beds
              </div>
              <div className="flex flex-wrap gap-1">
                {BEDS_OPTIONS.map((n) => (
                  <button
                    key={n}
                    type="button"
                    onClick={() =>
                      updateParams({ minBeds: minBeds === String(n) ? undefined : String(n) })
                    }
                    className={`px-3 py-1.5 rounded-full text-label-md font-semibold border transition-colors ${
                      minBeds === String(n)
                        ? "bg-primary text-on-primary border-primary"
                        : "border-surface-variant text-on-surface hover:border-primary"
                    }`}
                  >
                    {n}+
                  </button>
                ))}
              </div>
            </div>
            <div>
              <div className="text-label-md font-semibold text-on-surface-variant mb-1">
                Min Baths
              </div>
              <div className="flex flex-wrap gap-1">
                {BATHS_OPTIONS.map((n) => (
                  <button
                    key={n}
                    type="button"
                    onClick={() =>
                      updateParams({ minBaths: minBaths === String(n) ? undefined : String(n) })
                    }
                    className={`px-3 py-1.5 rounded-full text-label-md font-semibold border transition-colors ${
                      minBaths === String(n)
                        ? "bg-primary text-on-primary border-primary"
                        : "border-surface-variant text-on-surface hover:border-primary"
                    }`}
                  >
                    {n}+
                  </button>
                ))}
              </div>
            </div>
            <button
              type="button"
              onClick={close}
              className="mt-1 text-label-md font-semibold text-primary self-end"
            >
              Done
            </button>
          </div>
        )}
      </FilterDropdown>

      {hasAnyFilter && (
        <button
          type="button"
          onClick={clearAll}
          className="flex items-center gap-1 text-label-md font-semibold text-on-surface-variant hover:text-error transition-colors ml-auto"
        >
          <span className="material-symbols-outlined text-[18px]">close</span>
          Clear Filters
        </button>
      )}
    </div>
  );
}
