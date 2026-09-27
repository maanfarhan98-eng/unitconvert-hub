import React from 'react';

interface AdSlotProps {
  slotName: 'header-banner' | 'in-content' | 'footer-banner' | 'sidebar';
  className?: string;
}

/**
 * AdSlot Component
 * 
 * Cleanly reserves space for responsive display advertising (e.g. Google AdSense, Adsterra, Mediavine)
 * without layout shifts (CLS) or interfering with converter interactions.
 * 
 * To activate live ads:
 * 1. Add your Google AdSense publisher script into index.html:
 *    <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXXXXXX" crossorigin="anonymous"></script>
 * 2. In this component, replace the placeholder with your <ins className="adsbygoogle" ... /> tag
 *    and trigger (adsbygoogle = window.adsbygoogle || []).push({});
 */
export const AdSlot: React.FC<AdSlotProps> = ({ slotName, className = '' }) => {
  // In production with an ad network configured, render the ad container.
  // When no ads are configured, we keep it subtle or non-intrusive.
  const showAdPlaceholder = false; // Toggle to true to preview ad container placements in testing

  if (!showAdPlaceholder) {
    return (
      <aside aria-label="Advertisement Container" className={`ad-slot-${slotName} hidden ${className}`} />
    );
  }

  return (
    <aside
      aria-label="Advertisement Placeholder"
      className={`my-6 mx-auto w-full max-w-4xl p-4 border border-dashed border-slate-300 rounded-lg bg-slate-50/50 text-center text-xs text-slate-400 select-none ${className}`}
    >
      <span className="font-medium uppercase tracking-wider text-[10px] text-slate-400 block mb-1">
        Sponsored Space ({slotName})
      </span>
      <p className="text-slate-400 text-xs">
        Replace this placeholder with your AdSense or ad network snippet.
      </p>
    </aside>
  );
};
