import React, { useState, useEffect } from 'react';
import { ArrowLeftRight, Check, Copy, RefreshCw, AlertCircle, TrendingUp, Info } from 'lucide-react';
import { Breadcrumbs } from './Breadcrumbs';
import { formatResultNumber, parseInputNumber } from '../utils/math';

interface CurrencyConverterProps {
  onNavigate: (url: string) => void;
}

export interface CurrencyItem {
  code: string;
  name: string;
  symbol: string;
  flag: string;
}

export const SUPPORTED_CURRENCIES: CurrencyItem[] = [
  { code: 'USD', name: 'US Dollar', symbol: '$', flag: '🇺🇸' },
  { code: 'EUR', name: 'Euro', symbol: '€', flag: '🇪🇺' },
  { code: 'GBP', name: 'British Pound Sterling', symbol: '£', flag: '🇬🇧' },
  { code: 'CAD', name: 'Canadian Dollar', symbol: 'CA$', flag: '🇨🇦' },
  { code: 'AUD', name: 'Australian Dollar', symbol: 'A$', flag: '🇦🇺' },
  { code: 'JPY', name: 'Japanese Yen', symbol: '¥', flag: '🇯🇵' },
  { code: 'CHF', name: 'Swiss Franc', symbol: 'CHF', flag: '🇨🇭' },
  { code: 'CNY', name: 'Chinese Yuan', symbol: '¥', flag: '🇨🇳' },
  { code: 'INR', name: 'Indian Rupee', symbol: '₹', flag: '🇮🇳' },
  { code: 'AED', name: 'UAE Dirham', symbol: 'AED', flag: '🇦🇪' },
  { code: 'SAR', name: 'Saudi Riyal', symbol: 'SAR', flag: '🇸🇦' },
  { code: 'DJF', name: 'Djiboutian Franc', symbol: 'Fdj', flag: '🇩🇯' },
];

// Fallback rates snapshot (base: USD)
const FALLBACK_RATES: Record<string, number> = {
  USD: 1.0,
  EUR: 0.925,
  GBP: 0.792,
  CAD: 1.365,
  AUD: 1.528,
  JPY: 154.2,
  CHF: 0.902,
  CNY: 7.238,
  INR: 83.45,
  AED: 3.6725,
  SAR: 3.75,
  DJF: 177.72,
};

