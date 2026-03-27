# GDC 2026 Website

GDC Festival of Gaming 2026 资讯站 - 基于调研项目构建的单页网站

## 快速开始

```bash
# 安装依赖
npm install

# 开发模式
npm run dev

# 构建静态网站
npm run build
```

## 部署

本项目已配置为 Next.js 静态导出，可以直接部署到 Vercel：

```bash
# 使用 Vercel CLI 部署
vercel

# 或在 Vercel Dashboard 中导入 GitHub 仓库
```

## 技术栈

- Next.js 14 (App Router)
- Tailwind CSS v4
- TypeScript
- Lucide React Icons

## 设计参考

艺术风格参考：[Marathon: Lost Ship](https://marathonthegame.com/zh-cht)

- 深色科幻主题
- 霓虹渐变点缀
- 玻璃拟态效果
- 网格背景纹理

## 目录结构

```
gdc-2026-site/
├── src/
│   ├── app/
│   │   ├── globals.css    # 全局样式
│   │   ├── layout.tsx    # 布局
│   │   └── page.tsx     # 首页
│   ├── config/
│   │   ├── site.ts      # 网站配置
│   │   └── navigation.ts # 导航配置
│   └── components/       # 组件
├── public/              # 静态资源
├── package.json
├── next.config.js
├── tailwind.config.ts
└── tsconfig.json
```

## 内容来源

本网站的 GDC 2026 内容基于调研项目生成：
- `/root/.openclaw/workspace/gdc-2026-research/`

---
Built with Next.js + Tailwind CSS