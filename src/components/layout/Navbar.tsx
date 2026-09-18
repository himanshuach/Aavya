"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useCart } from "@/context/CartContext";
import { ShoppingBag, Menu, X, Globe, ChevronDown, Compass } from "lucide-react";

export function Navbar() {
  const { totalItems, setIsCartOpen } = useCart();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currency, setCurrency] = useState("USD");
  const [currencyOpen, setCurrencyOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Philosophy", href: "#philosophy" },
    { name: "Collection", href: "#collection" },
    { name: "Alchemy & Craft", href: "#heritage" },
    { name: "The Experience", href: "#experience" },
    { name: "Process", href: "#process" },
    { name: "Journal", href: "#journal" },
    { name: "Concierge", href: "#concierge" },
  ];

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-300 ${
        isScrolled
          ? "bg-cream-50/90 backdrop-blur-md shadow-sm border-b border-cream-200/80 py-3"
          : "bg-cream-50/70 backdrop-blur-sm border-b border-cream-200/40 py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="/" className="group flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-full border border-forest-900 flex items-center justify-center text-forest-900 group-hover:bg-forest-900 group-hover:text-cream-50 transition-colors duration-300">
            <Compass className="w-4 h-4 transition-transform group-hover:rotate-45 duration-500" />
          </div>
          <div className="flex flex-col">
            <span className="font-serif text-2xl sm:text-3xl tracking-[0.2em] font-semibold text-forest-950 uppercase leading-none">
              AAVYA
            </span>
            <span className="text-[9px] uppercase tracking-[0.3em] text-stone-500 font-medium">
              Pure Botanical Gin
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center space-x-7">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-xs uppercase tracking-widest text-stone-700 hover:text-forest-900 font-medium transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-forest-900 hover:after:w-full after:transition-all after:duration-300"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-3 sm:gap-4">
          {/* Currency Switcher */}
          <div className="relative hidden sm:block">
            <button
              onClick={() => setCurrencyOpen(!currencyOpen)}
              className="flex items-center gap-1 text-[11px] font-medium tracking-wider uppercase text-stone-600 hover:text-forest-900 py-1.5 px-2 rounded border border-cream-300 hover:border-forest-900 transition-colors"
            >
              <Globe className="w-3 h-3 text-stone-500" />
              <span>{currency}</span>
              <ChevronDown className="w-3 h-3" />
            </button>

            {currencyOpen && (
              <div className="absolute right-0 mt-1 w-20 bg-white border border-cream-200 rounded shadow-lg py-1 z-50 text-xs">
                {["USD", "EUR", "GBP"].map((curr) => (
                  <button
                    key={curr}
                    onClick={() => {
                      setCurrency(curr);
                      setCurrencyOpen(false);
                    }}
                    className={`block w-full text-left px-3 py-1 hover:bg-cream-100 ${
                      currency === curr ? "font-bold text-forest-900" : "text-stone-700"
                    }`}
                  >
                    {curr}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Cart Trigger */}
          <button
            onClick={() => setIsCartOpen(true)}
            className="relative flex items-center gap-2 p-2 text-forest-900 hover:text-forest-700 transition-colors"
            aria-label="View shopping bag"
          >
            <div className="relative">
              <ShoppingBag className="w-5 h-5 stroke-[1.5]" />
              {totalItems > 0 && (
                <span className="absolute -top-1.5 -right-1.5 bg-forest-900 text-cream-50 text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center shadow">
                  {totalItems}
                </span>
              )}
            </div>
            <span className="hidden md:inline text-xs uppercase tracking-wider font-medium text-stone-800">
              Bag ({totalItems})
            </span>
          </button>

          {/* Reserve CTA */}
          <a
            href="#concierge"
            className="hidden sm:inline-flex items-center justify-center px-4 py-2 text-xs uppercase tracking-widest font-medium bg-forest-900 text-cream-50 hover:bg-forest-800 hover:shadow-md transition-all duration-200 border border-forest-900"
          >
            Reserve Bottle
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-forest-950 focus:outline-none"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-cream-50 border-b border-cream-200 px-6 py-8 animate-fadeIn">
          <nav className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="font-serif text-xl text-forest-950 hover:text-forest-700 transition-colors border-b border-cream-200/60 pb-2"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-4 flex flex-col gap-3">
              <a
                href="#concierge"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center py-3 text-xs uppercase tracking-widest font-semibold bg-forest-900 text-cream-50"
              >
                Reserve Bottle
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
