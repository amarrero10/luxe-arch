import { formatPriceShort, type Property } from "@/lib/properties";

const MAP_BACKGROUND =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuCYPfLz1jmhu-N4t-DcpHDn6FsUvSWf3T75f0cuce_lT1gjS_e_cCcEY2EO_ki85Jecp45PHNzVxTCcs5YmMohWQypo7H7_H-AOhdyYaT3tYIOBWd8s4Y8HsTDt5GtMmXVGUX36wVpWXw2SpY_rlp8lmbf0UGUNKqdXN-XTKmv3ICxbF91C96mXsAp6Lsb-UQkOo5NCPz1fYApaCUIH9Rkfql1s2oCDbChWRleYET8-ZDKMUPUPzzYN";

export default function MapPanel({ properties }: { properties: Property[] }) {
  return (
    <div className="hidden lg:block lg:w-[60%] xl:w-[65%] relative bg-surface-container-high">
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center"
        style={{ backgroundImage: `url('${MAP_BACKGROUND}')` }}
      />

      <div className="absolute right-6 bottom-6 flex flex-col gap-2 bg-surface-container-lowest rounded-lg shadow-sm border border-surface-variant p-1">
        <button
          aria-label="Zoom in"
          className="p-2 text-on-surface hover:bg-surface-container-low rounded-md transition-colors"
        >
          <span className="material-symbols-outlined">add</span>
        </button>
        <div className="w-full h-px bg-surface-variant" />
        <button
          aria-label="Zoom out"
          className="p-2 text-on-surface hover:bg-surface-container-low rounded-md transition-colors"
        >
          <span className="material-symbols-outlined">remove</span>
        </button>
      </div>

      <div className="absolute right-6 top-6 bg-surface-container-lowest rounded-lg shadow-sm border border-surface-variant p-1">
        <button
          aria-label="Center on my location"
          className="p-2 text-on-surface hover:bg-surface-container-low rounded-md transition-colors"
        >
          <span className="material-symbols-outlined">my_location</span>
        </button>
      </div>

      {properties.map((property) => (
        <div
          key={property.id}
          className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group z-10"
          style={{ top: property.mapPosition.top, left: property.mapPosition.left }}
        >
          <div className="bg-surface-container-lowest text-primary text-label-md font-semibold px-3 py-1.5 rounded-full shadow-md border border-outline-variant relative whitespace-nowrap transition-colors hover:border-primary">
            {formatPriceShort(property.price)}
            <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[6px] border-r-[6px] border-t-[6px] border-l-transparent border-r-transparent border-t-outline-variant" />
          </div>
        </div>
      ))}
    </div>
  );
}
