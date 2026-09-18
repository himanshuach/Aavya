"use client";

import React from "react";
import Image from "next/image";
import { SIGNATURE_PRODUCTS } from "@/data/products";
import { ArrowRight } from "lucide-react";

export function SignatureCollection() {
  return (
    <section id="products" className="py-16 md:py-28 bg-cream-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Intro */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16 space-y-3">
          <span className="text-[11px] uppercase tracking-[0.25em] font-semibold text-stone-500 block">
            Pure Packaged Drinking Water
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl font-light text-forest-950">
            The Signature <span className="italic font-normal">Collection.</span>
          </h2>
          <p className="text-stone-600 text-sm font-light leading-relaxed">
            Three distinct formats engineered for table presence, everyday refreshment, and
            large-scale hospitality service.
          </p>
        </div>

        {/* 3 Editorial Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10">
          {SIGNATURE_PRODUCTS.map((product) => (
            <div
              key={product.id}
              className="group bg-white rounded-sm border border-cream-200 hover:border-cream-300 shadow-xs hover:shadow-xl transition-all duration-500 flex flex-col justify-between overflow-hidden"
            >
              {/* Large Bottle Image Stage */}
              <div className="relative aspect-[3/4] w-full bg-gradient-to-b from-cream-50 to-cream-100/50 p-8 flex items-center justify-center overflow-hidden">
                <div className="relative w-full h-full">
                  <Image
                    src={product.image}
                    alt={`AAVYA ${product.size} bottle`}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-contain transition-transform duration-700 group-hover:scale-105"
                  />
                </div>

                {/* Small format/category indicator */}
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-xs text-forest-950 text-[10px] tracking-widest uppercase px-3 py-1 font-semibold border border-cream-200">
                  {product.index} • {product.category}
                </div>

                {/* Small price marker */}
                <div className="absolute top-4 right-4 bg-forest-900 text-cream-50 text-xs font-semibold px-2.5 py-1 rounded-xs">
                  {product.price}
                </div>
              </div>

              {/* Editorial Content */}
              <div className="p-6 sm:p-7 flex flex-col justify-between flex-1 space-y-5">
                <div>
                  <div className="flex items-baseline justify-between mb-1">
                    <h3 className="font-serif text-3xl font-semibold text-forest-950 group-hover:text-forest-800 transition-colors">
                      {product.size}
                    </h3>
                    <span className="font-serif text-lg font-bold text-forest-900">
                      {product.price}
                    </span>
                  </div>

                  <p className="text-xs text-stone-600 font-light leading-relaxed mt-2">
                    {product.descriptor}
                  </p>
                </div>

                <div className="pt-4 border-t border-cream-100 flex items-center justify-between">
                  <span className="text-[10px] uppercase tracking-wider text-stone-400 font-medium">
                    Available for Bulk Supply
                  </span>
                  <a
                    href="#quote"
                    className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider font-semibold text-forest-900 group-hover:text-forest-700 transition-colors"
                  >
                    <span>Inquire</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
