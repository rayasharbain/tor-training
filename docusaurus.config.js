// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Tor Training Portal',
  tagline: 'Where Tor education happens.',
  favicon: 'img/favicon.ico',
  url: 'https://github.com',
  baseUrl: '/tor-training/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  organizationName: 'rayasharbain',
  projectName: 'tor-training',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  deploymentBranch: 'gh-pages',
  trailingSlash: false,

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
          showLastUpdateTime: true,
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
        },
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
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: '',
        logo: {
          alt: 'Tor logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Training Portal',
          },
          {
            href: 'https://blog.torproject.org',
            label: 'Blog',
            position: 'left'},
          {
            href: 'https://torproject.org',
            label: 'torproject.org',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Portal',
            items: [
              {
                label: 'Training Resources',
                to: '/docs/category/training-resources',
              },
              {
                label: 'Gudes for Trainers',
                to: '/docs/category/guides-for-trainers',
              },
              {
                label: 'Join our Community',
                to: '/docs/category/join-our-community',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Tor Project Forum',
                href: 'https://forum.torproject.org',
              },
              {
                label: 'Bluesky',
                href: 'https://bsky.app/profile/torproject.org',
              },
              {
                label: 'X',
                href: 'https://x.com/torproject',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                href: 'https://torproject.org/blog',
              },
              {
                label: 'GitLab',
                href: 'https://gitlab.torproject.org',
              },
            ],
          },
        ],
        copyright: `All text in this site is available under the Creative Commons Attribution-ShareAlike 4.0 License.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
