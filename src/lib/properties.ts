export type Property = {
  id: string;
  price: number;
  address: string;
  city: string;
  beds: number;
  baths: number;
  sqft: number;
  image: string;
  badge?: string;
  mapPosition: { top: string; left: string };
};

export const properties: Property[] = [
  {
    id: "highland-ave",
    price: 4250000,
    address: "1204 Highland Ave",
    city: "Beverly Hills, CA",
    beds: 4,
    baths: 5.5,
    sqft: 4800,
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuD4tDfamJyyBm3ew58mNA1MNonc9KGRQuwQD94P7dHy3JV_XpLdkDAIN-7t2m6jNxB2vxDl172S6ypu8XR16IrG35V81SZsAtEEilhwCIYH3xLJ3644n7qwn1ArryWNmpcvGK9gGW9SWt5id25DXFTMrH1_Zu5K-03meuohGEwmoC1seyfpmSeZhcLE0wh4i8D-TuEHL1tSRkLOxin_S-PNRPh73bCBeQ9TZ6_MPOiBxoB2ETyJvncA",
    badge: "Just Listed",
    mapPosition: { top: "30%", left: "40%" },
  },
  {
    id: "west-paces-ferry",
    price: 2895000,
    address: "883 West Paces Ferry Rd",
    city: "Atlanta, GA",
    beds: 5,
    baths: 4,
    sqft: 5200,
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuB6L4-z_8yxXeo6Z5k7y5V9uUMD7a_zp2ZwCcaPZMC3LLcIgmsssaJIz_3DLZAmhDXUCo4xZbLe0LTLwEcigxcPHxyZxki4c7kP8lRllo_NrrhROMFozU4zPSFvn6tqB1ty3dHGP0gs_KQZluKQLI9ozbrQGg0uiy3vmdHHqetRNKWHeaYD_T6zdoz1BPDyd_s6Qbxwt433DrJ52Id6NNEuoZlWwn5SZ02Zlw29Ozl6lN9R_06UkKY9",
    mapPosition: { top: "50%", left: "60%" },
  },
  {
    id: "14th-st-4b",
    price: 1750000,
    address: "400 S 14th St, Unit 4B",
    city: "New York, NY",
    beds: 2,
    baths: 2.5,
    sqft: 1850,
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAvTHo8tWGyIylil_51DQRhMKTKEOvjkjG2hHGR3pGZUKCOP7FSFGXhZnjtiUfS7Z8mp_0ZjeBymeCSIRLYOASBG666-Jcgba7qWFHZ01ggGw7UC27TwOgZhqhv9SEzq7cJ_LK9CyBZrzDelvvCvEo8YnuDAzLfB28Oaw9FeV5gqkfYEQNByw8GmencsiJg8oJptotpHP7BbayaZeXjVrXqwHEEVE6vQpDRAiezslZEYd68g01uAvBz",
    mapPosition: { top: "65%", left: "35%" },
  },
];

export function formatPrice(price: number): string {
  return `$${price.toLocaleString("en-US")}`;
}

export function formatPriceShort(price: number): string {
  const millions = price / 1_000_000;
  const rounded =
    millions >= 10 ? millions.toFixed(0) : millions.toFixed(2).replace(/0$/, "").replace(/\.$/, "");
  return `$${rounded}M`;
}
