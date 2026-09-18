import { assets } from "./assets";

export interface SignatureProduct {
  id: string;
  size: string;
  price: string;
  category: string;
  descriptor: string;
  image: string;
  index: string;
}

export const SIGNATURE_PRODUCTS: SignatureProduct[] = [
  {
    id: "250ml",
    size: "250 ml",
    price: "Rs. 5",
    category: "Compact Format",
    descriptor: "Compact format for meetings, events and hospitality.",
    image: assets.bottle250ml,
    index: "01",
  },
  {
    id: "1L",
    size: "1 L",
    price: "Rs. 12",
    category: "Everyday Hydration",
    descriptor: "Premium everyday hydration format.",
    image: assets.bottle1L,
    index: "02",
  },
  {
    id: "2L",
    size: "2 L",
    price: "Rs. 15",
    category: "Hospitality & Group",
    descriptor: "Large format for family, hospitality and group use.",
    image: assets.bottle2L,
    index: "03",
  },
];

export const TWO_L_SIGNATURE = {
  name: "AAVYA 2 L",
  size: "2 L",
  price: "Rs. 15",
  eyebrow: "LARGE FORMAT EXCELLENCE",
  heading: "AAVYA 2L — Signature",
  description:
    "A large-format AAVYA bottle with the brand's premium green-and-gold identity and distinctive sculpted presentation.",
  hospitalityFocus:
    "Engineered specifically for banqueting tables, conference hospitality, and fine dining service where presentation speaks louder than words.",
  image: assets.bottle2L,
};
