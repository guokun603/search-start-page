# 🔍 Personal Search Start Page

一个简洁、干净、可自定义的浏览器起始页 / 搜索主页，支持多��索引擎切换、静态 / 动态壁纸、本地持久化等特性。

> ⚠️ 说明：本项目在开发过程中有使用 AI 辅助（包括代码结构、样式细节与文档撰写），最终实现逻辑与效果由作者手动调整和确认。

---

## ✨ 特性概览

- 🕒 居中大号 24 小时制时钟
- 🔎 多搜索引擎一键切换（Bing / Google / 哔哩哔哩 / 抖音，支持扩展）
- 💡 未聚焦时极简搜索条，聚焦后展开完整搜索框
- 🖼 全屏静态壁纸 + 动态视频壁纸
- 📂 左侧壁纸面板：默认壁纸 + 本地自定义壁纸（支持删除）
- 💾 使用 `localStorage` 持久化配置与壁纸

---

## 🖼 壁纸系统

### 1. 默认壁纸

- 内置多张来自 Unsplash 的高清壁纸。
- 通过左上角「切换壁纸」按钮打开左侧壁纸面板。
- 在左侧列表中点击任意缩略图，即可切换为当前背景。

### 2. 自定义静态壁纸（图片）

- 左侧壁纸面板底部有「➕ 添加壁纸」卡片。
- 点击后可从本地选择图片文件（如 `png / jpg / jpeg / gif / webp`）。
- 选择成功后：
  - 自动加入左侧列表；
  - 立即应用为当前壁纸；
  - 以 DataURL 形式保存到 `localStorage` 中，刷新页面仍会保留。
- 对图片大小做了简单限制（默认 5MB 以内）。

### 3. 自定义动态壁纸（视频）

> v1.2.0 新增

- 仍然通过底部「➕ 添加壁纸」卡片，从本地选择视频文件（如 `mp4 / webm / mov` 等）。
- 代码会根据 MIME 类型 / 文件后缀自动判断是图片还是视频：
  - 图片 → 作为静态壁纸；
  - 视频 → 作为动态壁纸。
- 动态壁纸实现：
  - 页面中有一个全屏 `<video id="bgVideo" autoplay muted loop playsinline>` 背景层。
  - 当当前壁纸类型为 `video` 时：
    - 清空静态背景层 `.bg` 的 `background-image`；
    - 设置 `bgVideo.src` 为所选视频，并显示、自动播放。
- 左侧壁纸面板中的视频缩略图：
  - 使用小号 `<video>` 元素自动静音循环播放，方便预览当前效果。

> ⚠️ 提示：本地上传的视频通过 `URL.createObjectURL(file)` 生成临时地址，只在当前浏览器会话内有效。  
> 如果希望长期保存视频壁纸，可将视频上传到 CDN / 网盘，使用网络 URL 填入配置。

### 4. 壁纸删除与禁用

- 每个壁纸缩略图右上角带有一个「×」删除按钮：
  - 默认壁纸：逻辑为「禁用默认索引」，记录在 `localStorage` 中，不影响内置数组。
  - 自定义壁纸：从自定义壁纸数组与本地存储中移除。
- 删除当前正在使用的壁纸时，会自动切换到上一张可用壁纸。

### 5. 持久化键位

壁纸相关状态统一保存在浏览器 `localStorage` 中，主要包括：

- `customWallpapers_v2`：自定义壁纸列表（统一结构为 `{ type, url }`）
- `disabledDefaultWallpapers`：被隐藏的默认壁纸原始索引数组
- `wallpaperIndex`：当前使用的壁纸在合并列表中的索引

---

## 🔎 搜索体验

- 支持多搜索引擎一键切换：
  - Bing / Google / 哔哩哔哩 / 抖音（可自行扩展）
- 中心大号时钟 + 居中搜索条布局，视觉上更聚焦。

### 未聚焦状态

- 页面中间只保留一条半透明毛玻璃长条，中间仅显示「搜索」两个字。
- 不展示搜索引擎图标、输入框和按钮。
- 与背景壁纸融合度更高，适合作为「桌面 / 起始页」常驻界面。

### 聚焦状态

- 点击「搜索」占位层或直接聚焦输入框后：
  - 左侧：搜索引擎选择器（当前引擎图标 + 下拉箭头）
  - 中间：搜索输入框
  - 右侧：搜索按钮
- 输入内容后：
  - 回车或点击「搜索」按钮，跳转到当前引擎的搜索结果页。

---

## 🕒 时钟

- 使用 24 小时制 `HH:mm:ss` 格式显示当前时间。
- 每秒自动刷新。
- 通过文字阴影保证在明亮 / 暗色壁纸上都有良好可读性。

---

