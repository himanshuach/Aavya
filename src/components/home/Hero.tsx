"use client";

import React from "react";
import Image from "next/image";
import { assets } from "@/data/assets";
import { brandData } from "@/data/brand";
import { ArrowRight, Sparkles } from "lucide-react";

export function Hero() {
  return (
    <section className="relative pt-10 pb-16 md:pt-16 md:pb-24 overflow-hidden bg-cream-50">
      {/* Background Atmosphere */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-forest-900/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-gold-400/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* HeroCopy */}
          <div className="lg:col-span-6 space-y-6 sm:space-y-8 z-10">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cream-200/80 border border-cream-300 text-forest-900 text-xs tracking-[0.2em] uppercase font-medium">
              <Sparkles className="w-3.5 h-3.5 text-gold-600" />
              <span>{brandData.hero.eyebrow}</span>
            </div>

            {/* Headline & BrandLine */}
            <div className="space-y-2">
              <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl font-light tracking-tight text-forest-950 leading-[1.08]">
                {brandData.hero.headline} <br />
                <span className="italic font-normal text-forest-900">
                  {brandData.hero.brandLine}
                </span>
              </h1>
            </div>

            {/* Description */}
            <p className="text-stone-600 text-base sm:text-lg leading-relaxed max-w-xl font-light">
              {brandData.hero.description}
            </p>

            {/* HeroActions */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#quote"
                className="px-8 py-4 bg-forest-900 text-cream-50 text-xs uppercase tracking-widest font-semibold hover:bg-forest-800 transition-all flex items-center gap-3 shadow-md hover:shadow-lg group border border-forest-900"
              >
                <span>{brandData.hero.primaryCta}</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>

              <a
                href="#products"
                className="px-8 py-4 text-xs uppercase tracking-widest font-semibold text-forest-950 hover:text-forest-800 transition-colors flex items-center gap-2 border border-cream-300 hover:border-forest-900 bg-white/70 backdrop-blur-xs"
              >
                <span>{brandData.hero.secondaryCta}</span>
              </a>
            </div>

            {/* HeroMeta */}
            <div className="pt-6 border-t border-cream-200/80 grid grid-cols-3 gap-6 max-w-lg">
              <div>
                <span className="block font-serif text-2xl font-bold text-forest-950">250ml — 2L</span>
                <span className="text-[11px] uppercase tracking-wider text-stone-500 font-medium">
                  Sculpted Formats
                </span>
              </div>
              <div>
                <span className="block font-serif text-2xl font-bold text-forest-950">100%</span>
                <span className="text-[11px] uppercase tracking-wider text-stone-500 font-medium">
                  Customizable Label
                </span>
              </div>
              <div>
                <span className="block font-serif text-2xl font-bold text-forest-950">Patna</span>
                <span className="text-[11px] uppercase tracking-wider text-stone-500 font-medium">
                  DPB Beverages
                </span>
              </div>
            </div>
          </div>

          {/* HeroVisual */}
          <div className="lg:col-span-6 relative flex justify-center items-center">
            {/* Ambient Backlight */}
            <div className="absolute w-72 h-72 sm:w-96 sm:h-96 bg-emerald-600/10 rounded-full filter blur-3xl pointer-events-none" />

            {/* Bottle Visual Frame */}
            <div className="relative w-full max-w-lg aspect-[4/3] rounded-sm overflow-hidden shadow-2xl border border-cream-300/80 bg-gradient-to-b from-white via-cream-100/50 to-cream-200/50 flex items-center justify-center p-6 group">
              <div className="relative w-full h-full">
                <Image
                  src={assets.bottle1LDual}
                  alt="AAVYA Premium Drinking Water Bottles"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-contain transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </div>

            {/* Editorial Floating Panel matching Main.png */}
            <div className="absolute -bottom-6 right-4 sm:right-8 bg-white/95 backdrop-blur-md p-4 sm:p-5 rounded-sm shadow-xl border border-cream-200 max-w-[260px] sm:max-w-xs z-20">
              <div className="flex items-center gap-2 mb-1.5">
                <span className="text-[10px] uppercase tracking-widest font-bold text-forest-900 bg-cream-100 px-2 py-0.5 border border-cream-300">
                  Signature Pair
                </span>
                <span className="text-xs font-semibold text-stone-600">AAVYA 1L</span>
              </div>

              <h4 className="font-serif text-base font-semibold text-forest-950 leading-tight">
                Designed for Hospitality
              </h4>
              <p className="text-[11px] text-stone-500 mt-1">
                Refined clarity and ergonomic silhouette tailored for premier dining tables.
              </p>

              <div className="mt-3 pt-2 border-t border-cream-200 flex items-center justify-between text-xs">
                <span className="font-semibold text-forest-900">Custom Branding Available</span>
                <a href="#customisation" className="text-stone-500 hover:text-forest-950 uppercase tracking-wider text-[10px] font-bold">
                  Details →
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
