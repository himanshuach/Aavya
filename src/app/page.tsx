import React from "react";
import { SiteHeader } from "@/components/site/Header";
import { Hero } from "@/components/home/Hero";
import { FivePillarsSection } from "@/components/home/FivePillarsSection";
import { SignatureCollection } from "@/components/home/SignatureCollection";
import { SignatureTwoLSection } from "@/components/home/SignatureTwoLSection";
import { CustomizationSection } from "@/components/home/CustomizationSection";
import { CustomizationProcess } from "@/components/home/CustomizationProcess";
import { WhoWeServeSection } from "@/components/home/WhoWeServeSection";
import { WhyDpbSection } from "@/components/home/WhyDpbSection";
import { RequestQuoteSection } from "@/components/home/RequestQuoteSection";
import { SiteFooter } from "@/components/site/Footer";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-cream-50 text-stone-900 selection:bg-forest-900 selection:text-cream-50">
      {/* Site Header with Logo, Navigation & CTA */}
      <SiteHeader />

      <main>
        {/* 1. Hero */}
        <Hero />

        {/* 2. The Five Pillars of AAVYA */}
        <FivePillarsSection />

        {/* 3. The Signature Collection */}
        <SignatureCollection />

        {/* 4. AAVYA 2L — Signature */}
        <SignatureTwoLSection />

        {/* 5. YOUR BRAND. YOUR BOTTLE. (Commercial Customization Centerpiece) */}
        <CustomizationSection />

        {/* 6. How Customisation Works */}
        <CustomizationProcess />

        {/* 7. Who We Serve */}
        <WhoWeServeSection />

        {/* 8. Why DPB Beverages */}
        <WhyDpbSection />

        {/* 9. Request a Quote */}
        <RequestQuoteSection />
      </main>

      {/* 10. Contact / Footer */}
      <SiteFooter />
    </div>
  );
}
