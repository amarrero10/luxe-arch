export type FeatureCategory = {
  icon: string;
  label: string;
  items: string[];
};

export type Property = {
  id: string;
  price: number;
  address: string;
  city: string;
  state: string;
  zip: string;
  beds: number;
  baths: number;
  sqft: number;
  yearBuilt: number;
  image: string;
  gallery: string[];
  badge?: string;
  lat: number;
  lng: number;
  status: string;
  description: string[];
  features: FeatureCategory[];
  agentId: string;
};

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
