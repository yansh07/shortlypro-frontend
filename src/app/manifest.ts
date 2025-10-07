import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Shortly Pro — Shorten your URLs instantly",
    short_name: "Shortly Pro",
    description:
      "Create, manage, and share short links with analytics — free and fast.",
    start_url: "/",
    scope: "/",
    display: "standalone",
    orientation: "portrait",
    background_color: "#ffffff",
    theme_color: "#0f172a",
    id: "https://shortleepro.vercel.app/",
    icons: [
      {
        src: "/logo.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/logo.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
    lang: "en",
    categories: ["productivity", "utilities", "tools"],
    dir: "ltr",
  };
}
