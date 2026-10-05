import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { SearchModal } from './components/SearchModal';
import { AdSlot } from './components/AdSlot';
import { HomePage } from './pages/HomePage';
import { UniversalConverter } from './components/UniversalConverter';
import { CurrencyConverter } from './components/CurrencyConverter';
import { LegalPages } from './pages/LegalPages';
import { NotFoundPage } from './pages/NotFoundPage';
import { getConverterBySlug, CONVERTERS } from './data/convertersData';
import { updateSEO } from './utils/seo';

export default function App() {
  const [currentPath, setCurrentPath] = useState<string>(() => {
    if (typeof window !== 'undefined') {
      return window.location.pathname || '/';
    }
    return '/';
  });
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  // Normalize path (ensure leading slash, strip multiple slashes, keep trailing slash for matching)
  const normalizedPath = currentPath === '' ? '/' : currentPath;
  const pathWithoutSlashes = normalizedPath.replace(/^\/+|\/+$/g, '');

  const navigate = (url: string) => {
    let target = url;
    if (!target.startsWith('/')) target = `/${target}`;
    if (target !== '/' && !target.endsWith('/')) target = `${target}/`;

    if (typeof window !== 'undefined') {
      window.history.pushState(null, '', target);
      setCurrentPath(target);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname || '/');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Update dynamic SEO on every route change
  useEffect(() => {
    // 1. Home
    if (pathWithoutSlashes === '') {
      updateSEO({
        title: 'UnitConvert Hub — Simple Conversions. Clear Results.',
        description:
          'Convert weight, length, temperature, time, volume, and currency quickly and accurately with clean, instant unit converters and live calculation formulas.',
        canonicalPath: '/',
        structuredData: {
          '@context': 'https://schema.org',
          '@type': 'WebApplication',
          name: 'UnitConvert Hub',
          url: 'https://unitconvert-hub.online/',
          description:
            'Free instant unit conversion calculators for weight, length, temperature, time, volume, and currency.',
          applicationCategory: 'UtilityApplication',
          operatingSystem: 'All',
          offers: {
            '@type': 'Offer',
            price: '0',
            priceCurrency: 'USD'
          }
        }
      });
      return;
    }

    // 2. Currency Converter
    if (pathWithoutSlashes === 'currency-converter') {
      updateSEO({
        title: 'Currency Converter — Live Exchange Rate Calculator',
        description:
          'Convert currencies using current exchange-rate data. Compare exchange rates and calculate the value of money in different currencies.',
        canonicalPath: '/currency-converter/',
        structuredData: {
          '@context': 'https://schema.org',
          '@type': 'WebApplication',
          name: 'Currency Converter — UnitConvert Hub',
          applicationCategory: 'FinanceApplication',
          operatingSystem: 'All',
          description:
            'Live exchange rate calculator supporting USD, EUR, GBP, CAD, AUD, JPY, CHF, CNY, INR, AED, SAR, and DJF.',
          offers: {
            '@type': 'Offer',
            price: '0',
            priceCurrency: 'USD'
          }
        }
      });
      return;
    }

    // 3. Category overview routes (e.g. /weight-converters/)
    if (pathWithoutSlashes.endsWith('-converters')) {
      const catName = pathWithoutSlashes.replace('-converters', '');
      const capitalized = catName.charAt(0).toUpperCase() + catName.slice(1);
      updateSEO({
        title: `${capitalized} Converters — UnitConvert Hub`,
        description: `Explore accurate and fast ${catName} conversion calculators. Instant formulas, conversion tables, and clear explanations.`,
        canonicalPath: `/${pathWithoutSlashes}/`
      });
      return;
    }

    // 4. Standard Unit Converters
    const converterConfig = getConverterBySlug(pathWithoutSlashes);
    if (converterConfig) {
      const faqSchema = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: converterConfig.faqs.map((faq) => ({
          '@type': 'Question',
          name: faq.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: faq.answer
          }
        }))
      };

      const appSchema = {
        '@context': 'https://schema.org',
        '@type': 'WebApplication',
        name: converterConfig.seoTitle,
        applicationCategory: 'UtilityApplication',
        operatingSystem: 'All',
        description: converterConfig.metaDescription,
        offers: {
          '@type': 'Offer',
          price: '0',
          priceCurrency: 'USD'
        }
      };

      updateSEO({
        title: converterConfig.seoTitle,
        description: converterConfig.metaDescription,
        canonicalPath: converterConfig.url,
        structuredData: [appSchema, faqSchema]
      });
      return;
    }

    // 5. Legal & Company Pages
    if (pathWithoutSlashes === 'about') {
      updateSEO({
        title: 'About Us — UnitConvert Hub',
        description:
          'Learn about the mission, engineering philosophy, and mathematical standards behind UnitConvert Hub.',
        canonicalPath: '/about/'
      });
      return;
    }

    if (pathWithoutSlashes === 'contact') {
      updateSEO({
        title: 'Contact Us — UnitConvert Hub',
        description:
          'Get in touch with the UnitConvert Hub development team for inquiries, bug reports, and formula verifications.',
        canonicalPath: '/contact/'
      });
      return;
    }

    if (pathWithoutSlashes === 'privacy-policy') {
      updateSEO({
        title: 'Privacy Policy — UnitConvert Hub',
        description:
          'Our commitment to user privacy. We do not store or track your conversion data.',
        canonicalPath: '/privacy-policy/'
      });
      return;
    }

    if (pathWithoutSlashes === 'terms') {
      updateSEO({
        title: 'Terms of Service — UnitConvert Hub',
        description:
          'Terms and conditions for utilizing UnitConvert Hub conversion calculators and utilities.',
        canonicalPath: '/terms/'
      });
      return;
    }

    if (pathWithoutSlashes === 'disclaimer') {
      updateSEO({
        title: 'Disclaimer & Financial Notice — UnitConvert Hub',
        description:
          'Important disclaimers regarding currency exchange rates and mathematical calculation models.',
        canonicalPath: '/disclaimer/'
      });
      return;
    }

    // 6. 404
    updateSEO({
      title: 'Page Not Found — UnitConvert Hub',
      description: "The page you're looking for doesn't exist or may have moved.",
      canonicalPath: normalizedPath
    });
  }, [pathWithoutSlashes, normalizedPath]);

  // Route Rendering
  let mainContent: React.ReactNode;

  if (pathWithoutSlashes === '') {
    mainContent = <HomePage onNavigate={navigate} onOpenSearch={() => setIsSearchOpen(true)} />;
  } else if (pathWithoutSlashes === 'currency-converter') {
    mainContent = <CurrencyConverter onNavigate={navigate} />;
  } else if (pathWithoutSlashes.endsWith('-converters')) {
    // Category landing page: route to category or home
    mainContent = <HomePage onNavigate={navigate} onOpenSearch={() => setIsSearchOpen(true)} />;
  } else if (pathWithoutSlashes === 'about') {
    mainContent = <LegalPages type="about" onNavigate={navigate} />;
  } else if (pathWithoutSlashes === 'contact') {
    mainContent = <LegalPages type="contact" onNavigate={navigate} />;
  } else if (pathWithoutSlashes === 'privacy-policy') {
    mainContent = <LegalPages type="privacy" onNavigate={navigate} />;
  } else if (pathWithoutSlashes === 'terms') {
    mainContent = <LegalPages type="terms" onNavigate={navigate} />;
  } else if (pathWithoutSlashes === 'disclaimer') {
    mainContent = <LegalPages type="disclaimer" onNavigate={navigate} />;
  } else {
    const config = getConverterBySlug(pathWithoutSlashes);
    if (config) {
      mainContent = <UniversalConverter config={config} onNavigate={navigate} />;
    } else {
      mainContent = <NotFoundPage onNavigate={navigate} onOpenSearch={() => setIsSearchOpen(true)} />;
    }
  }

  return (
    <div className="flex flex-col min-h-screen bg-slate-50 text-slate-900">
      <Header
        currentUrl={normalizedPath}
        onNavigate={navigate}
        onOpenSearch={() => setIsSearchOpen(true)}
      />

      {/* Ad slot placeholder (clean, unobtrusive) */}
      <AdSlot slotName="header-banner" />

      <main className="flex-1">
        {mainContent}
      </main>

      <AdSlot slotName="footer-banner" />

      <Footer onNavigate={navigate} />

      {/* Fast Global Search Modal */}
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onSelect={navigate}
      />
    </div>
  );
}
