import ogImage from "@/assets/og-image.png";

export const siteConfig = {
  name: "FabLab Cottbus e.V.",
  description:
    "Die Mitmachwerkstatt in Cottbus",
  url: "https://fablab-cottbus.de/",
  lang: "de",
  locale: "de_DE",
  author: "kr1sp1n",
  ogImage: ogImage,
  socialLinks: {
    // twitter: "https://twitter.com",
    github: "https://github.com/fablabcb",
    // discord: "https://discord.com",
  },
  navLinks: [
    { text: "Home", href: "/" },
    { text: "Angebote", href: "/services" },
    { text: "Blog", href: "/blog" },
    { text: "About", href: "/about" },
    // { text: "Contact", href: "/contact" },
    // { text: "Widgets", href: "/widgets" },
  ],
};
