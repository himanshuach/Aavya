import Link from "next/link";
import { Compass, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-cream-50 flex flex-col items-center justify-center p-6 text-center text-forest-950">
      <div className="w-16 h-16 rounded-full border border-forest-900/30 flex items-center justify-center mb-6">
        <Compass className="w-8 h-8 text-forest-900" />
      </div>
      <span className="text-xs uppercase tracking-[0.3em] font-semibold text-stone-500 mb-2">
        Error 404 • Vintage Not Found
      </span>
      <h1 className="font-serif text-4xl sm:text-5xl font-light mb-4">
        The Cellar Path has Wandered.
      </h1>
      <p className="text-sm text-stone-600 max-w-md font-light leading-relaxed mb-8">
        The bottle or vintage page you seek may have been archived into our private reserve library
        or retired.
      </p>
      <Link
        href="/"
        className="px-8 py-3.5 bg-forest-900 hover:bg-forest-800 text-cream-50 text-xs uppercase tracking-widest font-semibold transition-all flex items-center gap-2 shadow-md"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>Return to the Collection</span>
      </Link>
    </div>
  );
}
