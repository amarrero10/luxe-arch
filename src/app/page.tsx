import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FilterBar from "@/components/FilterBar";
import MapPanel from "@/components/MapPanelLoader";
import PropertyCard from "@/components/PropertyCard";
import { properties } from "@/lib/properties";
import { HoveredPropertyProvider } from "@/lib/hover-context";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="sticky top-0 z-50">
        <Header active="Discover" />
        <FilterBar />
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
                  {properties.length} homes available in view
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-stack-lg">
              {properties.map((property) => (
                <PropertyCard key={property.id} property={property} />
              ))}
            </div>

            <div className="flex justify-center mt-stack-lg mb-stack-lg">
              <button className="px-6 py-3 border border-outline rounded-full text-label-md font-semibold text-on-surface hover:bg-surface-container-low transition-colors">
                Load More Properties
              </button>
            </div>
          </div>

          <MapPanel properties={properties} />
        </main>
      </HoveredPropertyProvider>

      <Footer />
    </div>
  );
}
