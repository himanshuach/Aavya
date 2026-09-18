"use client";

import React from "react";
import { businessConfig } from "@/data/business";
import { ShieldCheck, MapPin, CheckCircle2 } from "lucide-react";

export function WhyDpbSection() {
  const reasons = [
    {
      num: "01",
      title: "Premium Presentation",
      description: "Distinctive AAVYA bottle designs and consistent branding.",
    },
    {
      num: "02",
      title: "Customized Branding",
      description: "Water bottles customized around your business identity.",
    },
    {
      num: "03",
      title: "Multiple Formats",
      description: "250 ml, 1 L and 2 L options.",
    },
    {
      num: "04",
      title: "Business Supply",
      description: "Suitable for hospitality, offices, events and promotions.",
    },
    {
      num: "05",
      title: "Patna Registered",
      description: "DPB Beverages is registered in Patna.",
    },
  ];

  return (
    <section id="why-us" className="py-20 md:py-32 bg-cream-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* WhyDpbIntro (Left Column) */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <span className="text-[11px] uppercase tracking-[0.25em] font-semibold text-stone-500 block mb-2">
                Regional Purity & Trust
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-forest-950 leading-tight">
                Why DPB <br />
                <span className="italic font-normal text-forest-900">
                  Beverages.
                </span>
              </h2>
            </div>

            <p className="text-stone-600 text-sm font-light leading-relaxed">
              We provide dependable, direct business-to-business bottling and customization for
              hospitality, institutions, and events across Patna and Bihar.
            </p>

            {/* Featured Reason Card */}
            <div className="p-6 bg-white border border-cream-200 rounded-sm shadow-xs space-y-3 mt-8">
              <div className="flex items-center gap-2 text-forest-900 font-semibold text-xs tracking-wider uppercase">
                <MapPin className="w-4 h-4 text-gold-600" />
                <span>Locally Rooted & Registered</span>
              </div>
              <p className="font-serif text-lg font-semibold text-forest-950">
                Registered in {businessConfig.market}
              </p>
              <p className="text-xs text-stone-600 font-light leading-relaxed">
                Direct regional accountability with prompt customer service and localized logistics
                without third-party delays.
              </p>
            </div>
          </div>

          {/* WhyDpbList: Vertical list of 5 reason rows (Right Column) */}
          <div className="lg:col-span-7 space-y-3.5">
            {reasons.map((reason) => (
              <div
                key={reason.num}
                className="p-5 sm:p-6 bg-white rounded-sm border border-cream-200/90 hover:border-cream-300 shadow-xs hover:shadow-md transition-all duration-300 flex items-start gap-4 sm:gap-6 group"
              >
                <span className="font-serif text-2xl font-light text-stone-400 group-hover:text-forest-900 transition-colors w-8 flex-shrink-0">
                  {reason.num}
                </span>

                <div className="flex-1">
                  <h3 className="font-serif text-lg sm:text-xl font-semibold text-forest-950 mb-1 group-hover:text-forest-800 transition-colors">
                    {reason.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-stone-600 font-light leading-relaxed">
                    {reason.description}
                  </p>
                </div>

                <CheckCircle2 className="w-4 h-4 text-stone-300 group-hover:text-forest-900 transition-colors flex-shrink-0 mt-1" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
