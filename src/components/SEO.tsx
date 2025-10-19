import { useEffect } from "react";

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
  schemaData?: object;
}

const SEO = ({
  title = "Mamoe Gabhadiya - Premium African Herbal Products | Natural Health & Wellness Solutions",
  description = "Discover authentic African herbal products for health, wealth, beauty & traditional healing. Premium natural herbs from South Africa & Zimbabwe. Order online with WhatsApp delivery. Immune boosters, energy blends, prosperity herbs & more.",
  keywords = "african herbal products, natural herbs south africa, traditional medicine zimbabwe, herbal remedies, immune booster herbs, energy herbs, prosperity herbs, beauty herbs, natural healing, traditional african medicine, herbal supplements, organic herbs, natural health products, wellness herbs, medicinal plants, herbal tea, detox herbs, stress relief herbs, anti-inflammatory herbs, digestive herbs, sleep herbs, memory herbs, heart health herbs, blood pressure herbs, diabetes herbs, weight loss herbs, hair growth herbs, skin care herbs, anti-aging herbs, mamoe gabhadiya, herbal products online, buy herbs online, whatsapp herbal delivery",
  image = "/images/IMG_7213.webp",
  url = "https://mamoegabhadiya.com",
  type = "website",
  schemaData
}: SEOProps) => {
  
  useEffect(() => {
    // Set document title
    document.title = title;
    
    // Helper function to set or update meta tags
    const setMetaTag = (name: string, content: string, property = false) => {
      const attribute = property ? 'property' : 'name';
      let meta = document.querySelector(`meta[${attribute}="${name}"]`);
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute(attribute, name);
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', content);
    };

    const siteUrl = window.location.origin;
    const fullUrl = window.location.href;
    const fullImageUrl = image.startsWith('http') ? image : `${siteUrl}${image}`;

    // Primary Meta Tags
    setMetaTag('description', description);
    setMetaTag('keywords', keywords);
    setMetaTag('robots', 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1');
    setMetaTag('googlebot', 'index, follow');
    setMetaTag('language', 'English');
    setMetaTag('author', 'Mamoe Gabhadiya Herbal Products');
    setMetaTag('publisher', 'Mamoe Gabhadiya');
    
    // Open Graph
    setMetaTag('og:type', type, true);
    setMetaTag('og:url', fullUrl, true);
    setMetaTag('og:title', title, true);
    setMetaTag('og:description', description, true);
    setMetaTag('og:image', fullImageUrl, true);
    setMetaTag('og:site_name', 'Mamoe Gabhadiya', true);
    
    // Twitter
    setMetaTag('twitter:card', 'summary_large_image', true);
    setMetaTag('twitter:title', title, true);
    setMetaTag('twitter:description', description, true);
    setMetaTag('twitter:image', fullImageUrl, true);
    
    // Canonical URL
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = fullUrl;
    
    // Add structured data
    if (schemaData) {
      let script = document.querySelector('script[type="application/ld+json"]#page-schema');
      if (!script) {
        script = document.createElement('script');
        script.type = 'application/ld+json';
        script.id = 'page-schema';
        document.head.appendChild(script);
      }
      script.textContent = JSON.stringify(schemaData);
    }
    
    // Default organization schema
    let orgScript = document.querySelector('script[type="application/ld+json"]#org-schema');
    if (!orgScript) {
      orgScript = document.createElement('script');
      orgScript.type = 'application/ld+json';
      orgScript.id = 'org-schema';
      document.head.appendChild(orgScript);
      
      const orgSchema = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Mamoe Gabhadiya",
        "alternateName": "Mamoe Gabhadiya Herbal Products",
        "url": siteUrl,
        "logo": `${siteUrl}/images/IMG_7213.webp`,
        "description": "Premium African herbal products for natural health, wellness, beauty, and traditional healing solutions.",
        "foundingDate": "2020",
        "address": {
          "@type": "PostalAddress",
          "addressCountry": "ZA",
          "addressRegion": "Gauteng",
          "addressLocality": "Johannesburg"
        },
        "contactPoint": [
          {
            "@type": "ContactPoint",
            "telephone": "+27814687186",
            "contactType": "customer service",
            "areaServed": ["ZA", "ZW", "BW"],
            "availableLanguage": ["English"]
          },
          {
            "@type": "ContactPoint",
            "telephone": "+263718735172",
            "contactType": "customer service",
            "areaServed": "ZW",
            "availableLanguage": ["English"]
          }
        ],
        "sameAs": [
          "https://wa.me/27814687186",
          "https://wa.me/263718735172"
        ]
      };
      
      orgScript.textContent = JSON.stringify(orgSchema);
    }
  }, [title, description, keywords, image, url, type, schemaData]);

  return null; // This component doesn't render anything
};

export default SEO;
