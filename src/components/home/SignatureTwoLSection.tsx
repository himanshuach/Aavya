"use client";

import React from "react";
import Image from "next/image";
import { TWO_L_SIGNATURE } from "@/data/products";
import { ArrowRight, Check } from "lucide-react";

export function SignatureTwoLSection() {
  return (
    <section className="py-20 md:py-32 bg-cream-100/70 border-t border-cream-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* TwoLVisual: Image must dominate the composition */}
          <div className="lg:col-span-6 relative flex justify-center items-center">
            {/* Ambient backlight */}
            <div className="absolute w-80 h-80 sm:w-96 sm:h-96 bg-forest-900/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative w-full max-w-md aspect-[3/4] sm:aspect-[4/5] bg-white rounded-sm overflow-hidden shadow-2xl border border-cream-200 p-8 flex items-center justify-center group">
              <div className="relative w-full h-full">
                <Image
                  src={TWO_L_SIGNATURE.image}
                  alt={TWO_L_SIGNATURE.name}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-contain transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              {/* Floating Badge */}
              <div className="absolute top-6 left-6 bg-forest-900 text-cream-50 text-[10px] uppercase tracking-widest px-3 py-1 font-semibold rounded-xs shadow">
                Signature 2L Edition
              </div>

              <div className="absolute bottom-6 right-6 bg-white/90 backdrop-blur-xs border border-cream-200 px-4 py-2 text-right rounded-xs">
                <span className="text-[10px] text-stone-500 uppercase tracking-wider block">Standard Price</span>
                <span className="font-serif text-xl font-bold text-forest-950">{TWO_L_SIGNATURE.price}</span>
              </div>
            </div>
          </div>

          {/* TwoLContent */}
          <div className="lg:col-span-6 space-y-6 sm:space-y-8">
            <div className="space-y-3">
              <span className="text-xs uppercase tracking-[0.3em] font-semibold text-stone-500 block">
                {TWO_L_SIGNATURE.eyebrow}
              </span>
              <h2 className="font-serif text-4xl sm:text-5xl font-light text-forest-950 leading-tight">
                {TWO_L_SIGNATURE.heading}
              </h2>
            </div>

            <p className="text-stone-700 text-base sm:text-lg font-light leading-relaxed">
              {TWO_L_SIGNATURE.description}
            </p>

            <p className="text-stone-600 text-sm font-light leading-relaxed">
              {TWO_L_SIGNATURE.hospitalityFocus}
            </p>

            {/* Feature bullets */}
            <div className="space-y-3 pt-2">
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-cream-200 flex items-center justify-center text-forest-900 flex-shrink-0">
                  <Check className="w-3 h-3 stroke-[2.5]" />
                </div>
                <span className="text-xs text-stone-700 font-medium">
                  Sculpted grip contour for effortless tableside pouring
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-cream-200 flex items-center justify-center text-forest-900 flex-shrink-0">
                  <Check className="w-3 h-3 stroke-[2.5]" />
                </div>
                <span className="text-xs text-stone-700 font-medium">
                  Refined green-and-gold label identity that commands attention
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-cream-200 flex items-center justify-center text-forest-900 flex-shrink-0">
                  <Check className="w-3 h-3 stroke-[2.5]" />
                </div>
                <span className="text-xs text-stone-700 font-medium">
                  Bulk crates available directly through DPB Beverages in Patna
                </span>
              </div>
            </div>

            {/* CTA */}
            <div className="pt-4 flex items-center gap-4">
              <a
                href="#quote"
                className="inline-flex items-center gap-3 px-8 py-4 bg-forest-900 text-cream-50 text-xs uppercase tracking-widest font-semibold hover:bg-forest-800 transition-all shadow-md group border border-forest-900"
              >
                <span>Inquire for Hospitality Supply</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
