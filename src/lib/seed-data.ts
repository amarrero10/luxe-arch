import type { Agent, Property } from "./types";

const AGENT_ID = "sarah-jenkins";
const MARCUS_AGENT_ID = "marcus-chen";

const HIGHLAND_HERO =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuD4tDfamJyyBm3ew58mNA1MNonc9KGRQuwQD94P7dHy3JV_XpLdkDAIN-7t2m6jNxB2vxDl172S6ypu8XR16IrG35V81SZsAtEEilhwCIYH3xLJ3644n7qwn1ArryWNmpcvGK9gGW9SWt5id25DXFTMrH1_Zu5K-03meuohGEwmoC1seyfpmSeZhcLE0wh4i8D-TuEHL1tSRkLOxin_S-PNRPh73bCBeQ9TZ6_MPOiBxoB2ETyJvncA";
const WEST_PACES_HERO =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuB6L4-z_8yxXeo6Z5k7y5V9uUMD7a_zp2ZwCcaPZMC3LLcIgmsssaJIz_3DLZAmhDXUCo4xZbLe0LTLwEcigxcPHxyZxki4c7kP8lRllo_NrrhROMFozU4zPSFvn6tqB1ty3dHGP0gs_KQZluKQLI9ozbrQGg0uiy3vmdHHqetRNKWHeaYD_T6zdoz1BPDyd_s6Qbxwt433DrJ52Id6NNEuoZlWwn5SZ02Zlw29Ozl6lN9R_06UkKY9";
const FOURTEENTH_ST_HERO =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuAvTHo8tWGyIylil_51DQRhMKTKEOvjkjG2hHGR3pGZUKCOP7FSFGXhZnjtiUfS7Z8mp_0ZjeBymeCSIRLYOASBG666-Jcgba7qWFHZ01ggGw7UC27TwOgZhqhv9SEzq7cJ_LK9CyBZrzDelvvCvEo8YnuDAzLfB28Oaw9FeV5gqkfYEQNByw8GmencsiJg8oJptotpHP7BbayaZeXjVrXqwHEEVE6vQpDRAiezslZEYd68g01uAvBz";

const LIVING_ROOM_GLASS =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuC484Pr1rOSSb2gntdd1HXxA15wnVxfc73bgcFFDFF1ZK_rtzYfRi-rdLyKUAy9Xjezm8Pb9dG-p4E9QVxoUrGHTAKDqr0JQEC6Avq0wtdFE0tupg3qBk12880t1_fN1q7mfxRCMqJ8qPXG6y_8S3McBeNYCOl2sKOMLZKMlC0HEalTwSKCBC9cSe157EZ1e_8pj0aczatRL8D1zX2IahVws_CDDo7UmiJ6M-lBDS6LrPoW3LIeV6VB";
const MARBLE_KITCHEN =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDtCuIp52SwhmeAjX9f-4vsbNBBNqyFss_bYzhSjtdljbHoDQVzTVNmvQyT47BdR4mgtsAwXwy6zFHR-Zt8HxOFabonXCaCPHaqFEBCxfgQYhdcMM3tUVVQNsVXaioS0uaU3-T8ZHfUw7GXEpM25ITrk0gzEAoKXJrUd_38DOXQZDKzfFfIASTAsRFQbXschv1_I091Zj8jApB0LOkYm2g0wm3fZBc9hVlP5JxhOLSHtdPu2dwFDJS3";
const BEDROOM_SUITE =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDWhrZgRd0vm5mfWxDoteNzuMqOo_euHhxxWiCCDWbCCX5Q-l7lS-yFL7-lpg2ttasDLaXBp256y8P-Xa70QKKaIkWc-952fMdIdnh0R9r-ajsnB38kFrJtw-BtJU43rGWDOSL9A_pptmQqZ_NYDdRGDU0Jx9QkuPJVS2jRMwTbcvo3X3_cAfkCv6pJQgJibC2hxfXnb0bHSfHU2HKn0X6O--ms51DUO2mAk50OL68Lf5zxlFjePITn";
const SPA_BATHROOM =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuCnC9knG-0cs06rI1wLLvUOQ9FTgtRyIkEqBnzIZ0aW0aqI_JVkNGjPyLC8GMKlQ7qRIK3XGnwuW8f-BNDrqZb74z-jJ1zpCbt1YxHqUeIb9SHfq-Rcp9AhWbHnaHORYQ6ly5dmjGxfJdwaaoMGuSaNBfwXULT0L7jZuHkbxx2S_mWz_kvk-TpO0Wl8gACsDIar1gt8bmYiXfPZ4QriE_iULPiIhHUFWYDFi1RfNeH5iaaBOmmZmGJf";

