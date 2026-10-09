import React, { useState } from 'react';
import {
  Search,
  Scale,
  Ruler,
  Thermometer,
  Clock,
  Droplet,
  Coins,
  ArrowRight,
  CheckCircle2,
  HelpCircle,
  Sparkles,
  Zap,
  ShieldCheck,
  MousePointerClick
} from 'lucide-react';
import { CATEGORIES, CONVERTERS, POPULAR_CONVERTERS } from '../data/convertersData';

interface HomePageProps {
  onNavigate: (url: string) => void;
  onOpenSearch: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate, onOpenSearch }) => {
  const [heroSearchInput, setHeroSearchInput] = useState('');

  const handleHeroSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!heroSearchInput.trim()) return;

    const query = heroSearchInput.toLowerCase().trim();
    // Direct match check
    const matched = CONVERTERS.find(
      (c) =>
        c.primaryKeyword.toLowerCase().includes(query) ||
        c.secondaryKeywords.some((k) => k.toLowerCase().includes(query)) ||
        c.fromUnit.symbol.toLowerCase() === query ||
        c.toUnit.symbol.toLowerCase() === query
    );

    if (matched) {
      onNavigate(matched.url);
    } else if (
      query.includes('currency') ||
      query.includes('usd') ||
      query.includes('eur') ||
      query.includes('money') ||
      query.includes('exchange')
    ) {
      onNavigate('/currency-converter');
    } else {
      // Trigger modal search
      onOpenSearch();
    }
  };

  const exampleQueries = [
    { label: '10 kg to lb', url: '/kilograms-to-pounds' },
    { label: '100 cm to inches', url: '/centimeters-to-inches' },
    { label: '25 C to F', url: '/celsius-to-fahrenheit' },
    { label: '5 liters to gallons', url: '/liters-to-gallons' },
    { label: '100 USD to EUR', url: '/currency-converter' },
    { label: '6 feet to meters', url: '/feet-to-meters' }
  ];

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Scale':
        return <Scale className="w-5 h-5 text-blue-600" />;
      case 'Ruler':
        return <Ruler className="w-5 h-5 text-indigo-600" />;
      case 'Thermometer':
        return <Thermometer className="w-5 h-5 text-rose-600" />;
      case 'Clock':
        return <Clock className="w-5 h-5 text-amber-600" />;
      case 'Droplet':
        return <Droplet className="w-5 h-5 text-cyan-600" />;
      case 'Coins':
        return <Coins className="w-5 h-5 text-emerald-600" />;
      default:
        return <Zap className="w-5 h-5 text-blue-600" />;
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
      {/* Hero Section */}
      <section className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
        <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
          Free Unit Converters
        </h1>
        <p className="mt-3 text-base sm:text-xl text-slate-600 leading-relaxed font-normal">
          Convert weight, length, temperature, time, volume, and currency quickly and accurately.
        </p>

        {/* Prominent Search Box (Req 5) */}
        <div className="mt-8 max-w-xl mx-auto">
          <form onSubmit={handleHeroSearchSubmit} className="relative">
            <div className="relative flex items-center">
              <Search className="absolute left-4 w-5 h-5 text-slate-400 pointer-events-none" />
              <input
                type="text"
                value={heroSearchInput}
                onChange={(e) => setHeroSearchInput(e.target.value)}
                placeholder="What do you want to convert? (e.g. 10 kg to lb)"
                className="w-full pl-12 pr-28 py-3.5 sm:py-4 bg-white border-2 border-slate-300 hover:border-slate-400 focus:border-blue-600 rounded-xl text-slate-900 placeholder:text-slate-400 text-sm sm:text-base shadow-sm focus:outline-none focus:ring-4 focus:ring-blue-100 transition-all"
              />
              <button
                type="submit"
                className="absolute right-2 top-1/2 -translate-y-1/2 px-4 py-2 bg-blue-600 hover:bg-blue-700 active:scale-95 text-white text-xs sm:text-sm font-semibold rounded-lg shadow-xs transition-all cursor-pointer"
              >
                Convert
              </button>
            </div>
          </form>

          {/* Quick Example Searches */}
          <div className="mt-3 flex items-center justify-center flex-wrap gap-1.5 text-xs text-slate-500">
            <span className="text-[11px] font-medium uppercase tracking-wider text-slate-400 mr-1">
              Examples:
            </span>
            {exampleQueries.map((ex) => (
              <button
                key={ex.label}
                onClick={() => onNavigate(ex.url)}
                className="px-2 py-0.5 bg-slate-100 hover:bg-blue-50 hover:text-blue-700 rounded text-slate-600 transition-colors cursor-pointer"
              >
                {ex.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Conversions (Req 5) */}
      <section className="mb-16">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
              Popular Conversions
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
              The most frequently used conversion tools on UnitConvert Hub.
            </p>
          </div>
          <button
            onClick={onOpenSearch}
            className="text-xs font-semibold text-blue-600 hover:text-blue-700 hidden sm:flex items-center gap-1 cursor-pointer"
          >
            <span>View All Tools</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
          {POPULAR_CONVERTERS.map((slug) => {
            if (slug === 'currency-converter') {
              return (
                <button
                  key={slug}
                  onClick={() => onNavigate('/currency-converter')}
                  className="p-4 bg-white border border-slate-200/90 rounded-xl hover:border-emerald-400 hover:shadow-md transition-all text-left group cursor-pointer"
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded">
                      Finance
                    </span>
                    <Coins className="w-4 h-4 text-emerald-500" />
                  </div>
                  <h3 className="font-bold text-slate-900 group-hover:text-emerald-700 text-sm">
                    Currency Converter
                  </h3>
                  <p className="text-xs text-slate-500 mt-1">
                    USD, EUR, GBP, CAD, AUD, JPY & more
                  </p>
                  <div className="mt-3 text-xs font-medium text-emerald-600 flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
                    <span>Convert rates</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </button>
              );
            }

            const c = CONVERTERS.find((item) => item.slug === slug);
            if (!c) return null;

            return (
              <button
                key={c.slug}
                onClick={() => onNavigate(c.url)}
                className="p-4 bg-white border border-slate-200/90 rounded-xl hover:border-blue-400 hover:shadow-md transition-all text-left group cursor-pointer"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-blue-600 bg-blue-50 px-2 py-0.5 rounded">
                    {c.categoryName}
                  </span>
                  <span className="text-xs font-mono font-bold text-slate-400">
                    {c.fromUnit.symbol} ↔ {c.toUnit.symbol}
                  </span>
                </div>
                <h3 className="font-bold text-slate-900 group-hover:text-blue-600 text-sm">
                  {c.fromUnit.pluralName} to {c.toUnit.pluralName}
                </h3>
                <p className="text-xs text-slate-500 mt-1 line-clamp-1">
                  1 {c.fromUnit.symbol} = {c.convert(1).toFixed(3)} {c.toUnit.symbol}
                </p>
                <div className="mt-3 text-xs font-medium text-blue-600 flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
                  <span>Open calculator</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </button>
            );
          })}
        </div>
      </section>

      {/* Categorized Converters (Req 5) */}
      <section className="mb-16">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-6">
          Browse by Category
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CATEGORIES.map((cat) => (
            <div
              key={cat.id}
              className="bg-white border border-slate-200/90 rounded-2xl p-5 shadow-xs flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-2.5 mb-2.5">
                  <div className="p-2 rounded-lg bg-slate-50 border border-slate-200/70">
                    {getCategoryIcon(cat.icon)}
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-base">
                      {cat.name}
                    </h3>
                    <span className="text-[11px] text-slate-400 font-medium">
                      {cat.converters.length} Calculators
                    </span>
                  </div>
                </div>
                <p className="text-xs text-slate-500 leading-relaxed mb-4">
                  {cat.description}
                </p>

                {/* List of tools in this category */}
                <div className="space-y-1.5 border-t border-slate-100 pt-3">
                  {cat.converters.map((slug) => {
                    if (slug === 'currency-converter') {
                      return (
                        <button
                          key={slug}
                          onClick={() => onNavigate('/currency-converter')}
                          className="w-full text-left px-2.5 py-1.5 rounded-lg text-xs font-semibold text-slate-700 hover:text-emerald-700 hover:bg-emerald-50 transition-colors flex items-center justify-between cursor-pointer"
                        >
                          <span>Live Currency Exchange</span>
                          <span className="text-[10px] text-slate-400 font-normal">
                            USD / EUR / GBP / CAD
                          </span>
                        </button>
                      );
                    }
                    const c = CONVERTERS.find((item) => item.slug === slug);
                    if (!c) return null;
                    return (
                      <button
                        key={c.slug}
                        onClick={() => onNavigate(c.url)}
                        className="w-full text-left px-2.5 py-1.5 rounded-lg text-xs font-medium text-slate-700 hover:text-blue-700 hover:bg-blue-50 transition-colors flex items-center justify-between cursor-pointer"
                      >
                        <span>
                          {c.fromUnit.name} to {c.toUnit.name}
                        </span>
                        <span className="text-[10px] font-mono text-slate-400">
                          {c.fromUnit.symbol} → {c.toUnit.symbol}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* How UnitConvert Hub Works (Req 5) */}
      <section className="mb-16 bg-white border border-slate-200/80 rounded-2xl p-6 sm:p-8 shadow-xs">
        <div className="text-center max-w-xl mx-auto mb-8">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
            How UnitConvert Hub Works
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Fast, zero-friction conversions in four simple steps.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="text-center p-4 rounded-xl bg-slate-50/70 border border-slate-100">
            <div className="w-10 h-10 rounded-full bg-blue-600 text-white font-bold flex items-center justify-center mx-auto mb-3 text-sm shadow-xs">
              1
            </div>
            <h3 className="font-bold text-slate-900 text-sm mb-1">
              Enter your value
            </h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              Type any number or decimal into the primary input field.
            </p>
          </div>

          <div className="text-center p-4 rounded-xl bg-slate-50/70 border border-slate-100">
            <div className="w-10 h-10 rounded-full bg-blue-600 text-white font-bold flex items-center justify-center mx-auto mb-3 text-sm shadow-xs">
              2
            </div>
            <h3 className="font-bold text-slate-900 text-sm mb-1">
              Select the units
            </h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              Pick your starting and target unit, or click ⇄ to swap immediately.
            </p>
          </div>

          <div className="text-center p-4 rounded-xl bg-slate-50/70 border border-slate-100">
            <div className="w-10 h-10 rounded-full bg-blue-600 text-white font-bold flex items-center justify-center mx-auto mb-3 text-sm shadow-xs">
              3
            </div>
            <h3 className="font-bold text-slate-900 text-sm mb-1">
              Convert instantly
            </h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              Calculations update in real-time as you type without page reloads.
            </p>
          </div>

          <div className="text-center p-4 rounded-xl bg-slate-50/70 border border-slate-100">
            <div className="w-10 h-10 rounded-full bg-blue-600 text-white font-bold flex items-center justify-center mx-auto mb-3 text-sm shadow-xs">
              4
            </div>
            <h3 className="font-bold text-slate-900 text-sm mb-1">
              Copy the result
            </h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              Click the Copy button to quickly copy the result to your clipboard.
            </p>
          </div>
        </div>
      </section>

      {/* General FAQs (Req 5) */}
      <section className="bg-white border border-slate-200/80 rounded-2xl p-6 sm:p-8 shadow-xs">
        <div className="max-w-xl mx-auto text-center mb-8">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
            Frequently Asked Questions
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Common questions regarding our conversion tools and accuracy.
          </p>
        </div>

        <div className="max-w-3xl mx-auto divide-y divide-slate-200 space-y-4 text-sm">
          <div>
            <h3 className="font-semibold text-slate-900 mb-1">
              Are the conversions mathematically accurate?
            </h3>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
              Yes. All conversion factors are grounded in official International System of Units (SI) definitions, legal avoirdupois weights, and exact scientific constants. No premature rounding occurs during calculations.
            </p>
          </div>
          <div className="pt-4">
            <h3 className="font-semibold text-slate-900 mb-1">
              What is the difference between US Gallons and Imperial Gallons?
            </h3>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
              A US liquid gallon equals exactly 3.785411784 liters, whereas a British Imperial gallon equals 4.54609 liters. Our volume converter lets you seamlessly switch between both standards so you get the exact volume needed.
            </p>
          </div>
          <div className="pt-4">
            <h3 className="font-semibold text-slate-900 mb-1">
              Can I use UnitConvert Hub offline or export it?
            </h3>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
              Yes! UnitConvert Hub runs entirely in the modern browser, loads with lightning speed, and can be downloaded as a complete independent project ready to deploy to Vercel or any hosting platform.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
