import React from 'react';
import { ArrowUpDown, Shield, Heart } from 'lucide-react';
import { CATEGORIES, CONVERTERS } from '../data/convertersData';

interface FooterProps {
  onNavigate: (url: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-12 pb-10 border-t border-slate-800 mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Top Grid: Brand & Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 pb-10 border-b border-slate-800 text-sm">
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <button
              onClick={() => onNavigate('/')}
              className="flex items-center gap-2.5 text-left text-white group cursor-pointer"
            >
              <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white">
                <ArrowUpDown className="w-4 h-4" />
              </div>
              <span className="font-bold text-lg text-white">
                UnitConvert<span className="text-blue-400">Hub</span>
              </span>
            </button>
            <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
              Simple Conversions. Clear Results. High-accuracy, fast online conversion calculators for weight, length, temperature, time, volume, and world currencies.
            </p>
            <div className="text-xs text-slate-500 space-y-1">
              <p>Designed for real users, students, engineers, travelers, and chefs.</p>
              <p>Adheres to international SI standards and legal conversion constants.</p>
            </div>
          </div>

          {/* Column 1: Weight & Length */}
          <div>
            <h3 className="font-semibold text-white text-xs uppercase tracking-wider mb-3">
              Weight & Length
            </h3>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => onNavigate('/kilograms-to-pounds/')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Kilograms to Pounds (kg to lb)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/pounds-to-kilograms/')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Pounds to Kilograms (lb to kg)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/ounces-to-grams/')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Ounces to Grams (oz to g)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/grams-to-ounces/')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Grams to Ounces (g to oz)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/centimeters-to-inches/')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Centimeters to Inches (cm to in)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/inches-to-centimeters/')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Inches to Centimeters (in to cm)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/feet-to-meters/')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Feet to Meters (ft to m)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/meters-to-feet/')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Meters to Feet (m to ft)
                </button>
              </li>
            </ul>
          </div>

          {/* Column 2: Temp, Time & Volume */}
          <div>
            <h3 className="font-semibold text-white text-xs uppercase tracking-wider mb-3">
              Temp, Time & Volume
            </h3>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => onNavigate('/celsius-to-fahrenheit/')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Celsius to Fahrenheit (°C to °F)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/fahrenheit-to-celsius/')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Fahrenheit to Celsius (°F to °C)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/minutes-to-hours/')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Minutes to Hours (min to hr)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/hours-to-minutes/')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Hours to Minutes (hr to min)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/seconds-to-minutes/')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Seconds to Minutes (sec to min)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/minutes-to-seconds/')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Minutes to Seconds (min to sec)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/liters-to-gallons/')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Liters to Gallons (US & Imperial)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/gallons-to-liters/')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Gallons to Liters (gal to L)
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Currency & Legal */}
          <div>
            <h3 className="font-semibold text-white text-xs uppercase tracking-wider mb-3">
              Currency & Company
            </h3>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => onNavigate('/currency-converter/')}
                  className="hover:text-white font-medium text-blue-400 transition-colors cursor-pointer"
                >
                  Live Currency Converter
                </button>
              </li>
              <li className="pt-2 border-t border-slate-800">
                <button
                  onClick={() => onNavigate('/about/')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/contact/')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Contact
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/privacy-policy/')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Privacy Policy
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/terms/')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Terms of Service
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/disclaimer/')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Disclaimer & Rates
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Disclaimer Note (Req 39) */}
        <div className="py-4 text-[11px] text-slate-500 leading-relaxed border-b border-slate-800">
          <p>
            <strong>Conversion & Currency Disclaimer:</strong> UnitConvert Hub provides calculation formulas and automated conversion utilities for informational and educational convenience. Currency rates fluctuate constantly and displayed figures represent reference mid-market exchange rates without markup; actual transaction rates offered by commercial banks, credit cards, or remittance brokers will differ.
          </p>
        </div>

        {/* Bottom Bar: Copyright & Attribution */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} UnitConvert Hub. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <span className="inline-flex items-center gap-1 text-slate-400">
              <Shield className="w-3.5 h-3.5 text-blue-400" />
              <span>Independent & Privacy-Focused</span>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
