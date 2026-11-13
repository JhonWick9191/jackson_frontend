import { useEffect } from 'react';

function setMetaTag(selector, attrName, attrValue, content) {
  let element = document.head.querySelector(selector);
  if (!element) {
    element = document.createElement('meta');
    element.setAttribute(attrName, attrValue);
    document.head.appendChild(element);
  }
  element.setAttribute('content', content);
}

export default function SeoHead({
  title,
  description,
  canonicalPath = '/',
  ogImage = 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1200&q=80',
  noIndex = false
}) {
  useEffect(() => {
    const fullTitle = title
      ? `${title} | Jackson Advertising`
      : 'Jackson Advertising | Signage, LED Screens & Display Solutions';
    document.title = fullTitle;

    const metaDesc =
      description ||
      'Full-service signage, AV and event production specialists: Signage Solutions, LED Screen Supply & Installation, Kiosk Design & Installation, Exhibition Stalls, Branding Solutions, and Promotional Items.';
    setMetaTag('meta[name="description"]', 'name', 'description', metaDesc);

    setMetaTag('meta[property="og:title"]', 'property', 'og:title', fullTitle);
    setMetaTag('meta[property="og:description"]', 'property', 'og:description', metaDesc);
    setMetaTag('meta[property="og:type"]', 'property', 'og:type', 'website');
    setMetaTag('meta[property="og:image"]', 'property', 'og:image', ogImage);

    const origin = window.location.origin;
    const canonicalUrl = `${origin}${canonicalPath}`;
    setMetaTag('meta[property="og:url"]', 'property', 'og:url', canonicalUrl);

    let canonicalLink = document.head.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', canonicalUrl);

    let robotsMeta = document.head.querySelector('meta[name="robots"]');
    if (noIndex) {
      if (!robotsMeta) {
        robotsMeta = document.createElement('meta');
        robotsMeta.setAttribute('name', 'robots');
        document.head.appendChild(robotsMeta);
      }
      robotsMeta.setAttribute('content', 'noindex, nofollow');
    } else if (robotsMeta) {
      robotsMeta.setAttribute('content', 'index, follow');
    }
  }, [title, description, canonicalPath, ogImage, noIndex]);

  return null;
}
