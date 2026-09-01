import ogImage from "@/assets/og-image.png";

export const siteConfig = {
  name: "FabLab Cottbus e.V.",
  description:
    "Die Mitmachwerkstatt in Cottbus",
  url: "https://fablab-cottbus.de/",
  lang: "de",
  locale: "de_DE",
  author: "FabLab Cottbus e.V.",
  ogImage: ogImage,
  socialLinks: {
    // twitter: "https://twitter.com",
    github: "https://github.com/fablabcb",
    // discord: "https://discord.com",
    community: "https://community.fablab-cottbus.de/",
  },
  navLinks: [
    { text: "Home", href: "/" },
    { text: "Termine", href: "/termine" },
    { text: "Mitmachen", href: "/mitmachen" },
    { text: "Angebote", href: "/angebote" },
    { text: "Blog", href: "/blog" },
    { text: "About", href: "/about" },
    // { text: "Contact", href: "/contact" },
    // { text: "Widgets", href: "/widgets" },
  ],
};
