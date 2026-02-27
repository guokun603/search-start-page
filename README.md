# 🔍 Personal Search Start Page

一个简洁但非常好用的浏览器起始页 / 搜索主页。

> ⚠️ 说明：本项目的代码与文档在开发过程中有使用 AI 辅助生成和优化（包括结构规划、样式细节和 README 文案），最终逻辑与实现由作者自行确认和调整。

---

## ✨ 功能特性

- 多搜索引擎一键切换（Bing / Google / 哔哩哔哩 / 抖音）
- 中间大号实时时钟（12 小时制 AM / PM）
- 全屏背景壁纸
  - 内置多张默认壁纸（Unsplash）
  - 左侧壁纸面板，统一尺寸缩略图、一列展示、可滚动
  - 从本地添加自定义壁纸
  - 删除默认 & 自定义壁纸，删除状态持久保存（localStorage）

---

## 🗂 项目结构

```text
.
├── index.html    # 页面结构
├── styles.css    # 样式（布局 / 动画 / 壁纸面板）
└── main.js       # 逻辑（搜索 / 时钟 / 壁纸系统）
```

纯静态，无构建步骤，浏览器直接打开即可使用。

---

## 🚀 使用方式

1. 将仓库克隆或下载到本地：

   ```bash
   git clone <your-repo-url>
   cd <your-repo>
   ```

2. 保证目录下存在以下三个文件：

   ```text
   index.html
   styles.css
   main.js
   ```

3. 打开 `index.html`：
   - 直接用浏览器双击打开，或者
   - 使用任意静态服务器（如 VS Code 的 Live Server）

建议将此页面设置为浏览器主页或新标签页起始页。

---

## ⚙️ 自定义

### 搜索引擎

`main.js` 顶部：

```js
const ENGINES = [
  { key: 'bing',   name: 'Bing',    url: 'https://www.bing.com/search?q='          },
  { key: 'google', name: 'Google',  url: 'https://www.google.com/search?q='        },
  { key: 'bili',   name: '哔哩哔哩', url: 'https://search.bilibili.com/all?keyword=' },
  { key: 'douyin', name: '抖音',    url: 'https://www.douyin.com/search/'          },
];
```

你可以修改现有搜索引擎，或者往数组里追加新的引擎，例如百度、GitHub 搜索等。

### 默认壁纸

同样在 `main.js` 顶部：

```js
const INITIAL_DEFAULT_WALLPAPERS = [
  'https://images.unsplash.com/...',
  // ...
];
```

把链接替换成你自己的图片地址即可。

---

## 💾 本地存储

项目使用 `localStorage` 保存以下信息：

- `currentEngine`：当前搜索引擎 key
- `wallpaperIndex`：当前壁纸索引
- `customWallpapers`：自定义壁纸 DataURL 列表
- `disabledDefaultWallpapers`：被删除的默认壁纸原始索引数组

清理这些键即可把页面恢复到初始状态。

---


> © 2026 郭小胖