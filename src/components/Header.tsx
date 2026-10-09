import React, { useState } from 'react';
import { Search, Menu, X, ArrowUpDown, ChevronDown } from 'lucide-react';
import { CATEGORIES } from '../data/convertersData';

interface HeaderProps {
  currentUrl: string;
  onNavigate: (url: string) => void;
  onOpenSearch: () => void;
}

export const Header: React.FC<HeaderProps> = ({ currentUrl, onNavigate, onOpenSearch }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [categoriesOpen, setCategoriesOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-xs">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4">
        {/* Brand Logo & Tagline */}
        <button
          onClick={() => onNavigate('/')}
          className="flex items-center gap-2.5 text-left group cursor-pointer focus-visible:outline-blue-600 rounded-lg p-1 -ml-1"
        >
          <div className="w-9 h-9 rounded-lg bg-blue-600 flex items-center justify-center text-white shadow-xs group-hover:bg-blue-700 transition-colors shrink-0">
            <ArrowUpDown className="w-5 h-5" />
          </div>
          <div>
            <span className="font-bold text-lg text-slate-900 leading-tight block group-hover:text-blue-600 transition-colors">
              UnitConvert<span className="text-blue-600">Hub</span>
            </span>
            <span className="text-[11px] text-slate-500 font-medium hidden sm:block leading-none">
              Simple Conversions. Clear Results.
            </span>
          </div>
        </button>

        {/* Desktop Quick Search Button */}
        <button
          onClick={onOpenSearch}
          className="hidden md:flex items-center gap-2 px-3.5 py-1.5 bg-slate-100 hover:bg-slate-200/80 text-slate-600 rounded-lg text-xs font-medium border border-slate-200/60 transition-colors cursor-pointer w-64 justify-between"
        >
          <span className="flex items-center gap-2 text-slate-500">
            <Search className="w-3.5 h-3.5" />
            <span>Search converters...</span>
          </span>
          <kbd className="px-1.5 py-0.5 text-[10px] bg-white text-slate-500 rounded border border-slate-200 font-mono shadow-2xs">
            ⌘K
          </kbd>
        </button>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 text-sm font-medium text-slate-600">
          <button
            onClick={() => onNavigate('/')}
            className={`px-3 py-1.5 rounded-md hover:text-slate-900 hover:bg-slate-100 transition-colors cursor-pointer ${
              currentUrl === '/' ? 'text-blue-600 bg-blue-50 font-semibold' : ''
            }`}
          >
            Home
          </button>

          {/* Categories Dropdown */}
          <div className="relative">
            <button
              onClick={() => setCategoriesOpen(!categoriesOpen)}
              onMouseEnter={() => setCategoriesOpen(true)}
              className="px-3 py-1.5 rounded-md hover:text-slate-900 hover:bg-slate-100 transition-colors flex items-center gap-1 cursor-pointer"
            >
              <span>Converters</span>
              <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${categoriesOpen ? 'rotate-180' : ''}`} />
            </button>

            {categoriesOpen && (
              <div
                onMouseLeave={() => setCategoriesOpen(false)}
                className="absolute top-full left-0 w-64 bg-white border border-slate-200 rounded-xl shadow-lg py-2 mt-1 z-50 animate-in fade-in slide-in-from-top-1 duration-150"
              >
                <div className="px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-slate-400">
                  Categories
                </div>
                {CATEGORIES.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => {
                      setCategoriesOpen(false);
                      if (cat.id === 'currency') {
                        onNavigate('/currency-converter');
                      } else {
                        // Navigate to primary converter of this category
                        const firstConverter = cat.converters[0];
                        onNavigate(`/${firstConverter}/`);
                      }
                    }}
                    className="w-full text-left px-3 py-2 text-sm text-slate-700 hover:bg-blue-50 hover:text-blue-700 flex items-center justify-between cursor-pointer"
                  >
                    <span>{cat.name}</span>
                    <span className="text-xs text-slate-400 font-normal">
                      {cat.converters.length} tools
                    </span>
                  </button>
                ))}
              </div>
            )}
          </div>

          <button
            onClick={() => onNavigate('/currency-converter')}
            className={`px-3 py-1.5 rounded-md hover:text-slate-900 hover:bg-slate-100 transition-colors cursor-pointer ${
              currentUrl.includes('currency') ? 'text-blue-600 bg-blue-50 font-semibold' : ''
            }`}
          >
            Currency
          </button>

          <button
            onClick={() => onNavigate('/about')}
            className={`px-3 py-1.5 rounded-md hover:text-slate-900 hover:bg-slate-100 transition-colors cursor-pointer ${
              currentUrl === '/about' ? 'text-blue-600 bg-blue-50 font-semibold' : ''
            }`}
          >
            About
          </button>
        </nav>

        {/* Right CTA: Mobile Search & Menu */}
        <div className="flex items-center gap-2">
          <button
            onClick={onOpenSearch}
            className="md:hidden p-2 text-slate-600 hover:bg-slate-100 rounded-lg cursor-pointer"
            aria-label="Open Search"
          >
            <Search className="w-5 h-5" />
          </button>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-slate-600 hover:bg-slate-100 rounded-lg cursor-pointer"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 space-y-3 animate-in slide-in-from-top-2 duration-150 shadow-lg">
          <div className="grid grid-cols-2 gap-2 pb-2 border-b border-slate-100">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onNavigate('/');
              }}
              className="text-left px-3 py-2 text-sm font-medium rounded-lg text-slate-700 hover:bg-slate-100"
            >
              Home
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onNavigate('/currency-converter');
              }}
              className="text-left px-3 py-2 text-sm font-medium rounded-lg text-slate-700 hover:bg-slate-100"
            >
              Currency Converter
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onNavigate('/about');
              }}
              className="text-left px-3 py-2 text-sm font-medium rounded-lg text-slate-700 hover:bg-slate-100"
            >
              About
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onNavigate('/contact');
              }}
              className="text-left px-3 py-2 text-sm font-medium rounded-lg text-slate-700 hover:bg-slate-100"
            >
              Contact
            </button>
          </div>

          <div>
            <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2 px-1">
              Popular Converters
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-1 text-sm">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onNavigate('/kilograms-to-pounds');
                }}
                className="text-left px-2.5 py-1.5 rounded text-slate-600 hover:text-blue-600 hover:bg-slate-50"
              >
                Kilograms to Pounds (kg → lb)
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onNavigate('/pounds-to-kilograms');
                }}
                className="text-left px-2.5 py-1.5 rounded text-slate-600 hover:text-blue-600 hover:bg-slate-50"
              >
                Pounds to Kilograms (lb → kg)
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onNavigate('/centimeters-to-inches');
                }}
                className="text-left px-2.5 py-1.5 rounded text-slate-600 hover:text-blue-600 hover:bg-slate-50"
              >
                Centimeters to Inches (cm → in)
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onNavigate('/feet-to-meters');
                }}
                className="text-left px-2.5 py-1.5 rounded text-slate-600 hover:text-blue-600 hover:bg-slate-50"
              >
                Feet to Meters (ft → m)
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onNavigate('/celsius-to-fahrenheit');
                }}
                className="text-left px-2.5 py-1.5 rounded text-slate-600 hover:text-blue-600 hover:bg-slate-50"
              >
                Celsius to Fahrenheit (°C → °F)
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onNavigate('/liters-to-gallons');
                }}
                className="text-left px-2.5 py-1.5 rounded text-slate-600 hover:text-blue-600 hover:bg-slate-50"
              >
                Liters to Gallons (L → gal)
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
