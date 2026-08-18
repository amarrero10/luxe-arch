export type AgentStat = {
  label: string;
  value: string;
};

export type Agent = {
  id: string;
  name: string;
  title: string;
  rating: number;
  reviews: number;
  photo: string;
  portrait: string;
  bio: string[];
  stats: AgentStat[];
};

export const agents: Agent[] = [
  {
    id: "sarah-jenkins",
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
];

export function getAgentById(id: string): Agent | undefined {
  return agents.find((agent) => agent.id === id);
}
