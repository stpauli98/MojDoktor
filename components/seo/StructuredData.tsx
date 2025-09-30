export default function StructuredData() {
  const baseUrl = process.env.NEXT_PUBLIC_PRODUCTION_URL || "https://doktoronline.ba"

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "DoktorOnline",
    "description": "Prva platforma u BiH gdje pacijenti mogu pronaći doktore, pročitati recenzije i zakazati termine online",
    "url": baseUrl,
    "logo": `${baseUrl}/medical-center-logo.png`,
    "image": `${baseUrl}/medical-center-logo.png`,
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
      process.env.FACEBOOK_URL || "https://www.facebook.com/doktoronline.ba",
      process.env.INSTAGRAM_URL || "https://www.instagram.com/doktoronline.ba"
    ],
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": `${baseUrl}/doktori?q={search_term_string}`
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