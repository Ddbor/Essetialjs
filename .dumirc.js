import { defineConfig } from 'dumi'

export default defineConfig({
  outputPath: 'docs',
  publicPath: '/Essetialjs/',
  history: { type: 'hash' },
  resolve: {
    docDirs: ['md']
  },
  locales: [{ id: 'zh-CN', name: '中文' }],
  themeConfig: {
    name: 'Essetialjs',
    socialLinks: {
      github: 'https://github.com/Ddbor/Essetialjs'
    }
  }
})
