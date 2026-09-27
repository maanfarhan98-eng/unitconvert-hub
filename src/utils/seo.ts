export interface SEOProps {
  title: string;
  description: string;
  canonicalPath: string;
  ogType?: string;
  structuredData?: object | object[];
}

export function updateSEO({
  title,
  description,
  canonicalPath,
  ogType = 'website',
  structuredData,
}: SEOProps) {
  if (typeof document === 'undefined') return;

  // 1. Title
  document.title = title;

  // 2. Meta description
  let metaDesc = document.querySelector('meta[name="description"]');
  if (!metaDesc) {
    metaDesc = document.createElement('meta');
    metaDesc.setAttribute('name', 'description');
    document.head.appendChild(metaDesc);
  }
  metaDesc.setAttribute('content', description);

  // 3. Canonical URL
  const baseUrl = 'https://unitconverthub.com';
  const fullCanonicalUrl = `${baseUrl}${canonicalPath.startsWith('/') ? canonicalPath : `/${canonicalPath}`}`;

  let linkCanonical = document.querySelector('link[rel="canonical"]');
  if (!linkCanonical) {
    linkCanonical = document.createElement('link');
    linkCanonical.setAttribute('rel', 'canonical');
    document.head.appendChild(linkCanonical);
  }
  linkCanonical.setAttribute('href', fullCanonicalUrl);

  // 4. OpenGraph
  setMetaTag('property', 'og:title', title);
  setMetaTag('property', 'og:description', description);
  setMetaTag('property', 'og:url', fullCanonicalUrl);
  setMetaTag('property', 'og:type', ogType);

  // 5. Twitter
  setMetaTag('name', 'twitter:title', title);
  setMetaTag('name', 'twitter:description', description);

  // 6. JSON-LD structured data
  const existingJsonLd = document.querySelectorAll('script[data-seo-jsonld="true"]');
  existingJsonLd.forEach((el) => el.remove());

  if (structuredData) {
    const dataList = Array.isArray(structuredData) ? structuredData : [structuredData];
    dataList.forEach((data) => {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.setAttribute('data-seo-jsonld', 'true');
      script.text = JSON.stringify(data);
      document.head.appendChild(script);
    });
  }
}

function setMetaTag(attrName: 'name' | 'property', attrValue: string, content: string) {
  let tag = document.querySelector(`meta[${attrName}="${attrValue}"]`);
  if (!tag) {
    tag = document.createElement('meta');
    tag.setAttribute(attrName, attrValue);
    document.head.appendChild(tag);
  }
  tag.setAttribute('content', content);
}
