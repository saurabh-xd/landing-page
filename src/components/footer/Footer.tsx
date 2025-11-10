import React from "react";
import CtaSection from "./CtaSection";
import Link from "next/link";
import { Twitter, WifiPen, Linkedin, Github } from "lucide-react";

export const footerLinks = [
  {
    title: "Company",
    links: [
      { name: "About Us", href: "/about" },
      { name: "Careers", href: "/careers" },
      { name: "Contact", href: "/contact" },
      { name: "Press Kit", href: "/press" },
    ],
  },
  {
    title: "Product",
    links: [
      { name: "Features", href: "/features" },
      { name: "Pricing", href: "/pricing" },
      { name: "Testimonials", href: "/testimonials" },
      { name: "FAQs", href: "/faq" },
    ],
  },
  {
    title: "Resources",
    links: [
      { name: "Blog", href: "/blog" },
      { name: "Guides", href: "/guides" },
      { name: "Help Center", href: "/help" },
      { name: "Community", href: "/community" },
    ],
  },
  {
    title: "Legal",
    links: [
      { name: "Privacy Policy", href: "/privacy" },
      { name: "Terms of Service", href: "/terms" },
      { name: "Cookie Policy", href: "/cookies" },
    ],
  },
];

export const socialLinks = [
  {
    name: "X (Twitter)",
    href: "https://x.com/_saurabh__xd",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        fill="currentColor"
        viewBox="0 0 24 24"
        className="hover:text-neutral-100 transition-colors"
      >
        <path d="M18.244 2H21.5l-7.29 8.33L22.375 22H15.5l-5.3-6.418L4.17 22H.91l7.77-8.88L1.625 2H8.7l4.77 5.89L18.245 2Zm-1.206 18h1.996L7.06 4h-2.13L17.038 20Z" />
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/saurabh-garkoti-784191322",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        fill="currentColor"
        viewBox="0 0 24 24"
        className="hover:text-neutral-100 transition-colors"
      >
        <path d="M19 0h-14C2.239 0 0 2.239 0 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5V5c0-2.761-2.238-5-5-5zm-11 19H5V9h3v10zM6.5 7.732c-.967 0-1.75-.784-1.75-1.75S5.533 4.232 6.5 4.232s1.75.783 1.75 1.75-.783 1.75-1.75 1.75zM20 19h-3v-5.604c0-1.337-.027-3.056-1.863-3.056-1.864 0-2.15 1.454-2.15 2.955V19h-3V9h2.881v1.366h.041c.401-.758 1.379-1.555 2.837-1.555 3.037 0 3.604 2.001 3.604 4.601V19z"/>
      </svg>
    ),
  },
  {
    name: "GitHub",
    href: "https://github.com/saurabh-xd",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        fill="currentColor"
        viewBox="0 0 24 24"
        className="hover:text-neutral-100 transition-colors"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12 .5C5.648.5.5 5.648.5 12A11.5 11.5 0 0 0 8.207 23.33c.6.112.793-.26.793-.578 0-.285-.01-1.04-.016-2.04-3.34.724-4.045-1.61-4.045-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.73.083-.73 1.205.084 1.84 1.237 1.84 1.237 1.07 1.833 2.809 1.303 3.494.997.108-.776.419-1.304.762-1.604-2.665-.304-5.466-1.333-5.466-5.934 0-1.31.468-2.382 1.236-3.222-.124-.303-.536-1.525.117-3.176 0 0 1.008-.323 3.3 1.23a11.49 11.49 0 0 1 6 0c2.292-1.553 3.3-1.23 3.3-1.23.654 1.651.242 2.873.118 3.176.769.84 1.236 1.912 1.236 3.222 0 4.612-2.804 5.627-5.475 5.924.43.371.814 1.103.814 2.223 0 1.605-.014 2.9-.014 3.295 0 .32.19.694.8.576A11.502 11.502 0 0 0 23.5 12c0-6.352-5.148-11.5-11.5-11.5Z"
        />
      </svg>
    ),
  },
];


function Footer() {
  return (
    <section  className="bg-neutral-950 px-6 py-16 ">
      <CtaSection />

      {/* footer */}

      <div className="grid grid-cols-4 gap-8 text-neutral-50 mb-12 mt-16 border-t border-neutral-800 py-10">
        {footerLinks.map((item, index) => (
          <div key={index} className="flex flex-col">
            <h2 className="font-bold mb-4">{item.title}</h2>

            <div className="flex flex-col space-y-2">
              {item.links.map((link, i) => (
                <Link
                  className="text-neutral-400 hover:text-neutral-100"
                  key={i}
                  href={link.href}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-between">
        <div className="text-neutral-400 flex justify-center items-center gap-2 ">
          <WifiPen /> <p>© {new Date().getFullYear()} TypeZen, Inc.</p>
        </div>

        {/* social links */}

        <div className="flex gap-6">
          {socialLinks.map((links, index) => (
            <Link key={index} className="text-neutral-400 hover:text-neutral-100" href={links.href}>
              {links.icon }
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Footer;
