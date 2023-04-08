import { defineConfig } from 'vitepress'
import { readdirSync } from 'fs'

function genSidebarItems(apiDir) {
  return readdirSync(`vitepress/api/${apiDir}`, 'utf-8').map((file) => {
    const name = file.split('.')[0]
    return {
      text: name,
      link: `/api/${apiDir}/${name}`
    }
  })
}

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/Essetialjs/',
  outDir: '../docs',
  title: 'Essetialjs',
  description: '一个高效、易用且功能丰富的JavaScript工具库',
  head: [
    ['meta', { name: 'Permissions-Policy', content: 'interest-cohort()' }]
  ],
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '指引', link: '/guide/installation' },
      { text: 'API 文档', link: '/api/is/isString' }
    ],
    sidebar: {
      '/guide/': [
        {
          text: '指引',
          items: [
            { text: '安装', link: '/guide/installation' },
            { text: '用法', link: '/guide/usage' }
          ]
        }
      ],
      '/api/': [
        {
          text: '数据类型',
          items: genSidebarItems('is')
        }
      ]
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/Ddbor/Essetialjs' }
    ]
  }
})
