import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Staking',
      links: [
        {
          text: 'Bitcoin Staking',
          href: getPermalink('/bitcoin/btc.1'),
        },
        {
          text: 'Stake ETH',
          href: getPermalink('/ethereum/eth.1'),
        },
        {
          text: 'Stake BNB',
          href: getPermalink('/binance/bnb.1'),
        },
        {
          text: 'Stake SOL',
          href: getPermalink('/solana/sol.1'),
        },
        {
          text: 'Stake LINK',
          href: getPermalink('/chainlink/link.1'),
        },
      ],
    },
    {
      text: 'Products',
      links: [
        {
          text: 'Stocks',
          href: getPermalink('/stocks/s.1'),
        },
        {
          text: 'Liquid',
          href: getPermalink('/liquid/l.1'),
        },
        {
          text: 'MEME Coin',
          href: getPermalink('/pricing'),
        },
        {
          text: 'About us',
          href: getPermalink('/about'),
        },
        {
          text: 'Contact',
          href: getPermalink('/contact'),
        },
        {
          text: 'Terms',
          href: getPermalink('/terms'),
        },
        {
          text: 'Privacy policy',
          href: getPermalink('/privacy'),
        },
      ],
    },
    {
      text: 'Landing',
      links: [
        {
          text: 'Lead Generation',
          href: getPermalink('/landing/lead-generation'),
        },
        {
          text: 'Long-form Sales',
          href: getPermalink('/landing/sales'),
        },
        {
          text: 'Click-Through',
          href: getPermalink('/landing/click-through'),
        },
        {
          text: 'Product Details (or Services)',
          href: getPermalink('/landing/product'),
        },
        {
          text: 'Coming Soon or Pre-Launch',
          href: getPermalink('/landing/pre-launch'),
        },
        {
          text: 'Subscription',
          href: getPermalink('/landing/subscription'),
        },
      ],
    },
    {
      text: 'Protocols',
      links: [
        {
          text: 'Ethereum',
            href: getPermalink('/protocol.eth/eth.1'),
        },
        {
          text: 'Binance',
         href: getPermalink('/protocol.bnb/bnb.1'),
        },
        {
          text: 'Starknet',
           href: getPermalink('/protocol.strk/strk.1'),
        },
        {
          text: 'Polygon',
           href: getPermalink('/protocol.pol/pol.1'),
        },
        {
          text: 'All Protocols',
           href: getPermalink('/all/protocol.1'),
        },
      ],
    },
    {
      text: 'Exchange',
      href: '/home/exchange',
    },
  ],
  actions: [{ text: 'MEME COIN', href: '/meme/coin.1', target: '' }],
};

export const footerData = {
  links: [
    {
      title: 'Product',
      links: [
        { text: 'Features', href: '#' },
        { text: 'Security', href: '#' },
        { text: 'Team', href: '#' },
        { text: 'Enterprise', href: '#' },
        { text: 'Customer stories', href: '#' },
        { text: 'Pricing', href: '#' },
        { text: 'Resources', href: '#' },
      ],
    },
    {
      title: 'Platform',
      links: [
        { text: 'Developer API', href: '#' },
        { text: 'Partners', href: '#' },
        { text: 'Atom', href: '#' },
        { text: 'Electron', href: '#' },
        { text: 'AstroWind Desktop', href: '#' },
      ],
    },
    {
      title: 'Support',
      links: [
        { text: 'Docs', href: '#' },
        { text: 'Community Forum', href: '#' },
        { text: 'Professional Services', href: '#' },
        { text: 'Skills', href: '#' },
        { text: 'Status', href: '#' },
      ],
    },
    {
      title: 'Company',
      links: [
        { text: 'About', href: '#' },
        { text: 'Blog', href: '#' },
        { text: 'Careers', href: '#' },
        { text: 'Press', href: '#' },
        { text: 'Inclusion', href: '#' },
        { text: 'Social Impact', href: '#' },
        { text: 'Shop', href: '#' },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('#') },
    { text: 'Privacy Policy', href: getPermalink('#') },
  ],
  socialLinks: [
    { ariaLabel: 'X', icon: 'tabler:brand-x', href: '#' },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: '#' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: '#' },
    { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/' },
  ],
  footNote: `
    Made by <a class="text-blue-600 underline dark:text-muted" href="https://github.com/"> Rey</a> · 2026 Pilaris.xyz  All Rights Reserved.
  `,
};
