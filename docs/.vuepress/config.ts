import { defineUserConfig, defaultTheme } from 'vuepress'
import { searchPlugin } from '@vuepress/plugin-search'
import { registerComponentsPlugin } from '@vuepress/plugin-register-components'
import { resolve } from 'path'

console.log(resolve(__dirname, './components'))
export default defineUserConfig({
    lang: 'zh-CN',
    title: 'mini-nestjs-docs',
    description: 'NestJS中文文档（非官方）',
    theme: defaultTheme({
        editLink: false,
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
        }, {
            text: '部署监控',
            link: 'https://app.netlify.com/teams/prolanjr/overview'
        }
        ],
        lastUpdatedText: '上次更新时间',
        contributorsText: '贡献者'
    }),
    plugins: [
        registerComponentsPlugin({
            componentsDir: resolve(__dirname, './components'),
        }),
        searchPlugin({
            hotKeys: [{
                shift: true,
                key: 'S'
            }],
            locales: {
                '/': {
                    placeholder: '搜索文档',
                }
            },
        }),
    ],
})
