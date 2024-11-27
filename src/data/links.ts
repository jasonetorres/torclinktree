export interface Link {
  title: string;
  url: string;
  description?: string;
  logoUrl?: string; // Added logoUrl property
}

export const links: Link[] = [
  {
    title: 'Torc | Access top-tier enterprise software developers',
    url: 'https://www.torc.dev/',
    description: 'main company site',
    logoUrl: 'https://example.com/logo-torc.png', // Example logo URL
  },
  {
    title: 'Torc.dev upcoming events | Guild ',
    url: 'https://guild.host/torc-dev/events',
    description: 'featured events for the community',
    logoUrl: 'https://example.com/logo-guild.png', // Example logo URL
  }
];