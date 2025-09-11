export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "DoktorOnline",
    "description": "Prva platforma u BiH gdje pacijenti mogu pronaći doktore, pročitati recenzije i zakazati termine online",
    "url": "https://doktoronline.ba",
    "logo": "https://doktoronline.ba/medical-center-logo.png",
    "image": "https://doktoronline.ba/medical-center-logo.png",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "BA",
      "addressLocality": "Bosna i Hercegovina"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "43.8563",
      "longitude": "18.4131"
    },
    "areaServed": {
      "@type": "Country",
      "name": "Bosna i Hercegovina"
    },
    "serviceType": "Healthcare Platform",
    "priceRange": "Besplatno",
    "openingHours": "Mo-Su 00:00-23:59",
    "sameAs": [
      "https://www.facebook.com/doktoronline.ba",
      "https://www.instagram.com/doktoronline.ba"
    ],
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://doktoronline.ba/doktori?q={search_term_string}"
      },
      "query-input": "required name=search_term_string"
    }
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData, null, 2),
      }}
    />
  )
}