import type { Metadata } from "next";
import { Cormorant_Garamond, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://aavya-water.com"),
  title: "AAVYA | Pure by Nature — Packaged Drinking Water & Custom Bottles",
  description:
    "AAVYA under DPB Beverages offers premium packaged drinking water and requirement-based customized water bottles for hotels, restaurants, cafés, and corporate events in Patna, Bihar.",
  keywords: [
    "AAVYA",
    "Pure by Nature",
    "DPB Beverages",
    "packaged drinking water",
    "customized water bottles",
    "Patna Bihar",
    "hotel water bottle branding",
    "restaurant water branding",
  ],
  openGraph: {
    title: "AAVYA | Pure by Nature",
    description: "Premium packaged drinking water and requirement-based customized bottles.",
    images: ["/images/1L_dual.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${jakarta.variable}`}>
      <body className="font-sans antialiased bg-cream-50 text-stone-900 selection:bg-forest-900 selection:text-cream-50">
        {children}
      </body>
    </html>
  );
}
