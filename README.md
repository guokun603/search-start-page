# 🔍 Personal Search Start Page

一个简洁、干净、可自定义的浏览器起始页 / 搜索主页。

> ⚠️ 说明：本项目在开发过程中有使用 AI 辅助（包括代码结构、样式细节与文档撰写），最终实现逻辑与效果由作者手动调整和确认。

---

## ✨ 功能特性

### 🔎 搜索体验

- 多搜索引擎一键切换：
  - Bing / Google / 哔哩哔哩 / 抖音（可自行扩展）
- 中心大号时钟 + 居中搜索条布局
- **未聚焦时的极简搜索条**：
  - 页面中间只保留一条半透明的毛玻璃长条，中央一行「搜索」文字
  - 不显示搜索引擎图标、输入框与按钮，整体更干净、贴合背景
- **聚焦后的完整搜索框**：
  - 左侧：搜索引擎选择器（图标 + 下拉菜单）
  - 中间：搜索输入框
  - 右侧：搜索按钮
- 输入内容后回车 / 点击「搜索」按钮，即跳转到对应搜索引擎结果页

### 🕒 时钟

- 居中大号时钟，使用 **24 小时制（HH:mm）**
- 每分钟自动更���时间
- 字重适中，配合阴影保证在任意壁纸上仍然清晰可读

### 🖼 壁纸系统

- 全屏背景壁纸显示
- 内置多张默认壁纸（来自 Unsplash）
- 左侧悬浮壁纸面板：
  - 统一尺寸缩略图
  - 单列纵向排列
  - 支持滚动浏览
- 支持从本地上传自定义壁纸：
  - 以 DataURL 形式存储在浏览器 `localStorage` 中
  - 重新打开页面仍会保留
- 支持删除壁纸：
  - 默认壁纸：逻辑为“隐藏默认索引”，不会破坏原始列表
  - 自定义壁纸：从本地存储中移除
  - 删除状态会被持久化，下次打开页面仍然有效

---

## 🗂 项目结构

```text
.
├── index.html    # 页面结构：时钟、搜索框、壁纸面板等
├── styles.css    # 样式：整体布局、搜索条效果、毛玻璃、动画
└── main.js       # 逻辑：搜索引擎切换、时钟、壁纸系统、本地存储
```

纯静态项目，无构建步骤，支持直接用浏览器打开。

---

## 🚀 使用方式

1. 克隆或下载项目到本地：

   ```bash
   git clone <your-repo-url>
   cd <your-repo>
   ```

2. 确保目录下存在以下三个文件：

   ```text
   index.html
   styles.css
   main.js
   ```

3. 用浏览器打开 `index.html`：
   - 直接双击打开，或
   - 使用任意静态服务器（如 VS Code 的 Live Server、`serve` 等）

> 建议将此页面设置为浏览器的「主页」或「新标签页」起始页，日常直接使用。

---

## ⚙️ 自定义

### 1. 搜索引擎列表

在 `main.js` 顶部可以修改或扩展搜索引擎：

```js
const ENGINES = [
  { key: 'bing',   name: 'Bing',    url: 'https://www.bing.com/search?q='          },
  { key: 'google', name: 'Google',  url: 'https://www.google.com/search?q='        },
  { key: 'bili',   name: '哔哩哔哩', url: 'https://search.bilibili.com/all?keyword=' },
  { key: 'douyin', name: '抖音',    url: 'https://www.douyin.com/search/'          },
];
```

- 想改成百度、GitHub 搜索等，只需替换或追加对象，例如：

```js
{ key: 'baidu', name: '百度', url: 'https://www.baidu.com/s?wd=' }
```

- `key` 用于内部标识与图标，`name` 为展示名称，`url` 为搜索地址前缀。

### 2. 默认壁纸

同样在 `main.js` 顶部：

```js
const INITIAL_DEFAULT_WALLPAPERS = [
  'https://images.unsplash.com/...',
  // ...
];
```

- 将数组中的链接替换为你喜欢的图片地址即可
- 建议使用支持热链的图床 / CDN（如 Unsplash、自己搭建的静态资源等）

### 3. 时钟样式

时钟样式在 `styles.css` 中的 `.clock` 规则下：

```css
.clock {
  font-size: 48px;
  font-weight: 400;   /* 可改为 300 / 500 等 */
  letter-spacing: 2px;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.65);
}
```

- 想要更大的数字：适当提高 `font-size`
- 想要更粗或更细：调整 `font-weight`

### 4. 搜索条透明度 & 毛玻璃效果

搜索条主体样式在 `.search-box` / `.search-box.focused` 中：

```css
.search-box {
  background: rgba(0, 0, 0, 0.18);              /* 未聚焦：更透明 */
  backdrop-filter: blur(16px) saturate(130%);
  -webkit-backdrop-filter: blur(16px) saturate(130%);
  /* 其他属性略 */
}

.search-box.focused {
  background: rgba(0, 0, 0, 0.30);              /* 聚焦：略深一点 */
  /* 其他属性略 */
}
```

- 如果希望更贴合背景、几乎看不出实心颜色，可适当降低透明度数值，例如 `0.12` / `0.24`。

---

## 💾 本地存储说明

项目使用 `localStorage` 持久化以下状态：

- `currentEngine`：当前选中的搜索引擎 key
- `wallpaperIndex`：当前使用的壁纸索引
- `customWallpapers`：本地上传的自定义壁纸 DataURL 列表
- `disabledDefaultWallpapers`：被用户隐藏的默认壁纸原始索引数组

如需恢复到「初始状态」，可以在浏览器控制台执行：

```js
localStorage.removeItem('currentEngine');
localStorage.removeItem('wallpaperIndex');
localStorage.removeItem('customWallpapers');
localStorage.removeItem('disabledDefaultWallpapers');
```

刷新页面即可。

---

## 📝 License & 作者

> © 2026 郭小胖

本项目主要用于个人练习与日常使用，你可以在遵守相关图片版权 / 接口使用条款的前提下，自行 Fork、修改和使用。