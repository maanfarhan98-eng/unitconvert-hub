import React, { useState, useEffect, useRef } from 'react';
import { Search, X, ArrowRight, CornerDownLeft } from 'lucide-react';
import { CONVERTERS, CATEGORIES } from '../data/convertersData';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelect: (url: string) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose, onSelect }) => {
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
      setSelectedIndex(0);
    } else {
      setQuery('');
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        if (isOpen) onClose();
        else {
          // Open handled by parent or hook
        }
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const normalized = query.toLowerCase().trim();

  // Search logic
  const results = CONVERTERS.filter((c) => {
    if (!normalized) return true;

    // Check title / primary keyword
    if (c.primaryKeyword.toLowerCase().includes(normalized)) return true;
    if (c.h1.toLowerCase().includes(normalized)) return true;
    if (c.seoTitle.toLowerCase().includes(normalized)) return true;

    // Check category
    if (c.categoryName.toLowerCase().includes(normalized)) return true;
    if (c.categoryId.toLowerCase().includes(normalized)) return true;

    // Check unit symbols
    if (c.fromUnit.symbol.toLowerCase() === normalized) return true;
    if (c.toUnit.symbol.toLowerCase() === normalized) return true;
    if (c.fromUnit.name.toLowerCase().includes(normalized)) return true;
    if (c.toUnit.name.toLowerCase().includes(normalized)) return true;

    // Check secondary keywords
    if (c.secondaryKeywords.some((kw) => kw.toLowerCase().includes(normalized))) return true;

    // Check intent like "10 kg to lb" or "c to f"
    const words = normalized.split(/\s+/);
    if (words.includes('to') || words.includes('in')) {
      const parts = normalized.replace('to', ' ').replace('in', ' ').split(/\s+/).filter(Boolean);
      const allFound = parts.every((p) =>
        c.primaryKeyword.toLowerCase().includes(p) ||
        c.fromUnit.symbol.toLowerCase().includes(p) ||
        c.toUnit.symbol.toLowerCase().includes(p) ||
        c.secondaryKeywords.some((k) => k.toLowerCase().includes(p))
      );
      if (allFound) return true;
    }

    return false;
  });

  // Also include Currency converter
  const includeCurrency =
    !normalized ||
    normalized.includes('currenc') ||
    normalized.includes('money') ||
    normalized.includes('usd') ||
    normalized.includes('eur') ||
    normalized.includes('gbp') ||
    normalized.includes('cad') ||
    normalized.includes('aud') ||
    normalized.includes('exchange') ||
    normalized.includes('dollar') ||
    normalized.includes('rate');

  const allItems = [
    ...results.map((c) => ({
      title: `${c.fromUnit.name} to ${c.toUnit.name}`,
      subtitle: `${c.fromUnit.symbol} ↔ ${c.toUnit.symbol} · ${c.categoryName}`,
      url: c.url,
      badge: c.categoryName
    })),
    ...(includeCurrency
      ? [
          {
            title: 'Currency Converter',
            subtitle: 'USD, EUR, GBP, CAD, AUD, JPY, CNY, INR, DJF & more · Live Rates',
            url: '/currency-converter',
            badge: 'Currency'
          }
        ]
      : [])
  ];

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev + 1) % Math.max(1, allItems.length));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev - 1 + allItems.length) % Math.max(1, allItems.length));
    } else if (e.key === 'Enter' && allItems[selectedIndex]) {
      e.preventDefault();
      onSelect(allItems[selectedIndex].url);
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-150">
      <div
        className="w-full max-w-xl bg-white rounded-xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[80vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="relative border-b border-slate-200 flex items-center px-4 py-3">
          <Search className="w-5 h-5 text-slate-400 mr-3 shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setSelectedIndex(0);
            }}
            onKeyDown={handleKeyDown}
            placeholder="Search converters (e.g. kg to lb, cm to inches, time)..."
            className="w-full bg-transparent text-slate-900 placeholder:text-slate-400 focus:outline-none text-base"
          />
          {query ? (
            <button
              onClick={() => setQuery('')}
              className="p-1 text-slate-400 hover:text-slate-600 rounded-md cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          ) : (
            <kbd className="hidden sm:inline-block px-1.5 py-0.5 text-[11px] font-semibold text-slate-400 bg-slate-100 border border-slate-200 rounded">
              ESC
            </kbd>
          )}
        </div>

        {/* Results List */}
        <div className="overflow-y-auto p-2 divide-y divide-slate-100 flex-1">
          {allItems.length === 0 ? (
            <div className="p-8 text-center text-slate-500">
              <p className="font-medium text-slate-700">No converters found</p>
              <p className="text-sm mt-1 text-slate-400">
                Try searching for "weight", "length", "celsius", "liters", or "currency".
              </p>
            </div>
          ) : (
            allItems.slice(0, 10).map((item, idx) => {
              const isSelected = idx === selectedIndex;
              return (
                <button
                  key={item.url}
                  onClick={() => {
                    onSelect(item.url);
                    onClose();
                  }}
                  onMouseEnter={() => setSelectedIndex(idx)}
                  className={`w-full text-left px-3.5 py-2.5 rounded-lg flex items-center justify-between transition-colors cursor-pointer ${
                    isSelected ? 'bg-blue-50 text-blue-900' : 'hover:bg-slate-50 text-slate-800'
                  }`}
                >
                  <div className="min-w-0 pr-3">
                    <div className="font-semibold text-sm truncate flex items-center gap-2">
                      <span>{item.title}</span>
                      <span className="text-[10px] font-medium text-slate-500 bg-slate-100 px-1.5 py-0.5 rounded border border-slate-200">
                        {item.badge}
                      </span>
                    </div>
                    <div className="text-xs text-slate-500 truncate mt-0.5">{item.subtitle}</div>
                  </div>
                  <div className="flex items-center text-slate-400 shrink-0">
                    {isSelected ? (
                      <span className="inline-flex items-center text-xs font-medium text-blue-600">
                        Select <CornerDownLeft className="w-3.5 h-3.5 ml-1" />
                      </span>
                    ) : (
                      <ArrowRight className="w-4 h-4 opacity-50" />
                    )}
                  </div>
                </button>
              );
            })
          )}
        </div>

        {/* Keyboard hints footer */}
        <div className="bg-slate-50 border-t border-slate-100 px-4 py-2 flex items-center justify-between text-xs text-slate-500">
          <div className="flex items-center gap-3">
            <span>
              <kbd className="px-1 py-0.5 bg-white border border-slate-200 rounded text-[10px]">↑</kbd>{' '}
              <kbd className="px-1 py-0.5 bg-white border border-slate-200 rounded text-[10px]">↓</kbd> to navigate
            </span>
            <span>
              <kbd className="px-1 py-0.5 bg-white border border-slate-200 rounded text-[10px]">↵</kbd> to select
            </span>
          </div>
          <span className="text-[11px] text-slate-400">UnitConvert Hub Search</span>
        </div>
      </div>
    </div>
  );
};
