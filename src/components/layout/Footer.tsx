"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Compass, Sparkles, Send, Check, ShieldCheck } from "lucide-react";

export function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setTimeout(() => {
        setEmail("");
        setSubscribed(false);
      }, 3500);
    }
  };

  return (
    <footer className="bg-cream-100/90 border-t border-cream-300 pt-16 pb-12 text-stone-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Newsletter VIP Banner matching the dark emerald card in mockup */}
        <div className="bg-forest-950 text-cream-50 p-8 sm:p-12 md:p-14 rounded-sm border border-forest-800 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-700/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-3">
              <div className="inline-flex items-center gap-2 text-gold-400 text-xs uppercase tracking-widest2 font-semibold">
                <Sparkles className="w-3.5 h-3.5" />
                <span>The Connoisseur Circle</span>
              </div>
              <h3 className="font-serif text-3xl sm:text-4xl font-light text-cream-100">
                Join our Inner <span className="italic font-normal text-gold-400">Sanctuary.</span>
              </h3>
              <p className="text-cream-300/80 text-xs sm:text-sm font-light max-w-xl leading-relaxed">
                Members receive priority allocations for limited 500-bottle vintage releases,
                invitations to private European cellar tastings, and seasonal botanical harvest
                reports.
              </p>
            </div>

            <div className="lg:col-span-5">
              {subscribed ? (
                <div className="flex items-center gap-2 p-4 bg-forest-900 border border-forest-800 text-gold-400 text-xs font-semibold uppercase tracking-wider rounded-sm">
                  <Check className="w-4 h-4" />
                  <span>Invitation Confirmed. Welcome to the Circle.</span>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2">
                  <input
                    type="email"
                    required
                    placeholder="Enter your private email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-1 px-4 py-3 text-xs bg-forest-900/80 border border-forest-800 text-cream-100 placeholder-cream-400/60 focus:outline-none focus:border-gold-500 rounded-sm"
                  />
                  <button
                    type="submit"
                    className="px-6 py-3 bg-gold-500 hover:bg-gold-400 text-forest-950 text-xs uppercase tracking-widest font-semibold transition-colors flex items-center justify-center gap-2 rounded-sm shadow-md flex-shrink-0"
                  >
                    <span>Join Circle</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Footer Navigation Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 sm:gap-8 pt-8 border-t border-cream-200">
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="inline-flex items-center gap-2.5">
              <div className="w-7 h-7 rounded-full border border-forest-900 flex items-center justify-center text-forest-900">
                <Compass className="w-3.5 h-3.5" />
              </div>
              <span className="font-serif text-2xl tracking-[0.2em] font-semibold text-forest-950 uppercase">
                AAVYA
              </span>
            </Link>
            <p className="text-xs text-stone-600 font-light leading-relaxed max-w-sm">
              Artisanal botanical gin and barrel-aged spirits distilled seven times in hammered
              copper alembics with 18 hand-foraged alpine flora and glacial spring water.
            </p>
            <div className="flex items-center gap-4 text-stone-500 pt-2">
              <a href="#" className="hover:text-forest-900 transition-colors" aria-label="Instagram">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a href="#" className="hover:text-forest-900 transition-colors" aria-label="X">
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a href="#" className="hover:text-forest-900 transition-colors" aria-label="LinkedIn">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Column: The Collection */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase tracking-[0.2em] font-bold text-forest-950">
              The Collection
            </h4>
            <ul className="space-y-2 text-xs text-stone-600 font-light">
              <li>
                <a href="#collection" className="hover:text-forest-900 transition-colors">
                  01 Flora Nova Botanical
                </a>
              </li>
              <li>
                <a href="#collection" className="hover:text-forest-900 transition-colors">
                  02 Terre Sauvage Reserve
                </a>
              </li>
              <li>
                <a href="#collection" className="hover:text-forest-900 transition-colors">
                  03 Nocturne French Oak
                </a>
              </li>
              <li>
                <a href="#collection" className="hover:text-forest-900 transition-colors">
                  Grand Reserve No. 04
                </a>
              </li>
              <li>
                <a href="#concierge" className="hover:text-forest-900 transition-colors">
                  Private Barrel Commissions
                </a>
              </li>
            </ul>
          </div>

          {/* Column: Craft & Provenance */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase tracking-[0.2em] font-bold text-forest-950">
              Craft & Maison
            </h4>
            <ul className="space-y-2 text-xs text-stone-600 font-light">
              <li>
                <a href="#philosophy" className="hover:text-forest-900 transition-colors">
                  The Five Pillars
                </a>
              </li>
              <li>
                <a href="#heritage" className="hover:text-forest-900 transition-colors">
                  Alpine Foraging & Terroir
                </a>
              </li>
              <li>
                <a href="#process" className="hover:text-forest-900 transition-colors">
                  Copper Pot Alchemy
                </a>
              </li>
              <li>
                <a href="#experience" className="hover:text-forest-900 transition-colors">
                  Cellar Tasting Room
                </a>
              </li>
              <li>
                <a href="#journal" className="hover:text-forest-900 transition-colors">
                  Botanical Chronicle
                </a>
              </li>
            </ul>
          </div>

          {/* Column: Concierge Desk */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase tracking-[0.2em] font-bold text-forest-950">
              Concierge Desk
            </h4>
            <ul className="space-y-2 text-xs text-stone-600 font-light">
              <li>
                <a href="#concierge" className="hover:text-forest-900 transition-colors">
                  Private Reservations
                </a>
              </li>
              <li>
                <a href="#concierge" className="hover:text-forest-900 transition-colors">
                  Corporate Gifting
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-forest-900 transition-colors">
                  Delivery & Transit
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-forest-900 transition-colors">
                  Frequently Asked
                </a>
              </li>
              <li>
                <a href="mailto:concierge@aavya-spirits.com" className="hover:text-forest-900 transition-colors">
                  Direct Sommelier Line
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar & Legal Disclaimer */}
        <div className="pt-8 border-t border-cream-300/80 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] text-stone-500">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-3.5 h-3.5 text-forest-800" />
            <span>
              Please savor responsibly. Strictly for patrons of legal drinking age (21+).
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-6">
            <span>© {new Date().getFullYear()} Aavya Artisanal Spirits SA. All rights reserved.</span>
            <a href="#" className="hover:text-forest-900 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-forest-900 transition-colors">
              Terms of Sale
            </a>
            <a href="#" className="hover:text-forest-900 transition-colors">
              Certificate of Origin
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
