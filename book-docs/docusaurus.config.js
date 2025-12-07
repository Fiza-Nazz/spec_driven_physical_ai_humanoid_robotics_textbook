// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = { // ADDED THIS LINE
  title: 'Physical AI & Humanoid Robotics',
  tagline: 'Intelligent Machines in Action',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://your-book-domain.com', // Placeholder: Update with actual deployment URL
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'your-organization', // Placeholder: Update with your GitHub org/user name
  projectName: 'physical-ai-humanoid-robotics-book', // Usually your repo name.

  onBrokenLinks: 'throw',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: false, // Disable blog for a book-focused site
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg', // Placeholder: Update with actual social card image
      colorMode: {
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: 'Physical AI & Humanoid Robotics', // Re-enable and set title
        logo: {
          alt: 'Physical AI & Humanoid Robotics Logo',
          src: 'img/image1.png',
        },
        items: [
          {
            to: '/',
            label: 'Home',
            position: 'left',
          },
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Chapters',
          },
          {
            to: '/about',
            label: 'About',
            position: 'left',
          },
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
              {
                label: 'Introduction',
                to: '/docs/intro',
              },
              {
                label: 'Chapters', // Keeping chapters here as a primary doc link
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Social Profiles',
            items: [
              // Placeholder for Instagram as no specific URL provided
              {
                label: 'Instagram', 
                href: 'https://www.instagram.com/zii_tech_63?igsh=eDg5ZnA4ZmUyb3B6', // Updated with provided URL
              },
              {
                label: 'LinkedIn',
                href: 'https://www.linkedin.com/in/fiza-nazz-765241355/',
              },
              {
                label: 'X (Twitter)',
                href: 'https://x.com/FizaNazzx',
              },
              {
                label: 'GitHub', // Moved GitHub from 'More' to 'Social Profiles' as it's a social profile
                href: 'https://github.com/Fiza-Nazz',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'About',
                to: '/about',
              },
              // Add the requested credit here
              {
                label: 'Built with Fiza Nazz and Docusaurus',
                href: 'https://docusaurus.io/', // Link to Docusaurus or Fiza's profile? Link to Docusaurus since it's "and Docusaurus"
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
    }),
}; // ADDED THIS LINE

export default config;