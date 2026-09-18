"use client";

import React, { useState } from "react";
import { Sparkles, X } from "lucide-react";

export function AnnouncementBar() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="bg-forest-950 text-cream-200 border-b border-forest-900/60 px-4 py-2 text-xs uppercase tracking-widest text-center relative z-50 flex items-center justify-between">
      <div className="hidden md:flex items-center gap-2 text-gold-400">
        <Sparkles className="w-3.5 h-3.5 animate-pulse" />
        <span className="text-[10px] tracking-widest2">AUTUMN HARVEST BATCH</span>
      </div>

      <div className="mx-auto flex items-center justify-center gap-3 text-[11px] font-medium tracking-widest text-cream-100">
        <span>Complimentary Worldwide Courier On Orders Over $150</span>
        <span className="hidden sm:inline text-gold-400">•</span>
        <span className="hidden sm:inline text-cream-300">Limited Vintage Release No. 04</span>
      </div>

      <div className="flex items-center gap-3">
        <button
          onClick={() => setIsVisible(false)}
          className="text-cream-400 hover:text-white transition-colors p-0.5"
          aria-label="Dismiss announcement"
        >
          <X className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
}
