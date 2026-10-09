import React, { useState, useEffect, useId } from 'react';
import { ArrowLeftRight, Check, Copy, HelpCircle, ArrowRight, Sparkles, BookOpen } from 'lucide-react';
import { ConverterConfig } from '../types';
import { formatResultNumber, parseInputNumber } from '../utils/math';
import { Breadcrumbs } from './Breadcrumbs';

interface UniversalConverterProps {
  config: ConverterConfig;
  onNavigate: (url: string) => void;
}

export const UniversalConverter: React.FC<UniversalConverterProps> = ({ config, onNavigate }) => {
  const [inputValue, setInputValue] = useState<string>(String(config.defaultInput));
  const [selectedVariant, setSelectedVariant] = useState<string>(
    config.variants ? config.variants[0].id : ''
  );
  const [isSwapped, setIsSwapped] = useState<boolean>(false);
  const [copied, setCopied] = useState<boolean>(false);
  const inputId = useId();

  // Reset or initialize state when config changes
  useEffect(() => {
    setInputValue(String(config.defaultInput));
    setIsSwapped(false);
    if (config.variants && config.variants.length > 0) {
      setSelectedVariant(config.variants[0].id);
    }
  }, [config.id]);

  // Current units depending on swap status
  const currentFromUnit = isSwapped ? config.toUnit : config.fromUnit;
  const currentToUnit = isSwapped ? config.fromUnit : config.toUnit;

  // Calculation
  const numericInput = parseInputNumber(inputValue);
  let computedOutput: number | null = null;
  if (numericInput !== null) {
    if (!isSwapped) {
      computedOutput = config.convert(numericInput, selectedVariant);
    } else {
      computedOutput = config.reverseConvert(numericInput, selectedVariant);
    }
  }

  const formattedResult =
    computedOutput !== null ? formatResultNumber(computedOutput, 4) : '—';

  const fullResultString =
    numericInput !== null
      ? `${inputValue} ${currentFromUnit.symbol} = ${formattedResult} ${currentToUnit.symbol}`
      : '';

  const handleCopy = async () => {
    if (!fullResultString) return;
    try {
      await navigator.clipboard.writeText(fullResultString);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleSwap = () => {
    setIsSwapped(!isSwapped);
  };

  // Preset quick inputs
  const presetPills = [1, 5, 10, 25, 50, 100];

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-6">
      {/* Breadcrumbs */}
      <Breadcrumbs
        items={[
          { label: config.categoryName, url: `/${config.categoryId}-converters/` },
          { label: `${config.fromUnit.pluralName} to ${config.toUnit.pluralName}` }
        ]}
        onNavigate={onNavigate}
      />

      {/* Page Heading & Summary */}
      <div className="mb-6">
        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
          {config.h1}
        </h1>
        <p className="mt-2 text-sm sm:text-base text-slate-600 leading-relaxed max-w-3xl">
          {config.summary}
        </p>
      </div>

      {/* Main Converter Tool Card */}
      <div className="bg-white rounded-2xl shadow-sm border border-slate-200/80 p-5 sm:p-7 mb-10 transition-all">
        {/* Gallon variant selector if applicable (e.g. US vs Imperial Gallons) */}
        {config.variants && config.variants.length > 0 && (
          <div className="mb-5 p-3.5 bg-blue-50/70 border border-blue-100 rounded-xl">
            <label className="block text-xs font-semibold text-blue-900 mb-1.5 uppercase tracking-wider">
              Select Gallon Standard:
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {config.variants.map((variant) => (
                <button
                  key={variant.id}
                  type="button"
                  onClick={() => setSelectedVariant(variant.id)}
                  className={`px-3 py-2 text-xs font-medium rounded-lg text-left transition-colors cursor-pointer border ${
                    selectedVariant === variant.id
                      ? 'bg-blue-600 text-white border-blue-600 shadow-2xs'
                      : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
                  }`}
                >
                  <div className="font-semibold">{variant.label}</div>
                  <div className={`text-[11px] mt-0.5 ${selectedVariant === variant.id ? 'text-blue-100' : 'text-slate-500'}`}>
                    {variant.description}
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Input & Unit Row */}
        <div className="grid grid-cols-1 sm:grid-cols-12 gap-3 items-end">
          {/* Numerical Input */}
          <div className="sm:col-span-5">
            <label htmlFor={inputId} className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
              Enter Value ({currentFromUnit.symbol})
            </label>
            <div className="relative">
              <input
                id={inputId}
                type="number"
                step="any"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Enter number..."
                className="w-full text-xl sm:text-2xl font-semibold px-4 py-3 bg-slate-50 border border-slate-300 rounded-xl text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-blue-600 transition-colors"
              />
              <span className="absolute right-3.5 top-1/2 -translate-y-1/2 text-sm font-bold text-slate-400 select-none">
                {currentFromUnit.symbol}
              </span>
            </div>
          </div>

          {/* Swap Button */}
          <div className="sm:col-span-2 flex justify-center py-1 sm:py-0">
            <button
              type="button"
              onClick={handleSwap}
              title="Swap units"
              aria-label={`Swap ${currentFromUnit.pluralName} and ${currentToUnit.pluralName}`}
              className="p-3 rounded-xl bg-slate-100 hover:bg-blue-50 text-slate-600 hover:text-blue-600 active:scale-95 transition-all border border-slate-200 cursor-pointer shadow-2xs"
            >
              <ArrowLeftRight className="w-5 h-5" />
            </button>
          </div>

          {/* Target Unit Display / Selector */}
          <div className="sm:col-span-5">
            <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
              Converted To ({currentToUnit.symbol})
            </label>
            <div className="w-full text-base sm:text-lg font-semibold px-4 py-3 bg-slate-100 border border-slate-200 rounded-xl text-slate-800 flex items-center justify-between select-none">
              <span>{currentToUnit.pluralName}</span>
              <span className="text-sm font-bold text-slate-500">
                {currentToUnit.symbol}
              </span>
            </div>
          </div>
        </div>

        {/* Quick Value Buttons */}
        <div className="mt-3 flex items-center flex-wrap gap-1.5 text-xs text-slate-500">
          <span className="font-medium mr-1 text-[11px] uppercase tracking-wide">Quick:</span>
          {presetPills.map((val) => (
            <button
              key={val}
              type="button"
              onClick={() => setInputValue(String(val))}
              className="px-2 py-1 bg-slate-100 hover:bg-blue-50 hover:text-blue-700 border border-slate-200 rounded-md font-mono text-slate-700 transition-colors cursor-pointer"
            >
              {val} {currentFromUnit.symbol}
            </button>
          ))}
          <button
            type="button"
            onClick={() => setInputValue('')}
            className="px-2 py-1 text-slate-400 hover:text-slate-600 transition-colors cursor-pointer text-[11px] ml-auto"
          >
            Clear
          </button>
        </div>

        {/* Result Area */}
        <div className="mt-6 pt-5 border-t border-slate-100">
          <div className="bg-gradient-to-br from-slate-900 to-slate-800 text-white rounded-xl p-5 sm:p-6 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="text-xs uppercase tracking-wider text-slate-400 font-semibold block mb-1">
                Conversion Result
              </span>
              <div className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white flex flex-wrap items-baseline gap-2">
                <span>{inputValue || '0'} {currentFromUnit.symbol}</span>
                <span className="text-blue-400">=</span>
                <span className="text-blue-300">{formattedResult} {currentToUnit.symbol}</span>
              </div>
              <p className="text-xs text-slate-400 mt-1 font-mono">
                1 {currentFromUnit.symbol} = {formatResultNumber(
                  !isSwapped
                    ? config.convert(1, selectedVariant)
                    : config.reverseConvert(1, selectedVariant),
                  6
                )} {currentToUnit.symbol}
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

      {/* Content Section 1: What is this conversion? */}
      <section className="mb-10 bg-white rounded-xl p-6 border border-slate-200/80 shadow-xs">
        <h2 className="text-lg sm:text-xl font-bold text-slate-900 mb-3 flex items-center gap-2">
          <BookOpen className="w-5 h-5 text-blue-600" />
          <span>What is {config.fromUnit.pluralName} to {config.toUnit.pluralName}?</span>
        </h2>
        <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-4">
          Converting from <strong>{config.fromUnit.pluralName}</strong> ({config.fromUnit.symbol}) to <strong>{config.toUnit.pluralName}</strong> ({config.toUnit.symbol}) involves transitioning between measurements in the {config.categoryName.toLowerCase()} domain. Whether working in scientific laboratories, calculating recipes in the kitchen, packing luggage for international travel, or reading technical specifications, exact conversions prevent rounding errors and misunderstanding.
        </p>
        <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
          {config.formulaDescription}
        </p>
      </section>

      {/* Content Section 2: Conversion Formula */}
      <section className="mb-10 bg-white rounded-xl p-6 border border-slate-200/80 shadow-xs">
        <h2 className="text-lg sm:text-xl font-bold text-slate-900 mb-3">
          How to Convert {config.fromUnit.pluralName} to {config.toUnit.pluralName} (Formula)
        </h2>
        <p className="text-slate-600 text-sm leading-relaxed mb-3">
          To convert a value from {config.fromUnit.pluralName.toLowerCase()} to {config.toUnit.pluralName.toLowerCase()}, apply the standard mathematical conversion formula below:
        </p>
        
        <div className="bg-slate-50 border border-slate-200 rounded-lg p-4 font-mono text-sm sm:text-base font-semibold text-blue-900 text-center select-all">
          {config.formulaMath}
        </div>

        <p className="text-xs text-slate-500 mt-2 text-center">
          Note: Internal calculations are performed using double-precision floating point constants without premature rounding.
        </p>
      </section>

      {/* Content Section 3: Worked Examples */}
      <section className="mb-10 bg-white rounded-xl p-6 border border-slate-200/80 shadow-xs">
        <h2 className="text-lg sm:text-xl font-bold text-slate-900 mb-3">
          Step-by-Step Conversion Examples
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {config.examples.map((ex, i) => (
            <div key={i} className="p-4 rounded-lg bg-slate-50 border border-slate-200/70">
              <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">
                Example {i + 1}
              </div>
              <div className="font-semibold text-slate-900 text-sm mb-1">
                {ex.inputVal} {config.fromUnit.symbol} = {ex.outputVal}
              </div>
              <p className="text-xs text-slate-600 font-mono leading-relaxed">
                {ex.explanation}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Content Section 4: Quick Conversion Table */}
      <section className="mb-10 bg-white rounded-xl p-6 border border-slate-200/80 shadow-xs overflow-hidden">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg sm:text-xl font-bold text-slate-900">
            {config.fromUnit.symbol} to {config.toUnit.symbol} Quick Conversion Table
          </h2>
          <span className="text-xs text-slate-400 hidden sm:inline">
            Click any row to test
          </span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm border-collapse">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50 text-slate-700 text-xs font-semibold uppercase tracking-wider">
                <th className="py-2.5 px-4">{config.fromUnit.pluralName} ({config.fromUnit.symbol})</th>
                <th className="py-2.5 px-4">{config.toUnit.pluralName} ({config.toUnit.symbol})</th>
                <th className="py-2.5 px-4 text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 font-mono text-xs sm:text-sm">
              {config.tableValues.map((val) => {
                const convertedVal = config.convert(val, selectedVariant);
                return (
                  <tr
                    key={val}
                    onClick={() => {
                      setIsSwapped(false);
                      setInputValue(String(val));
                    }}
                    className="hover:bg-blue-50/60 transition-colors cursor-pointer group"
                  >
                    <td className="py-2.5 px-4 font-semibold text-slate-800">
                      {val} {config.fromUnit.symbol}
                    </td>
                    <td className="py-2.5 px-4 text-slate-600">
                      {formatResultNumber(convertedVal, 4)} {config.toUnit.symbol}
                    </td>
                    <td className="py-2.5 px-4 text-right text-xs text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity">
                      Load in converter →
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </section>

      {/* Content Section 5: Frequently Asked Questions */}
      <section className="mb-10 bg-white rounded-xl p-6 border border-slate-200/80 shadow-xs">
        <h2 className="text-lg sm:text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
          <HelpCircle className="w-5 h-5 text-blue-600" />
          <span>Frequently Asked Questions</span>
        </h2>
        <div className="divide-y divide-slate-200 space-y-4">
          {config.faqs.map((faq, i) => (
            <div key={i} className={i > 0 ? 'pt-4' : ''}>
              <h3 className="font-semibold text-slate-900 text-sm sm:text-base mb-1.5">
                {faq.question}
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Content Section 6: Related Conversions */}
      <section className="bg-slate-100/70 rounded-xl p-6 border border-slate-200">
        <h2 className="text-base sm:text-lg font-bold text-slate-900 mb-3">
          Related Unit Conversions
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5 text-sm">
          {/* Reverse conversion link */}
          <button
            onClick={() => onNavigate(`/${config.reverseSlug}/`)}
            className="p-3 bg-white hover:bg-blue-50 border border-slate-200 rounded-lg text-left text-slate-700 hover:text-blue-700 transition-colors flex items-center justify-between cursor-pointer group shadow-2xs"
          >
            <div>
              <div className="font-semibold text-xs">Reverse Conversion</div>
              <div className="text-sm font-bold text-slate-900">
                {config.toUnit.pluralName} to {config.fromUnit.pluralName}
              </div>
            </div>
            <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-blue-600 group-hover:translate-x-0.5 transition-all" />
          </button>

          {/* Sibling related conversions */}
          {config.relatedSlugs
            .filter((s) => s !== config.reverseSlug)
            .map((slug) => (
              <button
                key={slug}
                onClick={() => onNavigate(`/${slug}/`)}
                className="p-3 bg-white hover:bg-blue-50 border border-slate-200 rounded-lg text-left text-slate-700 hover:text-blue-700 transition-colors flex items-center justify-between cursor-pointer group shadow-2xs"
              >
                <div>
                  <div className="font-semibold text-xs text-slate-500 capitalize">{config.categoryName}</div>
                  <div className="text-sm font-bold text-slate-900 capitalize">
                    {slug.replace(/-/g, ' ')}
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-blue-600 group-hover:translate-x-0.5 transition-all" />
              </button>
            ))}

          {/* Currency converter cross-link */}
          <button
            onClick={() => onNavigate('/currency-converter')}
            className="p-3 bg-white hover:bg-blue-50 border border-slate-200 rounded-lg text-left text-slate-700 hover:text-blue-700 transition-colors flex items-center justify-between cursor-pointer group shadow-2xs"
          >
            <div>
              <div className="font-semibold text-xs text-emerald-600">Financial Tool</div>
              <div className="text-sm font-bold text-slate-900">
                Live Currency Converter
              </div>
            </div>
            <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-blue-600 group-hover:translate-x-0.5 transition-all" />
          </button>
        </div>
      </section>
    </div>
  );
};
