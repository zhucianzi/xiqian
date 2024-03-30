import Unocss from "unocss/vite";
import { defineConfig } from "vitepress";
export default defineConfig({
export default {
    title: '汐芊体系',
    themeConfig: {
        logo: '/首页资源/汐芊水印.png',
        nav: [
            { text: '首页', link: '/' },
            {
                text: '说明书',
                items: [
                    { text: 'Lite版', link: '/works/guide/Lite序言.md' },
                    { text: '完全版', link: '/works/guide/完全版序言.md' },
                ]
            },
            {
                text: '图鉴',
                items: [
                    { text: '武将', link: '/works/encyclopaedia/武将序言.md' },
                    { text: '卡牌', link: '/works/encyclopaedia/卡牌序言.md' },
                ]
            },
            {
                text: '理论',
                items: [
                    { text: '芊の随笔', link: '/works/theory/芊随笔序言.md' },
                    { text: '汐の集注', link: '/works/theory/汐集注序言.md' },
                ]
            },
            {
                text: '版本',
                items: [
                    { text: '0.1.0', link: '/works/version/更新日志.md' },
                    { text: '致谢名单', link: '/works/version/致谢.md' },
                ]
            },
        ],
        sidebar: {
            '/works/guide/': [
                {
                    text: '开物杀说明书',
                    items: [
                        { text: 'Lite版', link: '/works/guide/Lite序言.md' },
                        { text: '完全版', link: '/works/guide/完全版序言.md' },
                    ]
                }
            ],

            '/works/encyclopaedia/': [
                {
                    text: '图鉴',
                    items: [
                        { text: '武将', link: '/works/encyclopaedia/wujiang.md' },
                        { text: '卡牌', link: '/works/encyclopaedia/kapai.md' },
                    ]
                }
            ],
            '/works/theory/': [
                {
                    text: '芊的随笔',
                    items: [
                        { text: '芊的碎碎念', link: '/works/theory/芊随笔序言.md' },
                        { text: '卡牌', link: '/works/encyclopaedia/kapai.md' },
                    ]
                },
                {
                    text: '汐的集注',
                    items: [
                        { text: '总序', link: '/works/theory/汐集注序言.md' },
                        {
                            text: '底牌（上）',
                            items: [
                                { text: '前言', link: '/works/theory/汐底牌上篇0.md' },
                                { text: '底牌的含义', link: '/works/theory/汐底牌上篇1.md' },
                                { text: '牌堆现状的分析', link: '/works/theory/汐底牌上篇2.md' },
                                {
                                    text: '着手改造的尝试',
                                    items: [
                                        { text: '多维度底牌', link: '/works/theory/汐底牌上篇3a.md' },
                                        { text: '从判定区到理事区', link: '/works/theory/汐底牌上篇3b.md' },
                                        { text: '竹芊子的集注', link: '/works/theory/汐底牌上篇3+.md' },
                                    ],
                                },
                                { text: '展望', link: '/works/theory/汐底牌上篇4.md' },
                            ]
                        },
                    ]
                }
            ],
            '/works/version/': [
                {
                    text: '版本',
                    items: [
                        { text: '更新日志', link: '/works/version/更新日志.md' },
                        { text: '人们做出过的贡献', link: '/works/version/致谢.md' },
                    ]
                }
            ],
        }
    },
    vite: {
        plugins: [
            Unocss()
        ]
    }
});