import L from "leaflet";
import { formatPriceShort } from "./format";

export function priceIcon(price: number, delayMs = 0) {
  const html = `
    <div class="map-pin" style="animation-delay: ${delayMs}ms;">
      <span>${formatPriceShort(price)}</span>
    </div>
  `;
  return L.divIcon({
    html,
    className: "",
    iconSize: undefined,
    iconAnchor: [0, 0],
  });
}

export function locationIcon() {
  const html = `
    <div class="map-pin-location">
      <span class="material-symbols-outlined" style="font-size: 20px;">home</span>
    </div>
  `;
  return L.divIcon({
    html,
    className: "",
    iconSize: undefined,
    iconAnchor: [0, 0],
  });
}
