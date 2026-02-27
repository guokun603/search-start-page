# 🔍 个人搜索起始页

<div align="center">
  <img src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1920&q=80" alt="搜索起始页预览" width="600">
  <p>一个简洁、美观、可自定义的浏览器起始页，支持多搜索引擎切换、动态壁纸和本地持久化存储。</p>
  
  <div>
    <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5">
    <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3">
    <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript">
    <img src="https://img.shields.io/badge/无依赖-222222?style=for-the-badge&logo=appveyor" alt="无依赖">
  </div>
</div>

## ✨ 特性

- 🕒 **居中大号时钟**：24小时制实时更新
- 🔎 **多搜索引擎**：一键切换 Bing、Google、哔哩哔哩、抖音（支持扩展）
- 💡 **极简搜索条**：未聚焦时折叠，聚焦后展开完整功能
- 🖼 **壁纸系统**：支持静态图片和动态视频壁纸
- 📂 **壁纸面板**：内置壁纸 + 自定义上传（支持删除）
- 💾 **本地持久化**：使用 localStorage 和 IndexedDB 存储设置和壁纸
- 🎨 **现代界面**：毛玻璃设计，流畅的动画和过渡效果

## 🚀 快速开始

### 本地使用

1. **克隆仓库**：
   ```bash
   git clone https://github.com/yourusername/search-start-page.git
   cd search-start-page
   ```

2. **打开页面**：
   - 直接双击文件资源管理器中的 `index.html`
   - 或使用本地服务器（如 VS Code Live Server、`npx serve`）

3. **设置为浏览器起始页**：
   - Chrome：设置 → 启动时 → 打开特定页面或一组页面
   - Firefox：设置 → 主页 → 主页和新窗口
   - Edge：设置 → 启动时 → 打开这些页面

### 部署到 GitHub Pages

1. 将代码推送到 GitHub 仓库
2. 在仓库中打开：**Settings → Pages**
3. 在「Build and deployment」中选择：
   - Source: `Deploy from a branch`
   - Branch: `main`，Folder: `/ (root)`
4. 保存后等待部署完成，即可通过 `https://yourusername.github.io/search-start-page/` 访问

### 自定义域名（可选）

1. 在域名 DNS 中配置 CNAME 指向 `yourusername.github.io`
2. 在仓库根目录创建 `CNAME` 文件，写入你的域名
3. 在 GitHub Pages 设置中填写该自定义域名

## 🖼 壁纸系统

### 默认壁纸
- 内置来自 Unsplash 的高质量图片
- 通过左上角「切换壁纸」按钮访问
- 点击左侧面板中的任意缩略图即可设置为背景

### 自定义静态壁纸
- 点击面板底部的「➕ 添加壁纸」卡片
- 选择图片文件（png、jpg、jpeg、gif、webp）
- 自动添加到列表并设置为当前壁纸
- 以 DataURL 形式保存到本地存储（刷新页面仍保留）
- 大小限制：每张图片 5MB 以内

### 自定义动态壁纸
- 相同的上传流程，选择视频文件（mp4、webm、mov）
- 自动检测并作为全屏背景视频播放
- 面板中的视频缩略图自动播放（静音）以便预览
- 存储在 IndexedDB 中，更好地处理大文件

### 壁纸管理
- 每张壁纸右上角有删除按钮（×）
- 默认壁纸：在本地存储中标记为禁用
- 自定义壁纸：从存储中移除
- 如果删除当前使用的壁纸，会自动切换到上一张可用壁纸

## 🔧 自定义

### 添加搜索引擎
编辑 `main.js` 中的 `ENGINES` 数组：

```javascript
const ENGINES = [
  { key: 'bing',   name: 'Bing',    url: 'https://www.bing.com/search?q=' },
  { key: 'google', name: 'Google',  url: 'https://www.google.com/search?q=' },
  { key: 'bili',   name: '哔哩哔哩', url: 'https://search.bilibili.com/all?keyword=' },
  { key: 'douyin', name: '抖音',    url: 'https://www.douyin.com/search/' },
  // 添加你自己的搜索引擎：
  // { key: 'baidu', name: '百度', url: 'https://www.baidu.com/s?wd=' },
];
```

### 添加自定义图标
在 `main.js` 的 `iconSVG()` 函数中添加 SVG 图标：

```javascript
function iconSVG(key) {
  switch (key) {
    case 'bing':
      return `<svg>...</svg>`;
    // 添加你自己的图标：
    // case 'baidu':
    //   return `<svg>...</svg>`;
    default:
      return '';
  }
}
```

### 修改默认壁纸
编辑 `main.js` 中的 `INITIAL_DEFAULT_WALLPAPERS` 数组：

```javascript
const INITIAL_DEFAULT_WALLPAPERS = [
  { type: 'image', url: 'https://images.unsplash.com/...' },
  // 添加你自己的壁纸 URL
];
```

### 调整样式
- **时钟**：修改 `styles.css` 中的 `.clock`
- **搜索条**：调整 `styles.css` 中的 `.search-box` 和 `.search-box.focused`
- **壁纸面板**：自定义 `.wallpaper-panel` 及其相关类

## 📁 项目结构

```
.
├── index.html          # 主页面结构
├── styles.css          # 样式和动画
├── main.js             # 核心功能
└── CNAME              # 自定义域名配置（可选）
```

## 💾 本地存储

项目使用以下存储键：

- `currentEngine`：当前选择的搜索引擎
- `wallpaperIndex`：当前壁纸索引
- `disabledDefaultWallpapers`：禁用的默认壁纸
- **IndexedDB**：`wallpaperDB` 用于存储自定义壁纸（尤其是视频）

### 重置为默认状态
在浏览器控制台中运行：

```javascript
localStorage.clear();
// 或更有针对性地重置：
// localStorage.removeItem('currentEngine');
// localStorage.removeItem('wallpaperIndex');
// localStorage.removeItem('disabledDefaultWallpapers');
```

## 📌 版本历史

- **v1.2.0**
  - 添加视频壁纸支持
  - 统一壁纸数据结构：`{ type: 'image' | 'video', url }`
  - 视频缩略图自动播放预览
  - 使用 IndexedDB 存储以更好地处理视频

- **v1.1.0**
  - 改进 UI，添加毛玻璃设计
  - 添加壁纸面板，支持默认和自定义壁纸
  - 实现搜索条的聚焦/未聚焦平滑动画

- **v1.0.0**
  - 初始版本
  - 静态壁纸 + 居中时钟
  - 多搜索引擎支持

## 🤝 贡献

欢迎贡献！请随时提交 Pull Request。

## 📄 许可证

本项目开源，采用 [MIT 许可证](LICENSE)。

## 👤 作者

**郭小胖**
- GitHub: [@yourusername](https://github.com/yourusername)
- 网站: [https://guokun.net](https://guokun.net)

---

<div align="center">
  <p>用 ❤️ 打造更好的浏览体验</p>
</div>