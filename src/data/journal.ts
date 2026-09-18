import { JournalArticle, PressReview } from "@/types";

export const JOURNAL_ARTICLES: JournalArticle[] = [
  {
    id: "perfect-serve",
    title: "The Architecture of the Perfect Martini: Ice, Ratio & Botanical Oils",
    category: "The Ritual",
    readTime: "4 MIN READ",
    date: "OCTOBER 14, 2025",
    excerpt:
      "Why the temperature of ice, viscosity of spirit, and specific surface area of glassware dictate the sensory release of volatile alpine terpenes.",
    image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "distillation-lab",
    title: "Inside the Copper Laboratory: The Science of Fractionated Distillation",
    category: "Mastery",
    readTime: "6 MIN READ",
    date: "NOVEMBER 02, 2025",
    excerpt:
      "A rare glimpse into how our Master Distiller captures only the golden heart of the distillation run, eliminating harsh foreshots and feints.",
    image: "https://images.unsplash.com/photo-1574096079513-d8259312b785?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "alpine-foraging",
    title: "High Altitude Foraging: Preserving Wild Flora in the Glacial Valleys",
    category: "Provenance",
    readTime: "5 MIN READ",
    date: "DECEMBER 18, 2025",
    excerpt:
      "Partnering with local alpine botanists to ethically harvest mountain juniper and wild angelica without disrupting fragile highland ecosystems.",
    image: "https://images.unsplash.com/photo-1500651230702-0e2d8a49d4ad?auto=format&fit=crop&w=800&q=80",
  },
];

export const PRESS_REVIEWS: PressReview[] = [
  {
    id: "vogue",
    outlet: "VOGUE LIVING",
    author: "Elena Rostova, Culture Editor",
    quote: "The single most refined spirit bottle to grace any private bar this decade. Unrivaled tactile balance.",
    ratingText: "EDITORIAL SELECTION",
  },
  {
    id: "robb-report",
    outlet: "ROBB REPORT",
    author: "Marcus Sterling, Spirits Connoisseur",
    quote: "Sublime texture, crystal clarity, and an unforgettable botanical finish that lingers like fine silk.",
    ratingText: "BEST IN CLASS 2025",
  },
  {
    id: "ft",
    outlet: "FINANCIAL TIMES",
    author: "How To Spend It",
    quote: "A modern triumph of botanical alchemy. Aavya sets a new benchmark for ultra-luxury sipping gins.",
    ratingText: "98/100 GOLD RATING",
  },
  {
    id: "forbes",
    outlet: "FORBES LUXURY",
    author: "Julian Vance",
    quote: "Redefining luxury spirits through carbon-neutral alpine foraging and uncompromising copper craftsmanship.",
    ratingText: "TOP SPIRIT INNOVATION",
  },
];
