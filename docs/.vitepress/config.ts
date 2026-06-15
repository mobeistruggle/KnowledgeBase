import { defineConfig } from 'vitepress'
import { withSidebar } from 'vitepress-sidebar'

const vitepressConfig = {
  title: "陌北笔记",
  description: "记录个人学习笔记",
  head: [
    ['link', { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/logo.png' }],
  ],
  themeConfig: {
    logo: {
      src: "/logo.png",
      alt: "陌北笔记Logo"
    },
    nav: [
      { text: '首页', link: '/' },
      { text: '示例', link: '/examples' }
    ],
    outline: {
      label: '页面导航',
      level: [2, 3],
    },

    // 右侧github图标链接配置
    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ],
  }
}

const vitePressSidebarOptions = {
  documentRootPath: '/docs',
  collapsed: true,
  capitalizeFirst: true,
  useTitleFromHandler: true,
  useTitleFromFrontmatter: true,
  titleHandler: (path) => {
    const name = path.split('/').pop()?.split('.md')[0] || 'Untitled'
    return name.replace(/-/g, ' ')
  }
};

export default defineConfig(
  withSidebar(
    vitepressConfig,
    vitePressSidebarOptions
  )
)
