import React, { useState } from 'react';
import { Search, Home, Grid, AlertCircle, ArrowRight } from 'lucide-react';
import { CONVERTERS } from '../data/convertersData';

interface NotFoundPageProps {
  onNavigate: (url: string) => void;
  onOpenSearch: () => void;
}

export const NotFoundPage: React.FC<NotFoundPageProps> = ({ onNavigate, onOpenSearch }) => {
  const [query, setQuery] = useState('');

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;
    const q = query.toLowerCase().trim();
    const match = CONVERTERS.find(
      (c) =>
        c.primaryKeyword.toLowerCase().includes(q) ||
        c.fromUnit.symbol.toLowerCase() === q ||
        c.toUnit.symbol.toLowerCase() === q ||
        c.secondaryKeywords.some((k) => k.toLowerCase().includes(q))
    );
    if (match) {
      onNavigate(match.url);
    } else {
      onOpenSearch();
    }
  };

  return (
    <div className="max-w-2xl mx-auto px-4 py-16 text-center">
      <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xs border border-blue-100">
        <AlertCircle className="w-8 h-8" />
      </div>

      <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-3">
        Page Not Found
      </h1>

      <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-8 max-w-md mx-auto">
        The page you're looking for doesn't exist or may have moved.
      </p>

      {/* Embedded Search (Req 34) */}
      <form onSubmit={handleSearchSubmit} className="max-w-md mx-auto mb-8">
        <div className="relative flex items-center">
          <Search className="absolute left-3.5 w-4 h-4 text-slate-400 pointer-events-none" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search converters (e.g. kg to lb, time)..."
            className="w-full pl-10 pr-20 py-2.5 bg-white border border-slate-300 focus:border-blue-600 rounded-lg text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-100 shadow-2xs"
          />
          <button
            type="submit"
            className="absolute right-1.5 top-1/2 -translate-y-1/2 px-3 py-1.5 bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold rounded-md shadow-2xs cursor-pointer"
          >
            Find
          </button>
        </div>
      </form>

      {/* Action Buttons (Req 34) */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
        <button
          onClick={() => onNavigate('/')}
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm shadow-xs transition-colors cursor-pointer"
        >
          <Home className="w-4 h-4" />
          <span>Back to Home</span>
        </button>

        <button
          onClick={onOpenSearch}
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-white hover:bg-slate-50 border border-slate-300 text-slate-700 font-semibold text-sm shadow-2xs transition-colors cursor-pointer"
        >
          <Grid className="w-4 h-4 text-slate-500" />
          <span>Browse Converters</span>
        </button>
      </div>
    </div>
  );
};
