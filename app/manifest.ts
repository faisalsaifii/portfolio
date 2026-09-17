import { MetadataRoute } from "next";
import { siteConfig } from "@/lib/seo-config";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteConfig.name,
    short_name: "Faisal",
    description: siteConfig.description,
    start_url: "/",
    display: "standalone",
    background_color: "#000000",
    theme_color: "#000000",
    scope: "/",
    categories: ["portfolio", "technology"],
    icons: [
      {
        src: "/favicon.ico",
        sizes: "32x32",
        type: "image/x-icon",
      },
    ],
    screenshots: [
      {
        src: siteConfig.ogImage,
        type: "image/png",
        sizes: "1200x630",
        form_factor: "wide",
      },
    ],
  };
}
