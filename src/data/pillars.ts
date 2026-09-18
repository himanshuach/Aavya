export interface Pillar {
  id: string;
  name: string;
  tagline: string;
  description: string;
  index: string;
}

export const PILLARS: Pillar[] = [
  {
    id: "purity",
    name: "PURITY",
    tagline: "Essential Clarity",
    description: "A clean expression of what water should be.",
    index: "01",
  },
  {
    id: "flow",
    name: "FLOW",
    tagline: "Continuous Harmony",
    description: "Natural in movement. Fluid in form.",
    index: "02",
  },
  {
    id: "growth",
    name: "GROWTH",
    tagline: "Shared Evolution",
    description: "A brand designed to grow with the people it serves.",
    index: "03",
  },
  {
    id: "balance",
    name: "BALANCE",
    tagline: "Symmetric Design",
    description: "Where nature, design and everyday use meet.",
    index: "04",
  },
  {
    id: "elevation",
    name: "ELEVATION",
    tagline: "Hospitality Standard",
    description: "Water elevated into a refined experience.",
    index: "05",
  },
];
