import "server-only";

type LatLng = { lat: number; lng: number };

async function geocodeWithCensus(fullAddress: string): Promise<LatLng | null> {
  const url = new URL("https://geocoding.geo.census.gov/geocoder/locations/onelineaddress");
  url.searchParams.set("address", fullAddress);
  url.searchParams.set("benchmark", "Public_AR_Current");
  url.searchParams.set("format", "json");

  const res = await fetch(url);
  if (!res.ok) return null;

  const data = (await res.json()) as {
    result?: { addressMatches?: Array<{ coordinates: { x: number; y: number } }> };
  };
  const match = data.result?.addressMatches?.[0];
  if (!match) return null;

  return { lat: match.coordinates.y, lng: match.coordinates.x };
}

async function geocodeWithNominatim(fullAddress: string): Promise<LatLng | null> {
  const url = new URL("https://nominatim.openstreetmap.org/search");
  url.searchParams.set("format", "json");
  url.searchParams.set("limit", "1");
  url.searchParams.set("q", fullAddress);

  const res = await fetch(url, {
    headers: {
      "User-Agent": "luxe-arch-demo/1.0 (contact: agent@luxearch.demo)",
    },
  });
  if (!res.ok) return null;

  const results = (await res.json()) as Array<{ lat: string; lon: string }>;
  const first = results[0];
  if (!first) return null;

  return { lat: Number(first.lat), lng: Number(first.lon) };
}

// The Census geocoder is purpose-built for exact US street addresses and
// consistently outperforms Nominatim/OSM there (which has real coverage gaps
// for residential streets). Nominatim is kept as a fallback for anything the
// Census benchmark doesn't resolve.
export async function geocodeAddress(fullAddress: string): Promise<LatLng | null> {
  const census = await geocodeWithCensus(fullAddress);
  if (census) return census;

  return geocodeWithNominatim(fullAddress);
}
