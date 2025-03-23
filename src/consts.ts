export type Site = {
  TITLE: string
  DESCRIPTION: string
  EMAIL: string
  NUM_POSTS_ON_HOMEPAGE: number
  POSTS_PER_PAGE: number
  SITEURL: string
  SERVICES: number 
  CUSTOMERS: number
  PROJECTS: number
  USDRATE: number
}

export type Link = {
  href: string
  label: string
}

export type Locale = {
  lang: string;
  langTag: string[];
}

export type REVIEW = {
  name: string;
  quote: string;
  rating: 1 | 2 | 3 | 4 | 5;
  image?: string;
  show: boolean;
}


export const LOCALE: Locale = {
  lang: "en", // html lang code. Set this empty and default will be "en"
  langTag: ["en-US"], // BCP 47 Language Tags. Set this empty [] to use the environment default
}

export const SITE: Site = {
  TITLE: 'Day Agency',
  DESCRIPTION:
    'The freelance agency you can rely on everyday.',
  EMAIL: 'daygency24@gmail.com',
  NUM_POSTS_ON_HOMEPAGE: 5,
  POSTS_PER_PAGE: 5,
  SITEURL: 'https://daygency.ir',
  SERVICES: 12, 
  CUSTOMERS: 181, 
  PROJECTS: 263, 
  USDRATE: 950000
}

export const NAV_LINKS: Link[] = [
  { href: '/blog', label: 'Blog' },
  { href: '/services', label: 'Services' },
  { href: '/shop', label: 'Shop' },
]

export const FOOTER_LINKS: Link[] = [
  {href: "/about", label: "About"},
  {href: "/blog", label: "Blog"},
  {href: "/services", label: "Services"},
  {href: "/shop", label: "Shop"},
  {href: "/tags", label: "Tags"},
]


export const SOCIAL_LINKS: Link[] = [
  { href: 'https://github.com/zachshirow/daygency.ir', label: 'GitHub' },
  { href: 'https://instagram.com/daygency', label: 'Instagram' },
  { href: 'daygency24@gmail.com', label: 'Email' },
  { href: '/rss.xml', label: 'RSS' },
]