export const CurrencyConverter: React.FC<CurrencyConverterProps> = ({ onNavigate }) => {
  const [fromCurrency, setFromCurrency] = useState('USD');
  const [toCurrency, setToCurrency] = useState('EUR');
  const [amount, setAmount] = useState('100');
  const [rates, setRates] = useState<Record<string, number>>(FALLBACK_RATES);
  const [lastUpdated, setLastUpdated] = useState<string>('Periodic data reference rate');
  const [isLoading, setIsLoading] = useState(false);
  const [copied, setCopied] = useState(false);
  const [dataSource, setDataSource] = useState<string>('Free ExchangeRate Provider');

  const fetchRates = async () => {
    setIsLoading(true);
    try {
      // ExchangeRate open API (updates daily without API key required)
      const res = await fetch('https://open.er-api.com/v6/latest/USD');
      if (!res.ok) throw new Error('API response failed');
      const data = await res.json();
      if (data && data.rates) {
        setRates(data.rates);
        if (data.time_last_update_utc) {
          setLastUpdated(data.time_last_update_utc);
          setDataSource('Open ExchangeRate API (Live Feed)');
        }
      }
    } catch (e) {
      console.warn('Using offline fallback rates:', e);
      setLastUpdated('Cached reference rates');
      setDataSource('Reference data snapshot');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchRates();
  }, []);

  const handleSwap = () => {
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
  };

  // Calculate conversion:
  // Since all rates are stored relative to USD:
  // 1 USD = rates[toCurrency], 1 USD = rates[fromCurrency]
  // 1 fromCurrency = (rates[toCurrency] / rates[fromCurrency]) toCurrency
  const fromRateInUSD = rates[fromCurrency] || 1;
  const toRateInUSD = rates[toCurrency] || 1;
  const unitRate = toRateInUSD / fromRateInUSD;

  const numericAmount = parseInputNumber(amount);
  const convertedValue = numericAmount !== null ? numericAmount * unitRate : null;
  const formattedConverted = convertedValue !== null ? formatResultNumber(convertedValue, 2) : '—';

  const fullResultString =
    numericAmount !== null
      ? `${amount} ${fromCurrency} = ${formattedConverted} ${toCurrency}`
      : '';

  const handleCopy = async () => {
    if (!fullResultString) return;
    try {
      await navigator.clipboard.writeText(fullResultString);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const fromCurrObj = SUPPORTED_CURRENCIES.find((c) => c.code === fromCurrency);
  const toCurrObj = SUPPORTED_CURRENCIES.find((c) => c.code === toCurrency);

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-6">
      {/* Breadcrumbs */}
      <Breadcrumbs
        items={[
          { label: 'Currency', url: '/currency-converter' },
          { label: `${fromCurrency} to ${toCurrency} Calculator` }
        ]}
        onNavigate={onNavigate}
      />

      {/* Heading */}
      <div className="mb-6">
        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
          Currency Converter — Live Exchange Rate Calculator
        </h1>
        <p className="mt-2 text-sm sm:text-base text-slate-600 leading-relaxed max-w-3xl">
          Convert world currencies using current exchange-rate data. Calculate accurate conversions between US Dollars (USD), Euros (EUR), British Pounds (GBP), Japanese Yen (JPY), Canadian Dollars (CAD), and other major global currencies.
        </p>
      </div>

      {/* Calculator Card */}
      <div className="bg-white rounded-2xl shadow-sm border border-slate-200/80 p-5 sm:p-7 mb-10">
        {/* Status indicator bar */}
        <div className="flex flex-wrap items-center justify-between gap-2 mb-5 pb-3 border-b border-slate-100 text-xs text-slate-500">
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block animate-pulse" />
            <span>Feed: <strong>{dataSource}</strong></span>
          </div>
          <div className="flex items-center gap-2">
            <span>Last Updated: <strong className="text-slate-700">{lastUpdated}</strong></span>
            <button
              onClick={fetchRates}
              disabled={isLoading}
              title="Refresh rates"
              className="p-1 text-slate-400 hover:text-blue-600 transition-colors cursor-pointer"
            >
              <RefreshCw className={`w-3.5 h-3.5 ${isLoading ? 'animate-spin' : ''}`} />
            </button>
          </div>
        </div>

        {/* Inputs */}
        <div className="grid grid-cols-1 sm:grid-cols-12 gap-3 items-end">
          {/* Amount Input */}
          <div className="sm:col-span-4">
            <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
              Amount
            </label>
            <div className="relative">
              <input
                type="number"
                step="any"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="100"
                className="w-full text-xl sm:text-2xl font-semibold px-4 py-3 bg-slate-50 border border-slate-300 rounded-xl text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-blue-600 transition-colors"
              />
              <span className="absolute right-3.5 top-1/2 -translate-y-1/2 text-sm font-bold text-slate-400 select-none">
                {fromCurrObj?.symbol || fromCurrency}
              </span>
            </div>
          </div>

          {/* From Currency Selector */}
          <div className="sm:col-span-3">
            <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
              From Currency
            </label>
            <select
              value={fromCurrency}
              onChange={(e) => setFromCurrency(e.target.value)}
              className="w-full text-sm sm:text-base font-semibold px-3 py-3.5 bg-slate-50 border border-slate-300 rounded-xl text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-600 cursor-pointer"
            >
              {SUPPORTED_CURRENCIES.map((c) => (
                <option key={c.code} value={c.code}>
                  {c.flag} {c.code} — {c.name}
                </option>
              ))}
            </select>
          </div>

          {/* Swap Button */}
          <div className="sm:col-span-2 flex justify-center py-1 sm:py-0">
            <button
              type="button"
              onClick={handleSwap}
              title="Swap currencies"
              className="p-3 rounded-xl bg-slate-100 hover:bg-blue-50 text-slate-600 hover:text-blue-600 active:scale-95 transition-all border border-slate-200 cursor-pointer shadow-2xs"
            >
              <ArrowLeftRight className="w-5 h-5" />
            </button>
          </div>

          {/* To Currency Selector */}
          <div className="sm:col-span-3">
            <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
              To Currency
            </label>
            <select
              value={toCurrency}
              onChange={(e) => setToCurrency(e.target.value)}
              className="w-full text-sm sm:text-base font-semibold px-3 py-3.5 bg-slate-50 border border-slate-300 rounded-xl text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-600 cursor-pointer"
            >
              {SUPPORTED_CURRENCIES.map((c) => (
                <option key={c.code} value={c.code}>
                  {c.flag} {c.code} — {c.name}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Quick Amount Buttons */}
        <div className="mt-3 flex items-center flex-wrap gap-1.5 text-xs text-slate-500">
          <span className="font-medium mr-1 text-[11px] uppercase tracking-wide">Quick:</span>
          {[10, 50, 100, 500, 1000, 5000].map((val) => (
            <button
              key={val}
              type="button"
              onClick={() => setAmount(String(val))}
              className="px-2 py-1 bg-slate-100 hover:bg-blue-50 hover:text-blue-700 border border-slate-200 rounded-md font-mono text-slate-700 transition-colors cursor-pointer"
            >
              {val} {fromCurrency}
            </button>
          ))}
        </div>

        {/* Result Area */}
        <div className="mt-6 pt-5 border-t border-slate-100">
          <div className="bg-gradient-to-br from-slate-900 to-slate-800 text-white rounded-xl p-5 sm:p-6 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="text-xs uppercase tracking-wider text-slate-400 font-semibold block mb-1">
                Converted Amount
              </span>
              <div className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white flex flex-wrap items-baseline gap-2">
                <span>{amount || '0'} {fromCurrency}</span>
                <span className="text-emerald-400">=</span>
                <span className="text-emerald-300">{formattedConverted} {toCurrency}</span>
              </div>
              <p className="text-xs text-slate-400 mt-1 font-mono">
                1 {fromCurrency} = {formatResultNumber(unitRate, 4)} {toCurrency} · 1 {toCurrency} = {formatResultNumber(1 / unitRate, 4)} {fromCurrency}
              </p>
            </div>

            {/* Copy Button */}
            <button
              type="button"
              onClick={handleCopy}
              disabled={!fullResultString}
              className={`inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-sm font-semibold transition-all cursor-pointer shadow-xs shrink-0 ${
                copied
                  ? 'bg-emerald-600 text-white'
                  : 'bg-white text-slate-900 hover:bg-slate-100 active:scale-95'
              }`}
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4" />
                  <span>Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4" />
                  <span>Copy Result</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Currency Exchange Rate Matrix Table */}
      <section className="mb-10 bg-white rounded-xl p-6 border border-slate-200/80 shadow-xs">
        <h2 className="text-lg sm:text-xl font-bold text-slate-900 mb-2 flex items-center gap-2">
          <TrendingUp className="w-5 h-5 text-blue-600" />
          <span>Major Exchange Rates (Reference Baseline)</span>
        </h2>
        <p className="text-slate-500 text-xs mb-4">
          Compare the current relative value of 1 {fromCurrency} across primary international reserve and trade currencies.
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2.5">
          {SUPPORTED_CURRENCIES.filter((c) => c.code !== fromCurrency).map((target) => {
            const targetRateInUSD = rates[target.code] || 1;
            const targetCrossRate = targetRateInUSD / fromRateInUSD;
            return (
              <button
                key={target.code}
                onClick={() => setToCurrency(target.code)}
                className={`p-2.5 text-left rounded-lg border transition-all cursor-pointer ${
                  toCurrency === target.code
                    ? 'border-blue-600 bg-blue-50/50'
                    : 'border-slate-200 bg-slate-50 hover:bg-slate-100'
                }`}
              >
                <div className="flex items-center justify-between text-xs text-slate-500">
                  <span>{target.flag} {target.code}</span>
                  <span className="font-mono text-slate-400">1 {fromCurrency}</span>
                </div>
                <div className="font-bold text-sm text-slate-900 mt-1 font-mono">
                  {formatResultNumber(targetCrossRate, 4)} {target.symbol}
                </div>
              </button>
            );
          })}
        </div>
      </section>

      {/* Explanation of Currency Conversion */}
      <section className="mb-10 bg-white rounded-xl p-6 border border-slate-200/80 shadow-xs">
        <h2 className="text-lg sm:text-xl font-bold text-slate-900 mb-3">
          How Currency Conversion Works
        </h2>
        <p className="text-slate-600 text-sm leading-relaxed mb-3">
          Currency exchange rates denote how much of one currency is needed to purchase a single unit of another. Unlike physical measurements like kilograms or centimeters which have immutable physical definitions, currency values float continually based on global supply, consumer demand, interest rates, inflation figures, and geopolitical developments.
        </p>
        <p className="text-slate-600 text-sm leading-relaxed mb-4">
          To convert an amount between two currencies, multiply the starting amount by the current cross-currency exchange rate:
        </p>
        <div className="bg-slate-50 border border-slate-200 rounded-lg p-3.5 font-mono text-sm text-blue-900 text-center select-all">
          Target Currency = Starting Amount × (Target Exchange Rate ÷ Base Exchange Rate)
        </div>
      </section>

      {/* Currency Disclaimer (Req 26 & 39) */}
      <section className="mb-10 bg-amber-50/80 border border-amber-200 rounded-xl p-5">
        <div className="flex items-start gap-3">
          <Info className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
          <div className="text-xs text-amber-900 leading-relaxed space-y-1">
            <h3 className="font-bold text-sm text-amber-900">Exchange Rate Notice & Disclosure</h3>
            <p>
              UnitConvert Hub receives currency exchange data from periodic public market feeds. The displayed rates represent reference mid-market exchange rates (the midpoint between global buy and sell quotes).
            </p>
            <p>
              These rates are for informational purposes only and do not constitute financial advice. Actual transaction rates charged by retail banks, international credit cards, airport kiosks, or money transfer services include profit spreads and processing fees and will differ from the rates shown here.
            </p>
          </div>
        </div>
      </section>

      {/* Currency FAQs */}
      <section className="mb-10 bg-white rounded-xl p-6 border border-slate-200/80 shadow-xs">
        <h2 className="text-lg sm:text-xl font-bold text-slate-900 mb-4">
          Currency Conversion FAQs
        </h2>
        <div className="divide-y divide-slate-200 space-y-4 text-sm">
          <div>
            <h3 className="font-semibold text-slate-900 mb-1">
              What is a mid-market exchange rate?
            </h3>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
              The mid-market rate (also called the interbank rate) is the exact midpoint between the buy and sell rates in international currency markets. It is the real exchange rate used by major financial institutions before retail markups are added.
            </p>
          </div>
          <div className="pt-4">
            <h3 className="font-semibold text-slate-900 mb-1">
              How often are the exchange rates updated?
            </h3>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
              Our data provider aggregates and refreshes foreign exchange benchmarks periodically throughout international trading days. The exact timestamp of the last update is always displayed right above the converter.
            </p>
          </div>
          <div className="pt-4">
            <h3 className="font-semibold text-slate-900 mb-1">
              Why does my credit card or bank charge a different rate?
            </h3>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
              Commercial banks and credit card networks (such as Visa and Mastercard) typically add a foreign transaction fee (often 1% to 3%) or widen the exchange rate spread to earn revenue on currency exchanges.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
