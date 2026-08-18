"use client";

import { useMemo, useRef } from "react";
import { MapContainer, TileLayer, Marker, Popup, ZoomControl } from "react-leaflet";
import type { Map as LeafletMap } from "leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import Image from "next/image";
import Link from "next/link";
import { formatCityState, formatPrice } from "@/lib/format";
import type { Property } from "@/lib/types";
import { useHoveredProperty } from "@/lib/hover-context";
import { priceIcon } from "@/lib/map-icon";

export default function MapPanel({ properties }: { properties: Property[] }) {
  const mapRef = useRef<LeafletMap | null>(null);
  const { hoveredId, setHoveredId } = useHoveredProperty();

  const bounds = useMemo(() => {
    return L.latLngBounds(properties.map((p) => [p.lat, p.lng] as [number, number]));
  }, [properties]);

  return (
    <div className="hidden lg:block lg:w-[60%] xl:w-[65%] lg:sticky lg:top-36 lg:h-[calc(100vh-9rem)] relative bg-surface-container-high">
      <MapContainer
        ref={mapRef}
        bounds={bounds}
        boundsOptions={{ padding: [64, 64] }}
        scrollWheelZoom
        zoomControl={false}
        className="w-full h-full"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <ZoomControl position="bottomright" />
        {properties.map((property) => (
          <Marker
            key={property.id}
            position={[property.lat, property.lng]}
            icon={priceIcon(property.price, hoveredId === property.id)}
            zIndexOffset={hoveredId === property.id ? 1000 : 0}
            eventHandlers={{
              mouseover: () => setHoveredId(property.id),
              mouseout: () => setHoveredId(null),
            }}
          >
            <Popup minWidth={192} closeButton={false} className="property-map-popup">
              <Link href={`/properties/${property.id}`} className="block w-48 overflow-hidden rounded-lg">
                <div className="relative h-24 w-full">
                  <Image
                    src={property.image}
                    alt={`${property.address}, ${formatCityState(property)}`}
                    fill
                    sizes="192px"
                    className="object-cover"
                  />
                </div>
                <div className="p-2 bg-surface-container-lowest">
                  <div className="text-label-md font-semibold text-primary">
                    {formatPrice(property.price)}
                  </div>
                  <div className="text-[12px] text-on-surface-variant truncate">
                    {property.address}
                  </div>
                </div>
              </Link>
            </Popup>
          </Marker>
        ))}
      </MapContainer>

      <button
        aria-label="Recenter map"
        onClick={() => mapRef.current?.fitBounds(bounds, { padding: [64, 64] })}
        className="absolute right-6 top-6 z-1000 bg-surface-container-lowest rounded-lg shadow-sm border border-surface-variant p-1"
      >
        <span className="material-symbols-outlined block p-2 text-on-surface hover:bg-surface-container-low rounded-md transition-colors">
          my_location
        </span>
      </button>
    </div>
  );
}