// Landmark-adjacent fictional addresses (not real street addresses) for Marcus's listings below.
const KERRY_PARK_HERO =
  "https://images.unsplash.com/photo-1756435292384-1bf32eff7baf?auto=format&fit=crop&w=2400&q=80";
const MILLENNIUM_PARK_HERO =
  "https://images.unsplash.com/photo-1551766472-62096056b476?auto=format&fit=crop&w=2400&q=80";
const FREEDOM_TRAIL_HERO =
  "https://images.unsplash.com/photo-1672610444491-2284fefdd735?auto=format&fit=crop&w=2400&q=80";

export const seedProperties: Property[] = [
  {
    id: "highland-ave",
    price: 4250000,
    address: "1204 Highland Ave",
    city: "Beverly Hills",
    state: "CA",
    zip: "90210",
    beds: 4,
    baths: 5.5,
    sqft: 4800,
    yearBuilt: 2021,
    image: HIGHLAND_HERO,
    gallery: [HIGHLAND_HERO, LIVING_ROOM_GLASS, MARBLE_KITCHEN, BEDROOM_SUITE, SPA_BATHROOM],
    badge: "Just Listed",
    lat: 34.0901,
    lng: -118.4065,
    status: "For Sale",
    propertyType: "House",
    description: [
      "Perched above the city with sweeping twilight views, this modern hillside villa pairs floor-to-ceiling glass with clean architectural lines. The zero-edge infinity pool anchors an entertainer's terrace that flows directly from the open-concept living and dining spaces.",
      "Inside, soaring ceilings and warm wide-plank oak floors frame a chef's kitchen with a marble waterfall island. The primary suite occupies its own wing, complete with a spa-inspired bath and a private view deck.",
    ],
    features: [
      {
        icon: "kitchen",
        label: "Appliances",
        items: ["Built-in Refrigerator", "Six-Burner Range", "Wine Cooler"],
      },
      {
        icon: "ac_unit",
        label: "Cooling & Heating",
        items: ["Central Air", "Zoned Climate Control", "Radiant Floor Heating"],
      },
      {
        icon: "directions_car",
        label: "Parking",
        items: ["3-Car Attached Garage", "EV Charging Station"],
      },
    ],
    agentId: AGENT_ID,
  },
  {
    id: "west-paces-ferry",
    price: 2895000,
    address: "883 West Paces Ferry Rd",
    city: "Atlanta",
    state: "GA",
    zip: "30327",
    beds: 5,
    baths: 4,
    sqft: 5200,
    yearBuilt: 2018,
    image: WEST_PACES_HERO,
    gallery: [WEST_PACES_HERO, HIGHLAND_HERO, MARBLE_KITCHEN, BEDROOM_SUITE, SPA_BATHROOM],
    lat: 33.8484,
    lng: -84.3877,
    status: "For Sale",
    propertyType: "House",
    description: [
      "A bright, sunlit interior anchors this Buckhead estate, where double-height ceilings and a wall of windows frame views of the lushly landscaped grounds. Minimalist designer finishes in neutral tones keep the sprawling floor plan feeling calm and current.",
      "The main level opens to a covered outdoor living room and summer kitchen, ideal for Atlanta's long entertaining season. Upstairs, five generous bedrooms include a primary suite with a private balcony overlooking the gardens.",
    ],
    features: [
      {
        icon: "kitchen",
        label: "Appliances",
        items: ["Built-in Refrigerator", "Double Oven", "Wine Cooler"],
      },
      {
        icon: "ac_unit",
        label: "Cooling & Heating",
        items: ["Central Air", "Zoned Climate Control"],
      },
      {
        icon: "directions_car",
        label: "Parking",
        items: ["2-Car Attached Garage", "Circular Drive"],
      },
    ],
    agentId: AGENT_ID,
  },
  {
    id: "14th-st-4b",
    price: 1750000,
    address: "400 S 14th St, Unit 4B",
    city: "New York",
    state: "NY",
    zip: "10011",
    beds: 2,
    baths: 2.5,
    sqft: 1850,
    yearBuilt: 2016,
    image: FOURTEENTH_ST_HERO,
    gallery: [FOURTEENTH_ST_HERO, LIVING_ROOM_GLASS, MARBLE_KITCHEN, BEDROOM_SUITE, SPA_BATHROOM],
    lat: 40.7343,
    lng: -73.9928,
    status: "For Sale",
    propertyType: "Condo",
    description: [
      "A sleek, contemporary residence in a full-amenity building defined by extensive glass and minimalist black steel framing. Unit 4B enjoys a landscaped terrace view and an open living and dining layout bathed in natural light.",
      "The chef's kitchen features stone counters and integrated appliances, while both bedrooms include en-suite baths and custom closets. A rare combination of scale and light for downtown living.",
    ],
    features: [
      {
        icon: "apartment",
        label: "Building Amenities",
        items: ["24-Hour Doorman", "Fitness Center", "Rooftop Terrace"],
      },
      {
        icon: "local_laundry_service",
        label: "In-Unit",
        items: ["Washer / Dryer", "Central Air"],
      },
      {
        icon: "directions_car",
        label: "Parking",
        items: ["Valet Garage Available"],
      },
    ],
    agentId: AGENT_ID,
  },
  {
    id: "kerry-park-heights",
    price: 3150000,
    address: "12 Space Needle Way",
    city: "Seattle",
    state: "WA",
    zip: "98109",
    beds: 4,
    baths: 3.5,
    sqft: 3600,
    yearBuilt: 2019,
    image: KERRY_PARK_HERO,
    gallery: [KERRY_PARK_HERO, LIVING_ROOM_GLASS, MARBLE_KITCHEN, BEDROOM_SUITE, SPA_BATHROOM],
    badge: "Just Listed",
    lat: 47.6231,
    lng: -122.3598,
    status: "For Sale",
    propertyType: "House",
    description: [
      "Perched on the slope above Kerry Park, this hillside home was built to make the most of its skyline outlook, with a wall of west-facing glass framing the water and the city beyond. A stone-clad exterior and deep eaves give it a quiet, grounded presence against the terrain.",
      "Inside, wide-plank white oak floors and a double-height great room carry the view through the main living space. The kitchen anchors the open plan with a waterfall island, while the primary suite occupies the top floor with its own private view deck.",
    ],
    features: [
      {
        icon: "kitchen",
        label: "Appliances",
        items: ["Built-in Refrigerator", "Six-Burner Range", "Wine Cooler"],
      },
      {
        icon: "ac_unit",
        label: "Cooling & Heating",
        items: ["Central Air", "Zoned Climate Control", "Radiant Floor Heating"],
      },
      {
        icon: "directions_car",
        label: "Parking",
        items: ["2-Car Attached Garage", "EV Charging Station"],
      },
    ],
    agentId: MARCUS_AGENT_ID,
  },
  {
    id: "millennium-park-collection",
    price: 1950000,
    address: "8 Millennium Park Blvd, Unit 32C",
    city: "Chicago",
    state: "IL",
    zip: "60601",
    beds: 3,
    baths: 3,
    sqft: 2400,
    yearBuilt: 2020,
    image: MILLENNIUM_PARK_HERO,
    gallery: [MILLENNIUM_PARK_HERO, LIVING_ROOM_GLASS, MARBLE_KITCHEN, BEDROOM_SUITE, SPA_BATHROOM],
    lat: 41.8853,
    lng: -87.6216,
    status: "For Sale",
    propertyType: "Condo",
    description: [
      "A full-floor corner residence in a glass tower overlooking the park, with floor-to-ceiling windows wrapping two exposures and framing the skyline from every room. The building's minimalist facade carries through to the interior's clean architectural lines.",
      "The open kitchen and living area are built for entertaining, with a private terrace off the great room. Two additional bedrooms and a dedicated home office round out a layout designed for full-time downtown living.",
    ],
    features: [
      {
        icon: "apartment",
        label: "Building Amenities",
        items: ["24-Hour Doorman", "Fitness Center", "Rooftop Terrace"],
      },
      {
        icon: "local_laundry_service",
        label: "In-Unit",
        items: ["Washer / Dryer", "Central Air"],
      },
      {
        icon: "directions_car",
        label: "Parking",
        items: ["Valet Garage Available"],
      },
    ],
    agentId: MARCUS_AGENT_ID,
  },
  {
    id: "freedom-trail-row",
    price: 2450000,
    address: "3 Freedom Trail Row",
    city: "Boston",
    state: "MA",
    zip: "02108",
    beds: 3,
    baths: 2.5,
    sqft: 2200,
    yearBuilt: 1890,
    image: FREEDOM_TRAIL_HERO,
    gallery: [FREEDOM_TRAIL_HERO, LIVING_ROOM_GLASS, MARBLE_KITCHEN, BEDROOM_SUITE, SPA_BATHROOM],
    lat: 42.3562,
    lng: -71.0636,
    status: "For Sale",
    propertyType: "Townhouse",
    description: [
      "A meticulously restored townhouse steps from the Common, with a brick facade and period detailing preserved alongside a full modern renovation. Tall windows and original moldings carry through rooms that now flow far more openly than their 1890s layout once allowed.",
      "The kitchen and living level opens onto a private garden terrace, rare for the block. Upstairs, three bedrooms include a primary suite with a marble bath, and the finished lower level adds a media room and wine storage.",
    ],
    features: [
      {
        icon: "kitchen",
        label: "Appliances",
        items: ["Built-in Refrigerator", "Double Oven", "Wine Cooler"],
      },
      {
        icon: "ac_unit",
        label: "Cooling & Heating",
        items: ["Central Air", "Zoned Climate Control"],
      },
      {
        icon: "deck",
        label: "Outdoor",
        items: ["Private Garden Terrace", "Restored Brick Facade"],
      },
    ],
    agentId: MARCUS_AGENT_ID,
  },
];

