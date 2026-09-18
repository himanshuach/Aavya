"use client";

import React from "react";
import { CUSTOMIZATION_PROCESS } from "@/data/process";

export function CustomizationProcess() {
  return (
    <section className="py-20 md:py-32 bg-cream-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Intro */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 pb-6 border-b border-cream-200">
          <div>
            <span className="text-[11px] uppercase tracking-[0.25em] font-semibold text-stone-500 block mb-2">
              Bespoke Co-Branding Workflow
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-forest-950">
              How Customisation <span className="italic font-normal">Works.</span>
            </h2>
          </div>
          <p className="mt-4 md:mt-0 text-stone-600 text-xs sm:text-sm max-w-md font-light leading-relaxed">
            A flexible, requirement-led approach designed around your timeline, venue requirements,
            and brand identity.
          </p>
        </div>

        {/* 4 Process Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {CUSTOMIZATION_PROCESS.map((item) => (
            <div
              key={item.step}
              className="group bg-white p-7 rounded-sm border border-cream-200 hover:border-cream-300 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="font-serif text-4xl font-light text-stone-300 group-hover:text-forest-900 transition-colors">
                    {item.step}
                  </span>
                  <div className="w-2 h-2 rounded-full bg-forest-900/20 group-hover:bg-forest-900 transition-colors" />
                </div>

                <h3 className="font-serif text-xl font-semibold text-forest-950 mb-3 group-hover:text-forest-800 transition-colors leading-snug">
                  {item.title}
                </h3>
                <p className="text-xs text-stone-600 font-light leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-cream-100 flex items-center justify-between">
                <span className="text-[9px] uppercase tracking-wider text-stone-400 font-medium">
                  Requirement Based
                </span>
                <span className="text-xs font-semibold text-forest-900">Step {item.step}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
