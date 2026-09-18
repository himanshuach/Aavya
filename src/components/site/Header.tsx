"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { assets } from "@/data/assets";
import { brandData } from "@/data/brand";
import { Menu, X, ArrowRight } from "lucide-react";

export function SiteHeader() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#" },
    { name: "About AAVYA", href: "#pillars" },
    { name: "Products", href: "#products" },
    { name: "Customisation", href: "#customisation" },
    { name: "Why Us", href: "#why-us" },
    { name: "Contact", href: "#quote" },
  ];

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-cream-50/95 backdrop-blur-md shadow-sm border-b border-cream-200 py-3.5"
          : "bg-cream-50/80 backdrop-blur-sm border-b border-cream-200/50 py-4.5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo matching Main.png */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative w-8 h-8 rounded-full overflow-hidden border border-forest-900/30">
            <Image
              src={assets.logo}
              alt="AAVYA Logo"
              fill
              className="object-cover"
            />
          </div>
          <div className="flex flex-col">
            <span className="font-serif text-2xl font-bold tracking-[0.2em] text-forest-950 uppercase leading-none">
              {brandData.name}
            </span>
            <span className="text-[9px] uppercase tracking-[0.3em] text-stone-500 font-medium">
              {brandData.tagline}
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-xs uppercase tracking-widest text-stone-700 hover:text-forest-900 font-medium transition-colors"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Header CTA */}
        <div className="flex items-center gap-3">
          <a
            href="#quote"
            className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 text-xs uppercase tracking-widest font-semibold bg-forest-900 hover:bg-forest-800 text-cream-50 transition-all shadow-sm rounded-xs border border-forest-900"
          >
            <span>Request a Quote</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>

          {/* Mobile menu trigger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 text-forest-950"
            aria-label="Toggle navigation menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="lg:hidden bg-cream-50 border-b border-cream-200 px-6 py-8">
          <nav className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="font-serif text-xl text-forest-950 hover:text-forest-800 transition-colors border-b border-cream-200/50 pb-2"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#quote"
              onClick={() => setMobileOpen(false)}
              className="mt-4 w-full text-center py-3.5 bg-forest-900 text-cream-50 text-xs uppercase tracking-widest font-semibold"
            >
              Request a Quote
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
