import { PROFILE } from "@/data/portfolio";

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
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.author,
    url: siteConfig.url,
    image: siteConfig.ogImage,
    description: siteConfig.description,
    jobTitle: PROFILE.role,
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