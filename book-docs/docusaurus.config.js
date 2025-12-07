// @ts-check
import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Physical AI & Humanoid Robotics',
  tagline: 'Intelligent Machines in Action',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  // 🔥 Correct production URL (used by sitemap / canonical links)
  url: 'https://spec-driven-physical-ai-humanoid-ro-blue.vercel.app',

  baseUrl: '/',

  organizationName: 'your-organization',
  projectName: 'physical-ai-humanoid-robotics-book',

  onBrokenLinks: 'throw',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.js',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      },
    ],
  ],

  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      respectPrefersColorScheme: true,
    },

    navbar: {
      title: 'Physical AI & Humanoid Robotics',
      logo: {
        alt: 'Physical AI & Humanoid Robotics Logo',
        src: 'img/image1.png',
      },
      items: [
        { to: '/', label: 'Home', position: 'left' },
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Chapters',
        },
        { to: '/about', label: 'About', position: 'left' },
        {
          href: 'https://github.com/Fiza-Nazz',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },

    footer: {
      style: 'light',
      links: [
        {
          title: 'Docs',
          items: [
            { label: 'Introduction', to: '/docs/intro' },
            { label: 'Chapters', to: '/docs/intro' },
          ],
        },
        {
          title: 'Social Profiles',
          items: [
            {
              label: 'Instagram',
              href: 'https://www.instagram.com/zii_tech_63?igsh=eDg5ZnA4ZmUyb3B6',
            },
            { label: 'LinkedIn', href: 'https://www.linkedin.com/in/fiza-nazz-765241355/' },
            { label: 'X (Twitter)', href: 'https://x.com/FizaNazzx' },
            { label: 'GitHub', href: 'https://github.com/Fiza-Nazz' },
          ],
        },
        {
          title: 'More',
          items: [
            { label: 'About', to: '/about' },
            {
              label: 'Built with Fiza Nazz and Docusaurus',
              href: 'https://docusaurus.io/',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Physical AI and Humanoid Robotics Book. Built with ❤️ by Fiza Nazz and Docusaurus.`,
    },

    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  },
};

export default config;
