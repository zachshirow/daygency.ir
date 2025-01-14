export type Site = {
  TITLE: string
  DESCRIPTION: string
  EMAIL: string
  NUM_POSTS_ON_HOMEPAGE: number
  POSTS_PER_PAGE: number
  SITEURL: string
}

export type Link = {
  href: string
  label: string
}

export type Locale = {
  lang: string;
  langTag: string[];
}


export const LOCALE: Locale = {
  lang: "fa", // html lang code. Set this empty and default will be "en"
  langTag: ["fa-IR"], // BCP 47 Language Tags. Set this empty [] to use the environment default
}

export const SITE: Site = {
  TITLE: 'کافی نت دی',
  DESCRIPTION:
    'کافی نتی به وسعت جهان - کافی نت محله شما.',
  EMAIL: 'daynetcafe24@gmail.com',
  NUM_POSTS_ON_HOMEPAGE: 5,
  POSTS_PER_PAGE: 5,
  SITEURL: 'https://daynetcafe.ir',
}

export const NAV_LINKS: Link[] = [
  { href: '/blog', label: 'وبلاگ' },
  { href: '/services', label: 'خدمات' },
  { href: '/shop', label: 'فروشگاه' },
]

export const SOCIAL_LINKS: Link[] = [
  { href: 'https://github.com/daynetcafe.ir', label: 'GitHub' },
  { href: 'https://instagram.com', label: 'Instagram' },
  { href: 'daynetcafe24@gmail.com', label: 'Email' },
  { href: '/rss.xml', label: 'RSS' },
]
