import { defineUserConfig, defaultTheme } from 'vuepress'
import { searchPlugin } from '@vuepress/plugin-search'

export default defineUserConfig({
    lang: 'zh-CN',
    title: 'mini-nestjs-docs',
    description: 'Translation and refinement of the official nestjs documentation ',
    theme: defaultTheme({
        editLink:false,
        sidebar: [{
            text: '指南',
            children: [
                '/',
                '/provider',
            ],
        }],
        navbar: [{
            text: '原文地址',
            link: 'https://docs.nestjs.com/',
        }, {
            text: '文档仓库',
            link: 'https://github.com/ProlanJR/mini-nestjs-docs'
        },{
            text:'Deploy',
            link:'https://app.netlify.com/teams/prolanjr/overview'
        }
        ]
    }),
    plugins: [
        searchPlugin({
            hotKeys: [{
                shift: true,
                key: 'S'
            }],
            locales: {
                '/': {
                    placeholder: 'Search',
                },
                '/zh/': {
                    placeholder: '搜索文档',
                },
            },
        }),
    ],
})
