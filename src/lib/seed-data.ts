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

// More landmark-adjacent fictional addresses (not real street addresses), spread nationwide.
const MALIBU_HERO =
  "https://images.unsplash.com/photo-1767567467844-ce73778da9ac?auto=format&fit=crop&w=2400&q=80";
const SF_HERO =
  "https://images.unsplash.com/photo-1610478125655-52767177cca9?auto=format&fit=crop&w=2400&q=80";
const TAHOE_HERO =
  "https://images.unsplash.com/photo-1583878594798-c31409c8ab4a?auto=format&fit=crop&w=2400&q=80";
const SAVANNAH_HERO =
  "https://images.unsplash.com/photo-1780348545034-314c72cef2e5?auto=format&fit=crop&w=2400&q=80";
const HAMPTONS_HERO =
  "https://images.unsplash.com/photo-1517541866997-ea18e32ea9e9?auto=format&fit=crop&w=2400&q=80";
const NEW_ORLEANS_HERO =
  "https://images.unsplash.com/photo-1552418844-c3bf1431ea48?auto=format&fit=crop&w=2400&q=80";
const MIAMI_HERO =
  "https://images.unsplash.com/photo-1767884899135-0453e80bfd1d?auto=format&fit=crop&w=2400&q=80";
const CHARLESTON_HERO =
  "https://images.unsplash.com/photo-1623608103477-2b90432a3f85?auto=format&fit=crop&w=2400&q=80";
const SCOTTSDALE_HERO =
  "https://images.unsplash.com/photo-1561065091-4908548ee638?auto=format&fit=crop&w=2400&q=80";
const AUSTIN_HERO =
  "https://images.unsplash.com/photo-1719042894555-93f1a9c9937a?auto=format&fit=crop&w=2400&q=80";
const ASPEN_HERO =
  "https://images.unsplash.com/photo-1475087542963-13ab5e611954?auto=format&fit=crop&w=2400&q=80";
const DENVER_HERO =
  "https://images.unsplash.com/photo-1648441095877-90406e6ba04d?auto=format&fit=crop&w=2400&q=80";
const MINNEAPOLIS_HERO =
  "https://images.unsplash.com/photo-1641217658611-5ffbcde46b61?auto=format&fit=crop&w=2400&q=80";
const DC_HERO =
  "https://images.unsplash.com/photo-1583176689170-990094dcd953?auto=format&fit=crop&w=2400&q=80";
