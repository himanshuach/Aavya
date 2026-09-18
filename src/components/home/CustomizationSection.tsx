"use client";

import React from "react";
import Image from "next/image";
import { assets } from "@/data/assets";
import { brandData } from "@/data/brand";
import { Sparkles, ArrowRight, ShieldCheck, Check } from "lucide-react";

export function CustomizationSection() {
  return (
    <section id="customisation" className="py-20 md:py-32 bg-forest-950 text-cream-50 relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-emerald-700/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-gold-400/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* CustomizationCopy */}
          <div className="lg:col-span-6 space-y-6 sm:space-y-8">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-forest-900 border border-forest-800 text-gold-400 text-xs tracking-widest2 uppercase font-semibold">
                <Sparkles className="w-3.5 h-3.5" />
                <span>{brandData.customizationCenterpiece.eyebrow}</span>
              </div>

              <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-light text-cream-50 leading-[1.1]">
                YOUR BRAND. <br />
                <span className="italic font-normal text-gold-400">
                  YOUR BOTTLE.
                </span>
              </h2>
            </div>

            <div className="space-y-3 text-cream-200/90 text-base sm:text-lg font-light leading-relaxed max-w-xl">
              <p>Your bottle doesn&apos;t have to look generic.</p>
              <p className="text-white font-normal">
                Bring your logo. Bring your identity. Create a bottle your customers remember.
              </p>
            </div>

            <p className="text-xs text-cream-300 font-light leading-relaxed max-w-lg">
              We work directly with hotels, luxury restaurants, lounges, and corporate institutions
              to manufacture custom-labeled water bottles tailored to your brand standards. No fixed
              rigid packages—simply tell us what you need.
            </p>

            {/* Customization Key Markers */}
            <div className="space-y-3 pt-2">
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-forest-800 flex items-center justify-center text-gold-400 flex-shrink-0">
                  <Check className="w-3 h-3 stroke-[2.5]" />
                </div>
                <span className="text-xs text-cream-200">
                  Requirement-based volume and delivery directly to your venue
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-forest-800 flex items-center justify-center text-gold-400 flex-shrink-0">
                  <Check className="w-3 h-3 stroke-[2.5]" />
                </div>
                <span className="text-xs text-cream-200">
                  Precision label printing with high-fidelity corporate brand integration
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-forest-800 flex items-center justify-center text-gold-400 flex-shrink-0">
                  <Check className="w-3 h-3 stroke-[2.5]" />
                </div>
                <span className="text-xs text-cream-200">
                  Available in 250 ml, 1 L, and 2 L sculpted formats
                </span>
              </div>
            </div>

            {/* CTA */}
            <div className="pt-4">
              <a
                href="#quote"
                className="inline-flex items-center gap-3 px-8 py-4 bg-gold-500 hover:bg-gold-400 text-forest-950 text-xs uppercase tracking-widest font-semibold transition-all shadow-lg hover:shadow-xl group"
              >
                <span>{brandData.customizationCenterpiece.cta}</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>

          {/* CustomizationVisual: High Contrast Ivory Panels & Bottle Composition */}
          <div className="lg:col-span-6 space-y-4">
            <div className="relative aspect-[4/3] rounded-sm overflow-hidden bg-cream-50 p-8 shadow-2xl border border-cream-200/20 flex items-center justify-center group">
              <div className="relative w-full h-full">
                <Image
                  src={assets.premium1L}
                  alt="Customized AAVYA Bottle Presentation"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-contain transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              {/* Floating Ivory Label Preview Panel */}
              <div className="absolute bottom-4 left-4 right-4 sm:right-auto sm:max-w-xs bg-forest-900/90 backdrop-blur-md p-4 rounded-sm border border-forest-700 shadow-xl text-xs text-cream-200">
                <span className="text-[10px] uppercase tracking-widest text-gold-400 font-bold block mb-1">
                  Custom Co-Branding
                </span>
                <p className="text-[11px] text-cream-100 font-light">
                  Seamlessly embed your hospitality logo and corporate aesthetic on our premium bottles.
                </p>
              </div>
            </div>

            {/* Supporting Micro-Card */}
            <div className="p-4 rounded-sm bg-forest-900/60 border border-forest-800 flex items-center justify-between text-xs text-cream-300">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-gold-400" />
                <span>DPB Beverages Quality Assured</span>
              </div>
              <span className="text-[10px] uppercase tracking-wider text-gold-400 font-semibold">
                Patna, Bihar
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
