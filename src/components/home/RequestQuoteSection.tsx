"use client";

import React, { useState } from "react";
import { businessConfig } from "@/data/business";
import { Send, CheckCircle2, Shield, MapPin, Building, Upload } from "lucide-react";

export function RequestQuoteSection() {
  const [formData, setFormData] = useState({
    businessName: "",
    contactName: "",
    phone: "",
    businessType: businessConfig.businessTypes[0],
    bottleFormat: businessConfig.bottleFormats[0],
    approxRequirement: "",
    requirementDetails: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 1000);
  };

  return (
    <section id="quote" className="py-20 md:py-32 bg-cream-100/60 border-t border-cream-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* QuoteIntro (Left Column) */}
          <div className="lg:col-span-5 space-y-6 sm:space-y-8">
            <div className="space-y-3">
              <span className="text-[11px] uppercase tracking-[0.25em] font-semibold text-stone-500 block">
                Direct Partnership Inquiry
              </span>
              <h2 className="font-serif text-4xl sm:text-5xl font-light text-forest-950 leading-tight">
                Ready to put your <br />
                <span className="italic font-normal text-forest-900">
                  brand on the bottle?
                </span>
              </h2>
            </div>

            <p className="text-stone-600 text-sm sm:text-base font-light leading-relaxed">
              Tell us about your business, your preferred bottle format, and what you want your
              bottle to represent. Customization is entirely requirement-based—our Patna team will
              discuss tailored solutions directly with you.
            </p>

            {/* ContactMiniCard */}
            <div className="p-6 bg-white rounded-sm border border-cream-200 shadow-xs space-y-4">
              <div className="flex items-center gap-2 text-forest-900 font-semibold text-xs tracking-wider uppercase">
                <Building className="w-4 h-4 text-gold-600" />
                <span>DPB Beverages</span>
              </div>
              <div className="space-y-2 text-xs text-stone-600 font-light">
                <p className="flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-stone-400" />
                  <span>Market: {businessConfig.market}</span>
                </p>
                <p>
                  Packaged Drinking Water & Requirement-Based Customization.
                </p>
              </div>
            </div>

            {/* Supporting Text */}
            <p className="text-xs text-stone-500 font-light leading-relaxed">
              Every inquiry is reviewed directly by our management team. We do not impose rigid
              packages—we listen to your requirements and build a solution that fits your dining room
              or corporate environment.
            </p>
          </div>

          {/* QuoteFormCard (Right Column) */}
          <div className="lg:col-span-7 bg-white p-8 sm:p-10 rounded-sm border border-cream-200 shadow-xl">
            {submitted ? (
              <div className="py-12 flex flex-col items-center justify-center text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-forest-900 text-gold-400 flex items-center justify-center shadow-lg">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-serif text-3xl font-semibold text-forest-950">
                  Requirement Received
                </h3>
                <p className="text-sm text-stone-600 max-w-md font-light leading-relaxed">
                  Thank you, {formData.contactName || "valued partner"}. Your requirement for{" "}
                  <strong>{formData.businessName}</strong> has been forwarded to DPB Beverages in
                  Patna. We will contact you at <strong>{formData.phone}</strong> promptly.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({
                      businessName: "",
                      contactName: "",
                      phone: "",
                      businessType: businessConfig.businessTypes[0],
                      bottleFormat: businessConfig.bottleFormats[0],
                      approxRequirement: "",
                      requirementDetails: "",
                    });
                  }}
                  className="mt-4 px-6 py-2.5 text-xs uppercase tracking-widest bg-cream-100 hover:bg-cream-200 text-forest-950 font-semibold transition-colors"
                >
                  Submit Another Requirement
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="border-b border-cream-200 pb-4">
                  <h3 className="font-serif text-2xl font-semibold text-forest-950">
                    Request a Quote
                  </h3>
                  <p className="text-xs text-stone-500 font-light mt-1">
                    Please provide your business and bottle requirements.
                  </p>
                </div>

                {/* Business & Contact Name Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] uppercase tracking-wider font-semibold text-stone-700 mb-1.5">
                      Business Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Hotel / Restaurant / Company"
                      value={formData.businessName}
                      onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                      className="w-full px-4 py-2.5 text-xs border border-cream-300 focus:outline-none focus:border-forest-900 bg-cream-50/50"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] uppercase tracking-wider font-semibold text-stone-700 mb-1.5">
                      Contact Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Your Full Name"
                      value={formData.contactName}
                      onChange={(e) => setFormData({ ...formData, contactName: e.target.value })}
                      className="w-full px-4 py-2.5 text-xs border border-cream-300 focus:outline-none focus:border-forest-900 bg-cream-50/50"
                    />
                  </div>
                </div>

                {/* Phone / WhatsApp & Business Type */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] uppercase tracking-wider font-semibold text-stone-700 mb-1.5">
                      Phone / WhatsApp *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-2.5 text-xs border border-cream-300 focus:outline-none focus:border-forest-900 bg-cream-50/50"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] uppercase tracking-wider font-semibold text-stone-700 mb-1.5">
                      Business Type *
                    </label>
                    <select
                      value={formData.businessType}
                      onChange={(e) => setFormData({ ...formData, businessType: e.target.value })}
                      className="w-full px-4 py-2.5 text-xs border border-cream-300 focus:outline-none focus:border-forest-900 bg-cream-50/50"
                    >
                      {businessConfig.businessTypes.map((type) => (
                        <option key={type} value={type}>
                          {type}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Bottle Format & Approximate Requirement */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] uppercase tracking-wider font-semibold text-stone-700 mb-1.5">
                      Preferred Bottle Format *
                    </label>
                    <select
                      value={formData.bottleFormat}
                      onChange={(e) => setFormData({ ...formData, bottleFormat: e.target.value })}
                      className="w-full px-4 py-2.5 text-xs border border-cream-300 focus:outline-none focus:border-forest-900 bg-cream-50/50"
                    >
                      {businessConfig.bottleFormats.map((format) => (
                        <option key={format} value={format}>
                          {format}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-[11px] uppercase tracking-wider font-semibold text-stone-700 mb-1.5">
                      Approximate Requirement
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. 500 bottles/month or event count"
                      value={formData.approxRequirement}
                      onChange={(e) => setFormData({ ...formData, approxRequirement: e.target.value })}
                      className="w-full px-4 py-2.5 text-xs border border-cream-300 focus:outline-none focus:border-forest-900 bg-cream-50/50"
                    />
                  </div>
                </div>

                {/* Requirement Open Textarea */}
                <div>
                  <label className="block text-[11px] uppercase tracking-wider font-semibold text-stone-700 mb-1.5">
                    Tell Us About Your Requirement
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Describe your venue, branding preferences, preferred delivery frequency in Patna, or special requests..."
                    value={formData.requirementDetails}
                    onChange={(e) => setFormData({ ...formData, requirementDetails: e.target.value })}
                    className="w-full px-4 py-2.5 text-xs border border-cream-300 focus:outline-none focus:border-forest-900 bg-cream-50/50 resize-none"
                  />
                </div>

                {/* Optional Logo Upload */}
                <div className="p-4 border border-dashed border-cream-300 rounded-sm bg-cream-50/30 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Upload className="w-4 h-4 text-stone-400" />
                    <div>
                      <span className="text-xs font-medium text-stone-700 block">Upload Logo (Optional)</span>
                      <span className="text-[10px] text-stone-400">PNG, JPG, SVG or PDF for preview</span>
                    </div>
                  </div>
                  <label className="px-3 py-1.5 text-[10px] uppercase tracking-wider font-semibold border border-cream-300 bg-white hover:bg-cream-100 cursor-pointer transition-colors">
                    Choose File
                    <input type="file" className="hidden" accept=".png,.jpg,.jpeg,.svg,.pdf" />
                  </label>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 bg-forest-900 hover:bg-forest-800 text-cream-50 text-xs uppercase tracking-widest font-semibold transition-all shadow-md flex items-center justify-center gap-2 disabled:opacity-75"
                >
                  {isSubmitting ? (
                    <span>Submitting Requirement...</span>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Request a Quote</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
