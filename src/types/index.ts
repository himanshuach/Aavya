export interface Product {
  id: string;
  name: string;
  edition: string;
  subtitle: string;
  price: number;
  abv: string;
  volume: string;
  rating: number;
  reviewsCount: number;
  badge?: string;
  image: string;
  description: string;
  botanicals: string[];
  tastingNotes: {
    nose: string;
    palate: string;
    finish: string;
  };
  signatureServe: string;
  inStock: boolean;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category?: string;
}

export interface JournalArticle {
  id: string;
  title: string;
  category: string;
  readTime: string;
  date: string;
  excerpt: string;
  image: string;
}

export interface ProcessStep {
  step: string;
  title: string;
  subtitle: string;
  description: string;
  botanicalsIncluded: string[];
}

export interface PressReview {
  id: string;
  quote: string;
  outlet: string;
  author: string;
  ratingText: string;
}
