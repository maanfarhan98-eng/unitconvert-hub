import React, { useState } from 'react';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { Mail, CheckCircle, ShieldAlert, FileText, Scale } from 'lucide-react';

interface LegalPageProps {
  type: 'about' | 'contact' | 'privacy' | 'terms' | 'disclaimer';
  onNavigate: (url: string) => void;
}

export const LegalPages: React.FC<LegalPageProps> = ({ type, onNavigate }) => {
  const [contactSubmitted, setContactSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setContactSubmitted(true);
  };

  if (type === 'about') {
    return (
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-8">
        <Breadcrumbs items={[{ label: 'About Us' }]} onNavigate={onNavigate} />
        <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight mb-4">
          About UnitConvert Hub
        </h1>
        <div className="prose prose-slate max-w-none text-slate-600 text-sm sm:text-base leading-relaxed space-y-4">
          <p>
            <strong>UnitConvert Hub</strong> was founded with a singular, focused vision: <em>Simple Conversions. Clear Results.</em> In an internet cluttered with ad-heavy calculators, intrusive popups, and confusing interfaces, we set out to build the cleanest, fastest, and most dependable utility site for everyday and professional unit conversions.
          </p>
          <h2 className="text-lg font-bold text-slate-900 mt-6 mb-2">Our Mission</h2>
          <p>
            Whether you are a chef adapting a metric recipe, a student solving a physics assignment, a runner checking race pace, an engineer cross-referencing blueprints, or an international traveler exchanging currencies, you need immediate answers without unnecessary friction.
          </p>
          <h2 className="text-lg font-bold text-slate-900 mt-6 mb-2">Mathematical Accuracy</h2>
          <p>
            Every single conversion algorithm on UnitConvert Hub is grounded in official international standards:
          </p>
          <ul className="list-disc pl-5 space-y-1.5 text-sm">
            <li>International System of Units (SI) definitions for meters, kilograms, and seconds.</li>
            <li>International Yard and Pound Agreement (1959) legally establishing 1 pound = 0.45359237 kg and 1 inch = 2.54 cm.</li>
            <li>Explicit differentiation between US Liquid Gallons (3.78541 L) and Imperial Gallons (4.54609 L).</li>
            <li>Direct reference foreign exchange feeds for major global currencies.</li>
          </ul>
        </div>
      </div>
    );
  }

  if (type === 'contact') {
    return (
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-8">
        <Breadcrumbs items={[{ label: 'Contact Us' }]} onNavigate={onNavigate} />
        <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight mb-2">
          Contact UnitConvert Hub
        </h1>
        <p className="text-slate-600 text-sm mb-6">
          Have a question about a conversion formula, spotted an anomaly, or wish to suggest a new converter? Get in touch with our engineering team.
        </p>

        {contactSubmitted ? (
          <div className="p-6 bg-emerald-50 border border-emerald-200 rounded-xl text-emerald-900 flex items-start gap-3">
            <CheckCircle className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
            <div>
              <h3 className="font-bold text-base">Message Sent Successfully!</h3>
              <p className="text-xs sm:text-sm mt-1 text-emerald-800">
                Thank you for reaching out. A member of our calculation accuracy team will review your message and reply promptly.
              </p>
            </div>
          </div>
        ) : (
          <form onSubmit={handleContactSubmit} className="bg-white border border-slate-200 rounded-xl p-6 shadow-xs space-y-4">
            <div>
              <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                Your Name
              </label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-lg text-sm text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-600"
                placeholder="Jane Doe"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                Email Address
              </label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-lg text-sm text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-600"
                placeholder="jane@example.com"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                Message / Feedback
              </label>
              <textarea
                required
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-lg text-sm text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-600"
                placeholder="Describe your inquiry, suggestion, or question..."
              />
            </div>

            <button
              type="submit"
              className="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 active:scale-95 text-white font-semibold text-sm rounded-lg shadow-xs transition-all cursor-pointer"
            >
              Send Message
            </button>
          </form>
        )}
      </div>
    );
  }

  if (type === 'privacy') {
    return (
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-8">
        <Breadcrumbs items={[{ label: 'Privacy Policy' }]} onNavigate={onNavigate} />
        <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight mb-4">
          Privacy Policy
        </h1>
        <div className="text-slate-600 text-sm leading-relaxed space-y-4">
          <p>
            Last Updated: September 2026. At UnitConvert Hub, we respect your privacy. This policy outlines how information is handled when you use our website.
          </p>
          <h2 className="text-base font-bold text-slate-900 mt-4">1. Information We Do Not Collect</h2>
          <p>
            Our calculators execute client-side inside your web browser. We do not store, log, or transmit your individual numerical input values or calculation results to any remote database.
          </p>
          <h2 className="text-base font-bold text-slate-900 mt-4">2. Cookies & Local Storage</h2>
          <p>
            UnitConvert Hub does not use tracking cookies for core calculations. Standard browser session storage or local storage may be utilized solely for user preferences (such as remembering a unit selection or dark mode setting).
          </p>
          <h2 className="text-base font-bold text-slate-900 mt-4">3. Third-Party Services & Analytics</h2>
          <p>
            Standard privacy-friendly aggregate web metrics may be collected to assess page loading speed, bandwidth requirements, and search indexing status.
          </p>
        </div>
      </div>
    );
  }

  if (type === 'terms') {
    return (
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-8">
        <Breadcrumbs items={[{ label: 'Terms of Service' }]} onNavigate={onNavigate} />
        <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight mb-4">
          Terms of Service
        </h1>
        <div className="text-slate-600 text-sm leading-relaxed space-y-4">
          <p>
            By accessing or using UnitConvert Hub ("the Site"), you agree to be bound by these Terms of Service. If you do not agree with any part of these terms, please discontinue use of the site.
          </p>
          <h2 className="text-base font-bold text-slate-900 mt-4">1. Use of Conversion Tools</h2>
          <p>
            The tools, tables, formulas, and converters on this website are provided for personal, educational, and commercial convenience. You agree not to misuse, scrape maliciously, or intentionally disrupt the availability of the service.
          </p>
          <h2 className="text-base font-bold text-slate-900 mt-4">2. Accuracy and Reliability</h2>
          <p>
            While every effort has been made to verify that all mathematical algorithms match established international measurement benchmarks, calculations are provided "as is" without warranty of any kind.
          </p>
        </div>
      </div>
    );
  }

  // Disclaimer page (Requirement 39)
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-8">
      <Breadcrumbs items={[{ label: 'Disclaimer & Financial Notice' }]} onNavigate={onNavigate} />
      <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight mb-4">
        Disclaimer & Calculation Notice
      </h1>
      <div className="text-slate-600 text-sm leading-relaxed space-y-4">
        <div className="p-4 bg-amber-50 border border-amber-200 rounded-xl text-amber-900 flex items-start gap-3">
          <ShieldAlert className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
          <div>
            <h2 className="font-bold text-base">Currency Exchange Rate Disclaimer</h2>
            <p className="text-xs sm:text-sm mt-1">
              Exchange rates fluctuate continuously throughout the day. Displayed currency rates represent periodic mid-market benchmarks and are intended exclusively for reference.
            </p>
          </div>
        </div>

        <h2 className="text-base font-bold text-slate-900 mt-6">Financial & Banking Differences</h2>
        <p>
          The rates shown on UnitConvert Hub reflect wholesale interbank reference rates. When executing real monetary transactions—such as exchanging physical cash at an airport kiosk, making international purchases via credit card, or wiring money internationally—banks, payment networks (Visa, Mastercard, American Express), and brokerages apply profit margins, spreads, and transfer surcharges. As a result, the actual rate applied to your account will differ from the figures shown here.
        </p>

        <h2 className="text-base font-bold text-slate-900 mt-6">Engineering & Critical Applications</h2>
        <p>
          While our physical conversion formulas (weight, length, temperature, time, and volume) adhere strictly to SI specifications and standard definitions, UnitConvert Hub is intended for general reference and educational calculations. For mission-critical engineering, aviation navigation, medical dosing, or legal compliance, calculations should always be verified against certified primary instruments.
        </p>
      </div>
    </div>
  );
};
