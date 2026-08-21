import { Suspense } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FilterBar from "@/components/FilterBar";
import MapPanel from "@/components/MapPanelLoader";
import PropertyList from "@/components/PropertyList";
import { getProperties, type PropertyFilters } from "@/lib/properties";
import { HoveredPropertyProvider } from "@/lib/hover-context";

type SearchParams = Record<string, string | string[] | undefined>;

function parseFilters(searchParams: SearchParams): PropertyFilters {
  const get = (key: string) => {
    const value = searchParams[key];
    return Array.isArray(value) ? value[0] : value;
  };
  const toNumber = (value?: string) => {
    const num = Number(value);
    return value && Number.isFinite(num) ? num : undefined;
  };

  return {
    q: get("q"),
    minPrice: toNumber(get("minPrice")),
    maxPrice: toNumber(get("maxPrice")),
    propertyType: get("type"),
    minBeds: toNumber(get("minBeds")),
    minBaths: toNumber(get("minBaths")),
  };
}

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<SearchParams>;
}) {
  const filters = parseFilters(await searchParams);
  const properties = await getProperties(filters);
  const hasFilters = Boolean(
    filters.q ||
      filters.minPrice ||
      filters.maxPrice ||
      filters.propertyType ||
      filters.minBeds ||
      filters.minBaths,
  );

  return (
    <div className="flex flex-col min-h-screen">
      <div className="sticky top-0 z-50">
        <Header active="Discover" />
        <Suspense>
          <FilterBar />
        </Suspense>
      </div>

      <HoveredPropertyProvider>
        <main className="flex-1 flex items-start">
          <div className="w-full lg:w-[40%] xl:w-[35%] bg-background p-6 md:p-8">
            <div className="flex justify-between items-end mb-stack-lg">
              <div>
                <h1 className="text-headline-lg font-bold text-primary tracking-tight">
                  Properties
                </h1>
                <p className="text-body-md text-on-surface-variant mt-1">
                  {properties.length} home{properties.length === 1 ? "" : "s"} available in view
                </p>
              </div>
            </div>

            {properties.length === 0 ? (
              <div className="flex flex-col items-center text-center gap-stack-sm py-section-gap">
                <span className="material-symbols-outlined text-[40px] text-on-surface-variant">
                  search_off
                </span>
                <p className="text-body-lg text-on-surface-variant">
                  No properties match your filters.
                </p>
                {hasFilters && (
                  <Link
                    href="/"
                    className="text-label-md font-semibold text-primary hover:underline underline-offset-4"
                  >
                    Clear all filters
                  </Link>
                )}
              </div>
            ) : (
              <PropertyList key={JSON.stringify(filters)} properties={properties} />
            )}
          </div>

          <MapPanel properties={properties} />
        </main>
      </HoveredPropertyProvider>

      <Footer />
    </div>
  );
}
