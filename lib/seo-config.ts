import { EDUCATION, PROFILE, PROJECTS } from "@/data/portfolio";

const {
  NEXT_PUBLIC_SITE_URL = "https://faisalsaifi.com",
  NEXT_PUBLIC_TWITTER_URL = "https://twitter.com/faisalsaifiii",
  NEXT_PUBLIC_OG_IMAGE = "/opengraph-image.png",
} = process.env;

export const siteConfig = {
  name: `${PROFILE.name} — ${PROFILE.role}`,
  description: PROFILE.summary,
  url: NEXT_PUBLIC_SITE_URL,
  ogImage: `${NEXT_PUBLIC_SITE_URL}${NEXT_PUBLIC_OG_IMAGE}`,
  author: PROFILE.name,
  email: PROFILE.email,
  links: {
    twitter: NEXT_PUBLIC_TWITTER_URL,
    github: PROFILE.github,
    linkedin: PROFILE.linkedin,
  },
} as const;

export const keywords = [
  "Software Engineer",
  "Product Engineer",
  "Full Stack Developer",
  "React Developer",
  "Next.js",
  "TypeScript",
  "Python Developer",
  "Node.js",
  "Web Development",
  "Software Engineering",
  "Frontend Development",
  "Backend Development",
  "DevOps",
  "Portfolio",
] as const;

export function generatePersonSchema() {
  return {
    "@type": "Person",
    name: siteConfig.author,
    url: siteConfig.url,
    image: siteConfig.ogImage,
    description: siteConfig.description,
    jobTitle: PROFILE.role,
    worksFor: {
      "@type": "Organization",
      name: PROFILE.company,
      url: PROFILE.companyUrl,
    },
    alumniOf: EDUCATION.map((e) => ({
      "@type": "CollegeOrUniversity",
      name: e.school,
      url: e.url,
    })),
    address: {
      "@type": "PostalAddress",
      addressLocality: "Bengaluru, India",
    },
    email: siteConfig.email,
    sameAs: [
      siteConfig.links.twitter,
      siteConfig.links.github,
      siteConfig.links.linkedin,
    ],
    knowsAbout: [
      "React",
      "Next.js",
      "Python",
      "Node.js",
      "TypeScript",
      "PostgreSQL",
      "MongoDB",
      "Docker",
    ],
  };
}

export function generateProfilePageSchema() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@id": `${siteConfig.url}/#person`,
        ...generatePersonSchema(),
      },
      {
        "@type": "ProfilePage",
        "@id": `${siteConfig.url}/#profile`,
        url: siteConfig.url,
        name: siteConfig.name,
        description: siteConfig.description,
        dateModified: new Date().toISOString(),
        mainEntity: { "@id": `${siteConfig.url}/#person` },
      },
      {
        "@type": "ItemList",
        name: "Selected projects by Faisal Saifi",
        itemListElement: PROJECTS.map((p, i) => ({
          "@type": "ListItem",
          position: i + 1,
          url: p.url,
          name: p.name,
          image: `${siteConfig.url}${p.image}`,
          description: p.description,
        })),
      },
    ],
  };
}