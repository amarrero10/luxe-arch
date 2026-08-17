import Image from "next/image";
import Link from "next/link";
import { formatPrice, type Property } from "@/lib/properties";

export default function PropertyCard({ property }: { property: Property }) {
  return (
    <Link
      href={`/properties/${property.id}`}
      className="block bg-surface-container-lowest rounded-xl overflow-hidden property-card-shadow group border border-transparent hover:border-surface-variant transition-all"
    >
      <div className="relative h-64 w-full overflow-hidden">
        <Image
          src={property.image}
          alt={`${property.address}, ${property.city}`}
          fill
          sizes="(min-width: 1024px) 35vw, 100vw"
          className="object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out"
        />
        <button
          aria-label="Save property"
          className="absolute top-4 right-4 p-2 rounded-full bg-surface-container-lowest/80 backdrop-blur-sm text-on-surface transition-colors hover:text-error"
        >
          <span className="material-symbols-outlined">favorite</span>
        </button>
        {property.badge && (
          <div className="absolute top-4 left-4 px-3 py-1 bg-surface-container-lowest/90 backdrop-blur-md rounded-full text-label-md font-semibold text-on-tertiary-container shadow-sm">
            {property.badge}
          </div>
        )}
      </div>
      <div className="p-4">
        <div className="text-price-display font-bold text-primary mb-1">
          {formatPrice(property.price)}
        </div>
        <div className="text-body-md text-on-surface-variant mb-4">
          {property.address}, {property.city}
        </div>
        <div className="flex items-center gap-4 border-t border-surface-variant pt-4 text-label-md font-semibold text-on-surface">
          <div className="flex items-center gap-1.5">
            <span className="material-symbols-outlined text-[18px] text-on-surface-variant">
              bed
            </span>
            {property.beds}
          </div>
          <div className="w-px h-4 bg-surface-variant" />
          <div className="flex items-center gap-1.5">
            <span className="material-symbols-outlined text-[18px] text-on-surface-variant">
              bathtub
            </span>
            {property.baths}
          </div>
          <div className="w-px h-4 bg-surface-variant" />
          <div className="flex items-center gap-1.5">
            <span className="material-symbols-outlined text-[18px] text-on-surface-variant">
              square_foot
            </span>
            {property.sqft.toLocaleString("en-US")}
          </div>
        </div>
      </div>
    </Link>
  );
}
