export function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": "The Open Book",
    "alternateName": "The Open Book English Communication Training",
    "url": "https://theopenbookhira.com",
    "logo": "https://theopenbookhira.com/img/logo.webp",
    "description": "Expert English communication training institute in Kozhikode, Kerala offering IELTS, Spoken English, Business English, and Personality Development courses.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Meenchanda",
      "addressLocality": "Kozhikode",
      "addressRegion": "Kerala",
      "postalCode": "673018",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "11.2588",
      "longitude": "75.7804"
    },
    "telephone": "+91-88934-67437",
    "email": "contact@theopenbook.in",
    "sameAs": [
      "https://www.facebook.com/theopenbookkzd",
      "https://www.instagram.com/theopenbookkzd",
      "https://www.youtube.com/@theopenbookkzd"
    ],
    "founder": {
      "@type": "Person",
      "name": "Mishahira Arakkal",
      "jobTitle": "Founder & Expert English Trainer"
    },
    "areaServed": {
      "@type": "City",
      "name": "Kozhikode"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "English Communication Courses",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Course",
            "name": "IELTS Preparation",
            "description": "Comprehensive IELTS coaching for all modules"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Course",
            "name": "Spoken English",
            "description": "Fluency development and communication skills"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Course",
            "name": "Business English",
            "description": "Professional English for workplace communication"
          }
        }
      ]
    }
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "The Open Book",
    "image": "https://theopenbookhira.com/img/logo.webp",
    "@id": "https://theopenbookhira.com",
    "url": "https://theopenbookhira.com",
    "telephone": "+91-88934-67437",
    "priceRange": "₹₹",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Meenchanda",
      "addressLocality": "Kozhikode",
      "addressRegion": "Kerala",
      "postalCode": "673018",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "11.2588",
      "longitude": "75.7804"
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        "opens": "09:00",
        "closes": "18:00"
      }
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "150"
    }
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export function WebsiteSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "The Open Book",
    "url": "https://theopenbookhira.com",
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://theopenbookhira.com/courses?search={search_term_string}"
      },
      "query-input": "required name=search_term_string"
    }
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export function BreadcrumbSchema({ items }: { items: Array<{ name: string; url: string }> }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url
    }))
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export function CourseSchema({ courses }: { courses: Array<{
  name: string;
  description: string;
  provider: string;
  duration?: string;
  price?: string;
}> }) {
  const schema = courses.map(course => ({
    "@context": "https://schema.org",
    "@type": "Course",
    "name": course.name,
    "description": course.description,
    "provider": {
      "@type": "Organization",
      "name": course.provider,
      "url": "https://theopenbookhira.com"
    },
    "hasCourseInstance": {
      "@type": "CourseInstance",
      "courseMode": "online",
      "courseWorkload": course.duration
    },
    "offers": {
      "@type": "Offer",
      "category": "Education",
      "priceCurrency": "INR",
      "price": course.price || "Contact for pricing"
    }
  }))

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export function FAQSchema({ faqs }: { faqs: Array<{ question: string; answer: string }> }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

