import { defineConfig } from 'dumi'
const packageJson = require('./package.json')

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
    },
    nav: {
      mode: 'append',
      value: [
        {
          title: '更新日志',
          link: 'https://github.com/Ddbor/Essetialjs/releases'
        }
      ]
    }
  },
  scripts: [
    `
    const insertVersion = function(){
      const dom = document.createElement('span');
      dom.innerHTML = 'v${packageJson.version}';
      dom.style.marginRight = '15px';
      dom.style.color = '#666';
      dom.style.fontSize = '14px';
      dom.style.letterSpacing = '1.5px';
      const search = document.querySelector('.dumi-default-search-bar');
      if(search){
        search.parentNode.insertBefore(dom, search.nextSibling);
      }else{
        setTimeout(()=>{
          insertVersion();
        }, 1000)
      }
    }
    insertVersion();
  `
  ]
})
