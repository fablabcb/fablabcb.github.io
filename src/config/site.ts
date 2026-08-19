import ogImage from "@/assets/og-image.png";

export const siteConfig = {
  name: "FabLab Cottbus e.V.",
  description:
    "Starter template optimized for SEO and performance. A solid foundation to start your projects with best practices.",
  url: "https://fablab-cottbus.de/",
  lang: "de",
  locale: "de_DE",
  author: "kr1sp1n",
  twitter: "@Devgelo",
  ogImage: ogImage,
  socialLinks: {
    // twitter: "https://twitter.com",
    github: "https://github.com/devgelo-labs/astro-starter-pro",
    // discord: "https://discord.com",
    community: "https://community.fablab-cottbus.de/",
  },
  navLinks: [
    { text: "Home", href: "/" },
    // { text: "Services", href: "/services" },
    { text: "Mitmachen", href: "/mitmachen" },
    { text: "Angebote", href: "/angebote" },
    { text: "Blog", href: "/blog" },
    { text: "About", href: "/about" },
    // { text: "Contact", href: "/contact" },
    // { text: "Widgets", href: "/widgets" },
  ],
};
