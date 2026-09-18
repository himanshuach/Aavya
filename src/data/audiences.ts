export interface PrimaryAudience {
  id: string;
  title: string;
  subtitle: string;
  copy: string;
  image: string;
}

export interface SecondaryAudience {
  id: string;
  title: string;
  copy: string;
}

export const PRIMARY_AUDIENCES: PrimaryAudience[] = [
  {
    id: "hotels",
    title: "Hotels & Resorts",
    subtitle: "Hospitality Guest Suites & Banquets",
    copy: "A bottle designed to belong on the table.",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "restaurants",
    title: "Restaurants & Fine Dining",
    subtitle: "Table Service & Signature Presentation",
    copy: "Carry your identity into every dining experience.",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "cafes",
    title: "Cafés & Lounges",
    subtitle: "Curated Countertop & Seating Hydration",
    copy: "A refined brand detail for every table.",
    image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=800&q=80",
  },
];

export const SECONDARY_AUDIENCES: SecondaryAudience[] = [
  {
    id: "corporate",
    title: "Corporate",
    copy: "A polished hydration detail for meetings and teams.",
  },
  {
    id: "events",
    title: "Events",
    copy: "Let every table carry the event identity.",
  },
  {
    id: "promotional",
    title: "Promotional",
    copy: "Turn everyday hydration into a brand opportunity.",
  },
];
