import Script from "next/script";

export default function SchemaMarkup() {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Watcon International",
    "image": "https://watcon.co.in/logo2.png", 
    "@id": "https://watcon.co.in",
    "url": "https://watcon.co.in",
    "telephone": "+91-99998-39999",
    "email": "adit@watcon.net",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "343, Mehrauli-Gurgaon Rd, Sultanpur",
      "addressLocality": "New Delhi",
      "addressRegion": "Delhi",
      "postalCode": "110030",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 28.4975,
      "longitude": 77.1610
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ],
      "opens": "11:00",
      "closes": "19:00"
    },
    "sameAs": [
      "https://www.facebook.com/watcon",
      "https://www.instagram.com/watcon",
      "https://www.linkedin.com/company/watcon"
    ],
    "areaServed": {
      "@type": "Country",
      "name": "India"
    },
    "priceRange": "$$$$"
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Watcon International",
    "url": "https://watcon.co.in",
    "logo": "https://watcon.co.in/logo2.png",
    "description": "India's leading swimming pool, hydrotherapy and waterbody engineering company since 1972.",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-99998-39999",
      "contactType": "customer service",
      "areaServed": "IN",
      "availableLanguage": ["en", "hi"]
    }
  };

  const servicesSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Swimming Pool Construction",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Watcon International"
    },
    "areaServed": [
      { "@type": "City", "name": "New Delhi" },
      { "@type": "City", "name": "Mumbai" },
      { "@type": "City", "name": "Goa" },
      { "@type": "City", "name": "Bangalore" },
      { "@type": "Country", "name": "India" }
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Waterbody Engineering Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Luxury Swimming Pool Design"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Hydrotherapy Pool Installation"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Musical Fountain Engineering"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Cold Plunge Pool Manufacturing"
          }
        }
      ]
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Who is the best swimming pool builder in Delhi?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Watcon International is proud to be India's premium swimming pool design and construction company, specializing in luxury and Olympic-standard pools since 1972."
        }
      },
      {
        "@type": "Question",
        "name": "Who made the Oberoi's pool in India?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Watcon International has executed the luxury swimming pools and world-class water features for The Oberoi group, setting the benchmark for luxury hospitality aquatics."
        }
      },
      {
        "@type": "Question",
        "name": "Who did the pool and water body at DLF?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The premium waterbodies and pools at DLF Golf Course and major DLF residential projects including The Hibiscus and Beverly Park were designed and built by Watcon."
        }
      },
      {
        "@type": "Question",
        "name": "Where can I buy a cold plunge pool in India?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Watcon International provides professional-grade Cold Plunge Pools and Cryo Rooms for high-end recovery centers and luxury homes across India."
        }
      },
      {
        "@type": "Question",
        "name": "Who builds musical fountains in India?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Watcon International is an authorized Oase fountain partner and a leading designer of musical fountains for hotels and public landscapes in India."
        }
      }
    ]
  };

  return (
    <>
      <Script
        id="local-business-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <Script
        id="organization-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <Script
        id="services-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesSchema) }}
      />
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}
