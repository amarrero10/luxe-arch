"use client";

import { useEffect, useMemo, useRef } from "react";
import { Marker, Popup } from "react-leaflet";
import type { Marker as LeafletMarker } from "leaflet";
import Image from "next/image";
import Link from "next/link";
import { formatPrice } from "@/lib/format";
import type { Property } from "@/lib/types";
import { priceIcon } from "@/lib/map-icon";

export default function PriceMarker({
  property,
  isActive,
  delayMs = 0,
  onHoverStart,
  onHoverEnd,
}: {
  property: Property;
  isActive: boolean;
  delayMs?: number;
  onHoverStart: () => void;
  onHoverEnd: () => void;
}) {
  const markerRef = useRef<LeafletMarker | null>(null);
  // Memoized independent of hover state: the marker's DOM node (and its entrance
  // animation) is only ever created once. Active/inactive styling is applied via
  // direct class toggling below instead of recreating the icon, which would
  // otherwise replay the entrance animation on every hover.
  const icon = useMemo(() => priceIcon(property.price, delayMs), [property.price, delayMs]);

  useEffect(() => {
    const pin = markerRef.current?.getElement()?.querySelector(".map-pin");
    pin?.classList.toggle("map-pin-active", isActive);
  }, [isActive]);

  return (
    <Marker
      ref={markerRef}
      position={[property.lat, property.lng]}
      icon={icon}
      zIndexOffset={isActive ? 1000 : 0}
      eventHandlers={{ mouseover: onHoverStart, mouseout: onHoverEnd }}
    >
      <Popup minWidth={192} closeButton={false} className="property-map-popup">
        <Link
          href={`/properties/${property.id}`}
          className="block w-48 overflow-hidden rounded-lg"
        >
          <div className="relative h-24 w-full">
            <Image
              src={property.image}
              alt={property.address}
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
  );
}