## 🗂 项目结构

```text
.
├── index.html   # 页面结构：时钟、搜索框、壁纸面板、背景层（.bg + #bgVideo）等
├── styles.css   # 样式：整体布局、毛玻璃搜索框、壁纸面板、视频缩略图等
└── main.js      # 逻辑：搜索引擎切换、时钟、壁纸系统、动态壁纸、本地存储
```

纯静态项目，无额外构建步骤，可直接用浏览器打开或部署到任意静态托管平台（如 GitHub Pages）。

---

## 🚀 使用方式

### 本地使用

1. 克隆或下载本仓库：

   ```bash
   git clone https://github.com/<your-name>/<your-repo>.git
   cd <your-repo>
   ```

2. 确保目录下包含以下文件：

   ```text
   index.html
   styles.css
   main.js
   ```

3. 使用浏览器打开 `index.html`：
   - 直接双击文件，或  
   - 使用任意静态服务器（VS Code 的 Live Server、`npx serve` 等）。

4. 建议将此页面设置为浏览器的「主页」或「新标签页」起始页，日常直接使用。

### GitHub Pages 部署（可选）

1. 将代码推送到 GitHub 仓库的 `main` 分支。
2. 在仓库中打开：**Settings → Pages**。
3. 在「Build and deployment」中选择：
   - Source: `Deploy from a branch`
   - Branch: `main`，Folder: `/ (root)`
4. 保存后等待部署完成，即可通过 `https://<your-name>.github.io/<your-repo>/` 访问。

如有自定义域名（例如 `search.guokun.net`），可以：

1. 在域名 DNS 中配置 CNAME 指向 `your-name.github.io`。
2. 在仓库根目录创建 `CNAME` 文件，写入你的域名。
3. 在 GitHub Pages 设置中填写该自定义域名。

---

## ⚙️ 自定义说明

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

示例：添加百度搜索：

```js
{ key: 'baidu', name: '百度', url: 'https://www.baidu.com/s?wd=' }
```

> 注意：如果新增引擎需要图标，可以在 `iconSVG(key)` 中补充对应分支。

### 2. 默认壁纸

在 `main.js` 顶部：

```js
const INITIAL_DEFAULT_WALLPAPERS = [
  { type: 'image', url: 'https://images.unsplash.com/...' },
  // ...
];
```

将 `url` 替换为你喜欢的图片即可。建议使用支持外链的图床或 CDN。

### 3. 时钟样式

在 `styles.css` 中调整 `.clock`：

```css
.clock {
  font-size: 54px;
  font-weight: 500;
  letter-spacing: 2.4px;
  text-shadow: 0 3px 14px rgba(0, 0, 0, 0.8);
}
```

根据喜好修改字号、字重或阴影强度即可。

### 4. 搜索条透明度 & 毛玻璃

在 `styles.css` 中的 `.search-box` 和 `.search-box.focused`：

```css
.search-box {
  background: rgba(0, 0, 0, 0.18);
  backdrop-filter: blur(16px) saturate(130%);
}

.search-box.focused {
  background: rgba(0, 0, 0, 0.30);
}
```

适当调整 `rgba` 中的透明度值即可让搜索条更轻 / 更实。

---

## 💾 本地存储键位

项目目前使用以下 `localStorage` 键：

- `currentEngine`：当前搜索引擎 key
- `wallpaperIndex`：当前壁纸在合并列表中的索引
- `customWallpapers_v2`：自定义壁纸数组（统一结构 `{ type, url }`）
- `disabledDefaultWallpapers`：被隐藏的默认壁纸原始索引数组

恢复初始状态，可在浏览器控制台执行：

```js
localStorage.removeItem('currentEngine');
localStorage.removeItem('wallpaperIndex');
localStorage.removeItem('customWallpapers_v2');
localStorage.removeItem('disabledDefaultWallpapers');
```

刷新页面即可。

---

## 📌 版本历史

- **v1.2.0**
  - 支持本地视频作为动态壁纸，使用全屏 `<video>` 背景层。
  - 壁纸数据结构统一为 `{ type: 'image' | 'video', url }`。
  - 左侧壁纸列表支持视频缩略图自动播放预览。
- **v1.1.0**
  - 优化 UI：毛玻璃搜索框、聚焦/未聚焦状态切换动画。
  - 增加壁纸面板、默认 / 自定义壁纸列表与删除功能。
- **v1.0.0**
  - 初始版本：静态壁纸 + 中心时钟 + 多搜索引擎切换。

---

## 📝 License & 作者

> © 2026 郭小胖

本项目主要用于个人练习与日常使用。  
在遵守图片版权、搜索引擎服务条款的前提下，你可以自由 Fork、修改和部署本项目，用于自己的浏览器起始页。