"use client";

import { useMemo, useRef } from "react";
import { MapContainer, TileLayer, ZoomControl } from "react-leaflet";
import type { Map as LeafletMap } from "leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import type { Property } from "@/lib/types";
import { useHoveredProperty } from "@/lib/hover-context";
import PriceMarker from "./PriceMarker";

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
        {properties.map((property, index) => (
          <PriceMarker
            key={property.id}
            property={property}
            isActive={hoveredId === property.id}
            delayMs={index * 60}
            onHoverStart={() => setHoveredId(property.id)}
            onHoverEnd={() => setHoveredId(null)}
          />
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
