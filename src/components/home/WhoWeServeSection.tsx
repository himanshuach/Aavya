"use client";

import React from "react";
import Image from "next/image";
import { PRIMARY_AUDIENCES, SECONDARY_AUDIENCES } from "@/data/audiences";
import { ArrowRight, Building2, Calendar, Megaphone } from "lucide-react";

export function WhoWeServeSection() {
  const secondaryIcons = [Building2, Calendar, Megaphone];

  return (
    <section className="py-20 md:py-32 bg-cream-100/70 border-t border-cream-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Intro */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 pb-6 border-b border-cream-200">
          <div>
            <span className="text-[11px] uppercase tracking-[0.25em] font-semibold text-stone-500 block mb-2">
              Audience & Sectors
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-forest-950">
              Who We <span className="italic font-normal">Serve.</span>
            </h2>
          </div>
          <p className="mt-4 md:mt-0 text-stone-600 text-xs sm:text-sm max-w-md font-light leading-relaxed">
            From premier dining venues to corporate conferences across Patna and Bihar, our bottles
            seamlessly blend aesthetic refinement with everyday utility.
          </p>
        </div>

        {/* Primary Audience Grid: Visually Dominant (3 Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {PRIMARY_AUDIENCES.map((audience) => (
            <div
              key={audience.id}
              className="group bg-white rounded-sm overflow-hidden border border-cream-200 hover:border-cream-300 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-cream-100">
                  <Image
                    src={audience.image}
                    alt={audience.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-forest-950/60 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-4 text-white text-xs font-semibold uppercase tracking-wider">
                    {audience.subtitle}
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="font-serif text-2xl font-semibold text-forest-950 mb-2 group-hover:text-forest-800 transition-colors">
                    {audience.title}
                  </h3>
                  <p className="text-sm text-stone-600 font-light leading-relaxed">
                    {audience.copy}
                  </p>
                </div>
              </div>

              <div className="px-6 pb-6 pt-2">
                <a
                  href="#quote"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-forest-900 group-hover:text-forest-700 transition-colors"
                >
                  <span>Inquire for Venue Supply</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Secondary Audience Row (Corporate, Events, Promotional) */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8 border-t border-cream-200">
          {SECONDARY_AUDIENCES.map((item, idx) => {
            const Icon = secondaryIcons[idx] || Building2;
            return (
              <div
                key={item.id}
                className="p-6 bg-white/80 rounded-sm border border-cream-200/80 hover:bg-white transition-colors flex items-start gap-4"
              >
                <div className="w-10 h-10 rounded-sm bg-cream-100 flex items-center justify-center text-forest-900 flex-shrink-0 border border-cream-200">
                  <Icon className="w-5 h-5 stroke-[1.5]" />
                </div>
                <div>
                  <h4 className="font-serif text-lg font-semibold text-forest-950 mb-1">
                    {item.title}
                  </h4>
                  <p className="text-xs text-stone-600 font-light leading-relaxed">
                    {item.copy}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
