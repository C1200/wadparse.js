// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: 'wadparse.js',
    tagline: 'A Wii WAD File parser for JavaScript',
    url: 'https://wadparse.c1200.cf',
    baseUrl: '/',
    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',
    //favicon: 'img/favicon',

    // GitHub pages deployment config.
    // If you aren't using GitHub pages, you don't need these.
    organizationName: 'C1200', // Usually your GitHub org/user name.
    projectName: 'wadparse.js', // Usually your repo name.

    // Even if you don't use internalization, you can use this field to set useful
    // metadata like html lang. For example, if your site is Chinese, you may want
    // to replace "en" with "zh-Hans".
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
                    sidebarPath: require.resolve('./sidebars.js'),
                    // Please change this to your repo.
                    // Remove this to remove the "edit this page" links.
                    editUrl:
                        'https://git.c1200.cf/wadparse.js/main/docusaurus/',
                },
                blog: {
                    showReadingTime: true,
                    // Please change this to your repo.
                    // Remove this to remove the "edit this page" links.
                    editUrl:
                        'https://git.c1200.cf/wadparse.js/main/docusaurus/',
                },
                theme: {
                    customCss: require.resolve('./src/css/custom.css'),
                },
            }),
        ],
    ],

    themeConfig:
        /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
        ({
            navbar: {
                title: 'wadparse.js',
                //logo: {
                //    alt: 'My Site Logo',
                //    src: 'img/logo.svg',
                //},
                items: [
                    {
                        type: 'doc',
                        docId: 'installation',
                        position: 'left',
                        label: 'Docs',
                    },
                    { to: '/blog', label: 'Blog', position: 'left' },
                    {
                        type: 'docsVersionDropdown',
                        position: 'right',
                    },
                    {
                        href: 'https://github.com/C1200/wadparse.js',
                        label: 'GitHub',
                        position: 'right',
                    },
                ],
            },
            footer: {
                style: 'dark',
                links: [
                    {
                        title: 'wadparse.js',
                        items: [
                            {
                                label: 'Docs',
                                href: '/docs/installation',
                            },
                            {
                                label: 'Help!',
                                href: 'https://discord.gg/m8UPDNhwzP',
                            },
                        ],
                    },
                    {
                        title: 'Ultimate Media',
                        items: [
                            {
                                label: 'Website',
                                href: 'https://ultimatemedia.js.org',
                            },
                            {
                                label: 'Github',
                                href: 'https://github.com/ultimatemediaorg',
                            },
                        ],
                    },
                    {
                        title: 'Developed by C1200',
                        items: [
                            {
                                label: 'Website',
                                href: 'https://c1200.js.org/',
                            },
                            {
                                label: 'More Links',
                                href: 'https://goum.cf/u/C1200',
                            },
                        ],
                    },
                ],
                copyright: `Copyright © ${new Date().getFullYear()} Ultimate Media`,
            },
            prism: {
                theme: lightCodeTheme,
                darkTheme: darkCodeTheme,
            },
        }),
};

module.exports = config;
