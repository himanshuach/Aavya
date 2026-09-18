"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { assets } from "@/data/assets";
import { brandData } from "@/data/brand";
import { businessConfig } from "@/data/business";
import { ArrowRight, MapPin } from "lucide-react";

export function SiteFooter() {
  const quickLinks = [
    { name: "Home", href: "#" },
    { name: "About AAVYA", href: "#pillars" },
    { name: "Products", href: "#products" },
    { name: "Customisation", href: "#customisation" },
    { name: "Why Us", href: "#why-us" },
    { name: "Request a Quote", href: "#quote" },
  ];

  return (
    <footer className="bg-cream-100/90 border-t border-cream-300 pt-16 pb-12 text-stone-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Closing Statement Callout matching Main.png */}
        <div className="bg-forest-950 text-cream-50 p-8 sm:p-12 md:p-14 rounded-sm border border-forest-800 shadow-xl flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div className="space-y-2">
            <span className="text-[10px] uppercase tracking-[0.25em] text-gold-400 font-bold block">
              Direct Partnership
            </span>
            <h3 className="font-serif text-3xl sm:text-4xl font-light text-cream-50">
              Let&apos;s build something people remember.
            </h3>
            <p className="text-xs sm:text-sm text-cream-300/80 font-light max-w-xl">
              Elevate your dining tables, meeting suites, and events with AAVYA customized water
              bottles.
            </p>
          </div>

          <a
            href="#quote"
            className="px-8 py-4 bg-gold-500 hover:bg-gold-400 text-forest-950 text-xs uppercase tracking-widest font-semibold transition-all shadow-md flex items-center gap-2 flex-shrink-0"
          >
            <span>Request a Quote</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* Footer Navigation Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-8 pt-6 border-t border-cream-200">
          {/* Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative w-7 h-7 rounded-full overflow-hidden border border-forest-900/30">
                <Image src={assets.logo} alt="AAVYA Logo" fill className="object-cover" />
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-2xl font-bold tracking-[0.2em] text-forest-950 uppercase leading-none">
                  {brandData.name}
                </span>
                <span className="text-[9px] uppercase tracking-[0.3em] text-stone-500 font-medium">
                  {brandData.tagline}
                </span>
              </div>
            </div>

            <p className="text-xs text-stone-600 font-light leading-relaxed max-w-sm">
              Premium packaged drinking water and requirement-based customized water bottles.
            </p>
            <p className="text-xs font-semibold text-forest-900">
              {businessConfig.parentCompany} — {businessConfig.market}
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase tracking-[0.2em] font-bold text-forest-950">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs text-stone-600 font-light">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="hover:text-forest-900 transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Formats */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase tracking-[0.2em] font-bold text-forest-950">
              Signature Formats
            </h4>
            <ul className="space-y-2 text-xs text-stone-600 font-light">
              <li>
                <a href="#products" className="hover:text-forest-900 transition-colors">
                  250 ml — Compact Hospitality
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-forest-900 transition-colors">
                  1 L — Everyday Premium
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-forest-900 transition-colors">
                  2 L — Large Format Table
                </a>
              </li>
              <li>
                <a href="#customisation" className="hover:text-forest-900 transition-colors">
                  Custom Co-Branded Bottles
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Details (Faithful to Rule 33: TBD for unconfirmed values) */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase tracking-[0.2em] font-bold text-forest-950">
              Business Inquiries
            </h4>
            <div className="space-y-2 text-xs text-stone-600 font-light">
              <p className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-forest-900 mt-0.5 flex-shrink-0" />
                <span>DPB Beverages, {businessConfig.market}</span>
              </p>
              <p className="text-[11px] text-stone-500">
                Direct hospitality and corporate requirements discussed on demand.
              </p>
              <div className="pt-2">
                <a
                  href="#quote"
                  className="inline-block text-xs uppercase tracking-wider font-semibold text-forest-900 hover:text-forest-700 underline underline-offset-4"
                >
                  Submit Requirement Form →
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Legal & Copyright */}
        <div className="pt-8 border-t border-cream-300 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-stone-500">
          <span>
            © {new Date().getFullYear()} {brandData.name} ({businessConfig.parentCompany}). All rights reserved.
          </span>
          <span className="text-[10px] uppercase tracking-wider text-stone-400">
            Patna, Bihar • Packaged Drinking Water & Customized Bottling
          </span>
        </div>
      </div>
    </footer>
  );
}