const PHILADELPHIA_HERO =
  "https://images.unsplash.com/photo-1762216454185-71127f1d4a95?auto=format&fit=crop&w=2400&q=80";

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
  {
    id: "point-dume-bluff",
    price: 6200000,
    address: "4 Point Dume Bluff",
    city: "Malibu",
    state: "CA",
    zip: "90265",
    beds: 4,
    baths: 4.5,
    sqft: 4200,
    yearBuilt: 2020,
    image: MALIBU_HERO,
    gallery: [MALIBU_HERO, LIVING_ROOM_GLASS, MARBLE_KITCHEN, BEDROOM_SUITE, SPA_BATHROOM],
    badge: "Just Listed",
    lat: 34.0027,
    lng: -118.8058,
    status: "For Sale",
    propertyType: "House",
    description: [
      "Set on a bluff above the point, this low-slung modern home is built to disappear into the coastline it overlooks. Board-formed concrete and glass walls open the main living space directly onto a wraparound deck with unobstructed ocean views.",
      "The plan favors quiet, deliberate spaces over sheer size — a sunken living room, a kitchen built around a single long stone island, and a primary suite positioned to catch sunrise over the water and sunset over the hills.",
    ],
    features: [
      {
        icon: "kitchen",
        label: "Appliances",
        items: ["Built-in Refrigerator", "Six-Burner Range", "Wine Cooler"],
      },
      {
        icon: "deck",
        label: "Outdoor",
        items: ["Wraparound Ocean-View Deck", "Outdoor Shower"],
      },
      {
        icon: "directions_car",
        label: "Parking",
        items: ["2-Car Garage", "Gated Motor Court"],
      },
    ],
    agentId: AGENT_ID,
  },
  {
    id: "coit-tower-residence",
    price: 2100000,
    address: "6 Coit Tower Lane, Unit 5",
    city: "San Francisco",
    state: "CA",
    zip: "94133",
    beds: 2,
    baths: 2,
    sqft: 1600,
    yearBuilt: 2015,
    image: SF_HERO,
    gallery: [SF_HERO, LIVING_ROOM_GLASS, MARBLE_KITCHEN, BEDROOM_SUITE, SPA_BATHROOM],
    lat: 37.8022,
    lng: -122.4055,
    status: "For Sale",
    propertyType: "Condo",
    description: [
      "A top-floor residence in a boutique North Beach building, with bay windows framing views toward the water and the hills climbing behind the neighborhood's rooftops. Period detailing on the building's facade gives way to a fully updated interior.",
      "The open kitchen and living area are wrapped in natural light, and the primary bedroom includes a walk-in closet and en-suite bath. A rare direct-access parking space is included, uncommon for the neighborhood.",
    ],
    features: [
      {
        icon: "apartment",
        label: "Building Amenities",
        items: ["Secured Entry", "Elevator", "Storage Unit"],
      },
      {
        icon: "local_laundry_service",
        label: "In-Unit",
        items: ["Washer / Dryer", "Central Heat"],
      },
      {
        icon: "directions_car",
        label: "Parking",
        items: ["1 Deeded Parking Space"],
      },
    ],
    agentId: AGENT_ID,
  },
  {
    id: "emerald-bay-cove",
    price: 3400000,
    address: "2 Emerald Bay Cove",
    city: "South Lake Tahoe",
    state: "CA",
    zip: "96150",
    beds: 5,
    baths: 4,
    sqft: 3800,
    yearBuilt: 2017,
    image: TAHOE_HERO,
    gallery: [TAHOE_HERO, LIVING_ROOM_GLASS, MARBLE_KITCHEN, BEDROOM_SUITE, SPA_BATHROOM],
    lat: 38.9583,
    lng: -120.0973,
    status: "For Sale",
    propertyType: "House",
    description: [
      "A timber-and-stone lake house set among pines just above the shoreline, with a great room built around a floor-to-ceiling stone fireplace and windows framing the water below. Wide plank floors and exposed beams carry the mountain-lodge feel throughout.",
      "Five bedrooms sleep the whole family across two levels, with a bunk room built for kids and a lower-level rec room that opens to a lakeside patio. A private dock permit conveys with the sale.",
    ],
    features: [
      {
        icon: "fireplace",
        label: "Interior",
        items: ["Stone Wood-Burning Fireplace", "Vaulted Great Room", "Bunk Room"],
      },
      {
        icon: "ac_unit",
        label: "Cooling & Heating",
        items: ["Radiant Floor Heating", "Zoned Climate Control"],
      },
      {
        icon: "directions_car",
        label: "Parking",
        items: ["2-Car Garage", "Private Dock Permit"],
      },
    ],
    agentId: AGENT_ID,
  },
  {
    id: "forsyth-park-row",
    price: 2750000,
    address: "18 Forsyth Park Row",
    city: "Savannah",
    state: "GA",
    zip: "31401",
    beds: 5,
    baths: 5.5,
    sqft: 5400,
    yearBuilt: 1875,
    image: SAVANNAH_HERO,
    gallery: [SAVANNAH_HERO, LIVING_ROOM_GLASS, MARBLE_KITCHEN, BEDROOM_SUITE, SPA_BATHROOM],
    lat: 32.0702,
    lng: -81.0958,
    status: "For Sale",
    propertyType: "House",
    description: [
      "An 1870s landmark home overlooking the park, restored over three years without sacrificing its original ironwork, heart-pine floors, and 14-foot ceilings. A wraparound iron balcony and mature live oaks frame the facade.",
      "Modern systems and a fully rebuilt kitchen sit behind the historic exterior, alongside a carriage house that's been converted into a guest suite. Formal gardens with a fountain occupy the private rear grounds.",
    ],
    features: [
      {
        icon: "kitchen",
        label: "Appliances",
        items: ["Built-in Refrigerator", "Double Oven", "Butler's Pantry"],
      },
      {
        icon: "ac_unit",
        label: "Cooling & Heating",
        items: ["Central Air", "Zoned Climate Control"],
      },
      {
        icon: "deck",
        label: "Outdoor",
        items: ["Wraparound Iron Balcony", "Carriage House Guest Suite", "Formal Gardens"],
      },
    ],
    agentId: AGENT_ID,
  },
  {
    id: "main-beach-lane",
    price: 4800000,
    address: "9 Main Beach Lane",
    city: "East Hampton",
    state: "NY",
    zip: "11937",
    beds: 5,
    baths: 4.5,
    sqft: 4600,
    yearBuilt: 2016,
    image: HAMPTONS_HERO,
    gallery: [HAMPTONS_HERO, LIVING_ROOM_GLASS, MARBLE_KITCHEN, BEDROOM_SUITE, SPA_BATHROOM],
    badge: "Just Listed",
    lat: 40.9502,
    lng: -72.1869,
    status: "For Sale",
    propertyType: "House",
    description: [
      "A classic shingle-style beach house a short walk from the sand, with wraparound porches on both levels and a turret reading room tucked above the entry. The exterior's traditional profile opens into bright, contemporary interiors.",
      "The kitchen and great room span the width of the house, opening onto a screened porch built for long summer evenings. Five bedrooms include a primary suite with its own private porch overlooking the dunes.",
    ],
    features: [
      {
        icon: "kitchen",
        label: "Appliances",
        items: ["Built-in Refrigerator", "Six-Burner Range", "Wine Cooler"],
      },
      {
        icon: "deck",
        label: "Outdoor",
        items: ["Wraparound Porches", "Screened Porch", "Outdoor Shower"],
      },
      {
        icon: "directions_car",
        label: "Parking",
        items: ["2-Car Detached Garage"],
      },
    ],
    agentId: AGENT_ID,
  },
  {
    id: "jackson-square-alley",
    price: 1150000,
    address: "5 Jackson Square Alley",
    city: "New Orleans",
    state: "LA",
    zip: "70116",
    beds: 3,
    baths: 2.5,
    sqft: 2100,
    yearBuilt: 1910,
    image: NEW_ORLEANS_HERO,
    gallery: [NEW_ORLEANS_HERO, LIVING_ROOM_GLASS, MARBLE_KITCHEN, BEDROOM_SUITE, SPA_BATHROOM],
    lat: 29.9571,
    lng: -90.0626,
    status: "For Sale",
    propertyType: "Townhouse",
    description: [
      "A brightly painted Creole townhouse a few blocks from the Square, with a wrought-iron balcony over the street and original hardwood floors throughout. The narrow shotgun-style footprint opens up room by room toward a private courtyard.",
      "The courtyard is fully tiled and shaded by a mature banana tree, framed by original brick walls. Inside, updated systems sit behind period millwork, with a chef's kitchen added during a recent renovation.",
    ],
    features: [
      {
        icon: "kitchen",
        label: "Appliances",
        items: ["Built-in Refrigerator", "Gas Range"],
      },
      {
        icon: "ac_unit",
        label: "Cooling & Heating",
        items: ["Central Air", "Ceiling Fans Throughout"],
      },
      {
        icon: "deck",
        label: "Outdoor",
        items: ["Private Tiled Courtyard", "Wrought-Iron Balcony"],
      },
    ],
    agentId: AGENT_ID,
  },
  {
    id: "south-pointe-way",
    price: 2650000,
    address: "21 South Pointe Way, Unit 18B",
    city: "Miami Beach",
    state: "FL",
    zip: "33139",
    beds: 3,
    baths: 3,
    sqft: 2200,
    yearBuilt: 2021,
    image: MIAMI_HERO,
    gallery: [MIAMI_HERO, LIVING_ROOM_GLASS, MARBLE_KITCHEN, BEDROOM_SUITE, SPA_BATHROOM],
    badge: "Just Listed",
    lat: 25.7698,
    lng: -80.1325,
    status: "For Sale",
    propertyType: "Condo",
    description: [
      "A high-floor residence in a full-amenity waterfront tower, with wraparound glass framing the marina and open water beyond. Wide-plank oak floors and an all-white palette keep the interior calm against the view.",
      "The kitchen opens fully to the living and dining area, ideal for entertaining before heading down to the building's pool deck. Two guest bedrooms share a bath, while the primary suite has its own private balcony.",
    ],
    features: [
      {
        icon: "apartment",
        label: "Building Amenities",
        items: ["24-Hour Doorman", "Marina & Pool Deck", "Fitness Center"],
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
    id: "battery-promenade",
    price: 2900000,
    address: "14 Battery Promenade",
    city: "Charleston",
    state: "SC",
    zip: "29401",
    beds: 4,
    baths: 3.5,
    sqft: 3100,
    yearBuilt: 1840,
    image: CHARLESTON_HERO,
    gallery: [CHARLESTON_HERO, LIVING_ROOM_GLASS, MARBLE_KITCHEN, BEDROOM_SUITE, SPA_BATHROOM],
    lat: 32.7708,
    lng: -79.9306,
    status: "For Sale",
    propertyType: "Townhouse",
    description: [
      "A single house steps from the water, with the classic Charleston side porch (or 'piazza') running the full depth of the home to catch the harbor breeze. The pastel facade and original ironwork have been carefully preserved through every renovation.",
      "Twelve-foot ceilings and heart-pine floors run throughout the main living levels, with a kitchen rebuilt behind the historic walls. A walled garden off the piazza offers a private outdoor room in the heart of downtown.",
    ],
    features: [
      {
        icon: "kitchen",
        label: "Appliances",
        items: ["Built-in Refrigerator", "Gas Range", "Wine Cooler"],
      },
      {
        icon: "ac_unit",
        label: "Cooling & Heating",
        items: ["Central Air", "Zoned Climate Control"],
      },
      {
        icon: "deck",
        label: "Outdoor",
        items: ["Full-Length Piazza", "Walled Garden"],
      },
    ],
    agentId: AGENT_ID,
  },
  {
    id: "camelback-ridge",
    price: 2450000,
    address: "7 Camelback Ridge",
    city: "Scottsdale",
    state: "AZ",
    zip: "85251",
    beds: 4,
    baths: 3.5,
    sqft: 3900,
    yearBuilt: 2014,
    image: SCOTTSDALE_HERO,
    gallery: [SCOTTSDALE_HERO, LIVING_ROOM_GLASS, MARBLE_KITCHEN, BEDROOM_SUITE, SPA_BATHROOM],
    lat: 33.5298,
    lng: -111.9628,
    status: "For Sale",
    propertyType: "House",
    description: [
      "A desert contemporary set against the mountain, with rammed-earth and stucco walls that read as an extension of the rock formations behind them. Deep overhangs and a stacked-stone entry keep the home cool through the peak summer months.",
      "The great room opens fully to a negative-edge pool and covered patio, framing unobstructed mountain views. Desert landscaping throughout keeps water use low without sacrificing curb appeal.",
    ],
    features: [
      {
        icon: "pool",
        label: "Outdoor",
        items: ["Negative-Edge Pool", "Covered Patio", "Desert Landscaping"],
      },
      {
        icon: "ac_unit",
        label: "Cooling & Heating",
        items: ["Central Air", "Zoned Climate Control"],
      },
      {
        icon: "directions_car",
        label: "Parking",
        items: ["3-Car Garage"],
      },
    ],
    agentId: MARCUS_AGENT_ID,
  },
  {
    id: "zilker-park-trail",
    price: 1375000,
    address: "3 Zilker Park Trail, Unit 12",
    city: "Austin",
    state: "TX",
    zip: "78704",
    beds: 2,
    baths: 2,
    sqft: 1500,
    yearBuilt: 2019,
    image: AUSTIN_HERO,
    gallery: [AUSTIN_HERO, LIVING_ROOM_GLASS, MARBLE_KITCHEN, BEDROOM_SUITE, SPA_BATHROOM],
    lat: 30.2664,
    lng: -97.7724,
    status: "For Sale",
    propertyType: "Condo",
    description: [
      "A high-floor unit in a curved glass tower near the park, with a private balcony framing the downtown skyline and the greenbelt beyond. Polished concrete floors and floor-to-ceiling glass keep the interior open and bright.",
      "The kitchen is finished with quartz counters and integrated appliances, flowing into a living area sized for both quiet nights in and hosting. Building amenities include a rooftop pool deck built for watching the sunset over the hills.",
    ],
    features: [
      {
        icon: "apartment",
        label: "Building Amenities",
        items: ["Rooftop Pool Deck", "Fitness Center", "24-Hour Concierge"],
      },
      {
        icon: "local_laundry_service",
        label: "In-Unit",
        items: ["Washer / Dryer", "Central Air"],
      },
      {
        icon: "directions_car",
        label: "Parking",
        items: ["1 Assigned Garage Space"],
      },
    ],
    agentId: MARCUS_AGENT_ID,
  },
  {
    id: "maroon-bells-way",
    price: 5900000,
    address: "10 Maroon Bells Way",
    city: "Aspen",
    state: "CO",
    zip: "81611",
    beds: 4,
    baths: 4,
    sqft: 3600,
    yearBuilt: 2012,
    image: ASPEN_HERO,
    gallery: [ASPEN_HERO, LIVING_ROOM_GLASS, MARBLE_KITCHEN, BEDROOM_SUITE, SPA_BATHROOM],
    badge: "Just Listed",
    lat: 39.1906,
    lng: -106.8169,
    status: "For Sale",
    propertyType: "House",
    description: [
      "A timber-frame mountain home a short drive from downtown, built into the hillside with peak views from nearly every room. Reclaimed wood and hand-set stone throughout give the interior real weight against the scale of the surrounding peaks.",
      "A ski-tuning room and heated mudroom sit off the entry for easy access to the slopes, while the great room's two-story stone fireplace anchors the main living space. The lower level adds a media room and wine cellar.",
    ],
    features: [
      {
        icon: "downhill_skiing",
        label: "Mountain Living",
        items: ["Heated Mudroom", "Ski-Tuning Room", "Wine Cellar"],
      },
      {
        icon: "fireplace",
        label: "Interior",
        items: ["Two-Story Stone Fireplace", "Media Room"],
      },
      {
        icon: "directions_car",
        label: "Parking",
        items: ["3-Car Heated Garage"],
      },
    ],
    agentId: MARCUS_AGENT_ID,
  },
  {
    id: "city-park-esplanade",
    price: 1650000,
    address: "16 City Park Esplanade, Unit 9",
    city: "Denver",
    state: "CO",
    zip: "80206",
    beds: 2,
    baths: 2.5,
    sqft: 1800,
    yearBuilt: 2018,
    image: DENVER_HERO,
    gallery: [DENVER_HERO, LIVING_ROOM_GLASS, MARBLE_KITCHEN, BEDROOM_SUITE, SPA_BATHROOM],
    lat: 39.7469,
    lng: -104.9486,
    status: "For Sale",
    propertyType: "Condo",
    description: [
      "A corner residence overlooking the park, with a wall of west-facing windows framing the Front Range skyline beyond downtown. An open kitchen and living plan is built for taking in the view from nearly every angle.",
      "The primary suite includes a soaking tub and walk-in closet, while a second bedroom doubles as a home office. A private balcony extends the living space outdoors for most of the year.",
    ],
    features: [
      {
        icon: "apartment",
        label: "Building Amenities",
        items: ["Rooftop Deck", "Fitness Center", "Secured Parking Garage"],
      },
      {
        icon: "local_laundry_service",
        label: "In-Unit",
        items: ["Washer / Dryer", "Central Air"],
      },
      {
        icon: "directions_car",
        label: "Parking",
        items: ["1 Assigned Garage Space"],
      },
    ],
    agentId: MARCUS_AGENT_ID,
  },
  {
    id: "lake-of-the-isles-pkwy",
    price: 975000,
    address: "11 Lake of the Isles Pkwy",
    city: "Minneapolis",
    state: "MN",
    zip: "55405",
    beds: 3,
    baths: 2.5,
    sqft: 2300,
    yearBuilt: 1905,
    image: MINNEAPOLIS_HERO,
    gallery: [MINNEAPOLIS_HERO, LIVING_ROOM_GLASS, MARBLE_KITCHEN, BEDROOM_SUITE, SPA_BATHROOM],
    lat: 44.9574,
    lng: -93.3044,
    status: "For Sale",
    propertyType: "Townhouse",
    description: [
      "A brick rowhouse a block from the lake, with original leaded glass and woodwork preserved through a top-to-bottom mechanical update. Wide front steps and a covered stoop carry the character of the block through to the entry.",
      "The main floor's kitchen was reworked for an open flow into the dining and living rooms, while the upper floor holds three bedrooms including a primary with a renovated bath. A finished lower level adds a family room.",
    ],
    features: [
      {
        icon: "kitchen",
        label: "Appliances",
        items: ["Built-in Refrigerator", "Gas Range"],
      },
      {
        icon: "ac_unit",
        label: "Cooling & Heating",
        items: ["Central Air", "Radiator Heat"],
      },
      {
        icon: "deck",
        label: "Outdoor",
        items: ["Covered Front Stoop", "Fenced Backyard"],
      },
    ],
    agentId: MARCUS_AGENT_ID,
  },
  {
    id: "national-mall-terrace",
    price: 1850000,
    address: "1 National Mall Terrace, Unit 7",
    city: "Washington",
    state: "DC",
    zip: "20003",
    beds: 2,
    baths: 2,
    sqft: 1650,
    yearBuilt: 2017,
    image: DC_HERO,
    gallery: [DC_HERO, LIVING_ROOM_GLASS, MARBLE_KITCHEN, BEDROOM_SUITE, SPA_BATHROOM],
    lat: 38.8891,
    lng: -77.0349,
    status: "For Sale",
    propertyType: "Condo",
    description: [
      "A residence in a boutique Capitol Hill building, with tall windows looking out over tree-lined rowhouse streets toward the dome. Wide-plank floors and exposed brick accents nod to the neighborhood's historic character.",
      "The open kitchen and living area are built for entertaining, and the primary suite includes a walk-in closet and marble bath. A private roof deck is shared among just a handful of units in the building.",
    ],
    features: [
      {
        icon: "apartment",
        label: "Building Amenities",
        items: ["Shared Roof Deck", "Secured Entry", "Bike Storage"],
      },
      {
        icon: "local_laundry_service",
        label: "In-Unit",
        items: ["Washer / Dryer", "Central Air"],
      },
      {
        icon: "directions_car",
        label: "Parking",
        items: ["Street Parking Permit Eligible"],
      },
    ],
    agentId: MARCUS_AGENT_ID,
  },
  {
    id: "rittenhouse-square-row",
    price: 1450000,
    address: "22 Rittenhouse Square Row",
    city: "Philadelphia",
    state: "PA",
    zip: "19103",
    beds: 3,
    baths: 2.5,
    sqft: 2400,
    yearBuilt: 1895,
    image: PHILADELPHIA_HERO,
    gallery: [PHILADELPHIA_HERO, LIVING_ROOM_GLASS, MARBLE_KITCHEN, BEDROOM_SUITE, SPA_BATHROOM],
    lat: 39.9492,
    lng: -75.1715,
    status: "For Sale",
    propertyType: "Townhouse",
    description: [
      "A brownstone a short walk from the square, with a carved stone stoop and bay windows original to the 1890s facade. Restored plasterwork and original hardwood floors run through the main living levels.",
      "The kitchen was fully rebuilt during a recent renovation, opening into a dining room with the home's original fireplace mantel. Three bedrooms occupy the upper floors, with a finished lower level adding a home office.",
    ],
    features: [
      {
        icon: "kitchen",
        label: "Appliances",
        items: ["Built-in Refrigerator", "Gas Range"],
      },
      {
        icon: "ac_unit",
        label: "Cooling & Heating",
        items: ["Central Air", "Radiator Heat"],
      },
      {
        icon: "deck",
        label: "Outdoor",
        items: ["Carved Stone Stoop", "Rear Patio"],
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
      "Licensed across California, Georgia, and New York, and working through a trusted partner network in additional states, Sarah serves a small, dedicated roster of clients relocating between coasts, offering white-glove service and deep local market knowledge in every city she lists in.",
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
      "Based in Seattle and active across a growing list of urban markets nationwide, Marcus works with buyers who want city living without giving up long-term value, and with owners ready to sell into a market he watches block by block.",
    ],
    stats: [
      { label: "Years Exp.", value: "8+" },
      { label: "Total Sales", value: "$620M" },
      { label: "Coverage", value: "National" },
    ],
  },
];
