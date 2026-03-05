const {
  NEXT_PUBLIC_SITE_URL = "https://faisalsaifi.com",
  NEXT_PUBLIC_SITE_NAME = "Faisal - Full Stack Developer",
  NEXT_PUBLIC_SITE_DESCRIPTION = "Experienced Full Stack Developer",
  NEXT_PUBLIC_TWITTER_URL = "https://twitter.com/faisalsaifiii",
  NEXT_PUBLIC_GITHUB_URL = "https://github.com/faisalsaifii",
  NEXT_PUBLIC_LINKEDIN_URL = "https://linkedin.com/in/faisalsaifii",
  NEXT_PUBLIC_AUTHOR_NAME = "Faisal",
  NEXT_PUBLIC_AUTHOR_EMAIL = "the.m.faisal.s@gmail.com",
  NEXT_PUBLIC_OG_IMAGE = "/og-image.png",
} = process.env;

export const siteConfig = {
  name: NEXT_PUBLIC_SITE_NAME,
  description: NEXT_PUBLIC_SITE_DESCRIPTION,
  url: NEXT_PUBLIC_SITE_URL,
  ogImage: `${NEXT_PUBLIC_SITE_URL}${NEXT_PUBLIC_OG_IMAGE}`,
  author: NEXT_PUBLIC_AUTHOR_NAME,
  email: NEXT_PUBLIC_AUTHOR_EMAIL,
  links: {
    twitter: NEXT_PUBLIC_TWITTER_URL,
    github: NEXT_PUBLIC_GITHUB_URL,
    linkedin: NEXT_PUBLIC_LINKEDIN_URL,
  },
} as const;

export const keywords = [
  "Full Stack Developer",
  "Product Engineer",
  "React Developer",
  "Next.js",
  "Python Developer",
  "Node.js",
  "TypeScript",
  "Web Development",
  "Software Engineering",
  "Frontend Development",
  "Backend Development",
  "DevOps",
  "Portfolio",
] as const;

export function generatePersonSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.author,
    url: siteConfig.url,
    image: siteConfig.ogImage,
    description: siteConfig.description,
    jobTitle: "Full Stack Developer",
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
