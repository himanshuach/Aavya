"use client";

import React from "react";
import { PILLARS } from "@/data/pillars";
import { Droplet, Waves, Sprout, Scale, Sparkles } from "lucide-react";

export function FivePillarsSection() {
  const iconMap: Record<string, React.ElementType> = {
    purity: Droplet,
    flow: Waves,
    growth: Sprout,
    balance: Scale,
    elevation: Sparkles,
  };

  return (
    <section id="pillars" className="py-16 md:py-24 bg-cream-100/60 border-t border-cream-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Intro */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 pb-6 border-b border-cream-200">
          <div>
            <span className="text-[11px] uppercase tracking-[0.25em] font-semibold text-stone-500 block mb-2">
              Our Core Philosophy
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-forest-950">
              The Five Pillars of <span className="italic font-normal">AAVYA.</span>
            </h2>
          </div>
          <p className="mt-4 md:mt-0 text-stone-600 text-xs sm:text-sm max-w-md font-light leading-relaxed">
            Five foundational principles guiding every drop we bottle and every brand partnership we
            cultivate across Bihar.
          </p>
        </div>

        {/* 5 Refined Editorial Index Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-6">
          {PILLARS.map((pillar) => {
            const Icon = iconMap[pillar.id] || Sparkles;
            return (
              <div
                key={pillar.id}
                className="group relative bg-white p-6 sm:p-7 border border-cream-200 hover:border-cream-300 rounded-sm shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-serif text-2xl font-light text-stone-400 group-hover:text-forest-900 transition-colors">
                      {pillar.index}
                    </span>
                    <div className="w-7 h-7 rounded-sm bg-cream-50 flex items-center justify-center text-stone-600 group-hover:text-forest-900 transition-colors border border-cream-200">
                      <Icon className="w-3.5 h-3.5 stroke-[1.5]" />
                    </div>
                  </div>

                  <span className="text-[10px] uppercase tracking-widest text-gold-600 font-bold block mb-1">
                    {pillar.tagline}
                  </span>
                  <h3 className="font-serif text-xl font-semibold text-forest-950 mb-3 group-hover:text-forest-800 transition-colors">
                    {pillar.name}
                  </h3>
                  <p className="text-xs text-stone-600 leading-relaxed font-light">
                    {pillar.description}
                  </p>
                </div>

                {/* Subtle gold accent indicator */}
                <div className="pt-6 mt-6 border-t border-cream-100 flex items-center justify-between">
                  <span className="text-[9px] uppercase tracking-widest text-stone-400 font-medium">
                    AAVYA Standard
                  </span>
                  <div className="w-1.5 h-1.5 rounded-full bg-gold-400/80 group-hover:bg-forest-900 transition-colors" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