export const seedAgents: Agent[] = [
  {
    id: AGENT_ID,
    email: "agent@luxearch.demo",
    name: "Sarah Jenkins",
    title: "Senior Luxury Broker",
    rating: 5.0,
    reviews: 42,
    photo:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuD0QJafV1pZ_lUAeI5yIX6VTh9eu47TG8dvkE5KjYh0esr_gj3S71aRWGXRPbS_33wrFw9VzcEjpwcoVe4IJil74OBGXMOQl2DRwzyVuqK82H4OOVvmpZOIW_aH6VkmIIfJVYdD-DRxfvXtTEcikeSSkijLrunhm3-jWVYz3TzmVjlALFd8YK0ebhUVVeIHxUlzMWeAUhEg2uKAtPYTdkH2TTnZF1zPCEu_lfTkZ0n5vUdupEMIhasZ",
    portrait:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDPBfJSXW9eVtzzUDrWrtWFvZ8V8NEWKRfEfMcCTz2QfU3fCQl5NU01aoSSCw7NVZ1PqRLsiBwAfG3r-byleSwBjoJb3BL6nIVvlXE6wmt38Qtnqj85DA6h0m8JJutHstImMytzEWsKDjMR7JIOrm0wZepBnqduGWIiYE8gujag5SCJhmVrl7zDjraQqIuBG2O3IPdC0pCMtR7-3h4MgtTgOYjgaN9pZUdkOraO9OYSy_UnHwN_nOsO",
    bio: [
      "With over a decade guiding discerning buyers and sellers through the upper end of the market, Sarah specializes in architecturally distinctive estates and turnkey new construction. Her clients value her direct, detail-obsessed approach to every transaction, from first showing to final walkthrough.",
      "Licensed across California, Georgia, and New York, Sarah works with a small, dedicated roster of clients relocating between coasts, offering white-glove service and deep local market knowledge in each city she serves.",
    ],
    stats: [
      { label: "Years Exp.", value: "12+" },
      { label: "Total Sales", value: "$1.4B" },
      { label: "Coverage", value: "National" },
    ],
  },
  {
    id: MARCUS_AGENT_ID,
    email: "marcus@luxearch.demo",
    name: "Marcus Chen",
    title: "Urban & Waterfront Property Specialist",
    rating: 4.9,
    reviews: 31,
    photo:
      "https://images.unsplash.com/photo-1651684215020-f7a5b6610f23?auto=format&fit=crop&w=1200&h=1200&q=80",
    portrait:
      "https://images.unsplash.com/photo-1651684215020-f7a5b6610f23?auto=format&fit=crop&w=1200&h=1600&q=80",
    bio: [
      "Marcus focuses on the urban core — downtown high-rises, waterfront condos, and the historic rowhouses just beyond it. He spends as much time tracking building reserve funds and HOA boards as he does square footage, which keeps his clients out of deals that look good on a floor plan and fall apart in due diligence.",
      "Based in Seattle and active across Chicago and Boston, Marcus works with buyers who want city living without giving up long-term value, and with owners ready to sell into a market he watches block by block.",
    ],
    stats: [
      { label: "Years Exp.", value: "8+" },
      { label: "Total Sales", value: "$620M" },
      { label: "Coverage", value: "Regional" },
    ],
  },
];
