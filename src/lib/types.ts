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

export type InquiryIntent = "tour" | "question";
export type InquiryStatus = "new" | "contacted";

export type Inquiry = {
  id: string;
  name: string;
  email: string;
  phone?: string;
  message?: string;
  intent: InquiryIntent;
  propertyId?: string;
  propertyAddress?: string;
  agentId: string;
  status: InquiryStatus;
  createdAt: string;
};

export type NewInquiry = Omit<Inquiry, "id" | "status" | "createdAt">;

export type Agent = {
  id: string;
  // Matches the Better Auth user's email, so a logged-in session can be
  // resolved to the agent record it manages.
  email: string;
  name: string;
  title: string;
  rating: number;
  reviews: number;
  photo: string;
  portrait: string;
  bio: string[];
  stats: AgentStat[];
};
