// ========== 1. 图标 & 配置 ==========

// 搜索引擎图标
function iconSVG(key) {
  switch (key) {
    case 'bing':
      return `<svg t="1772156952170" class="icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><path d="M340.5824 70.109867L102.536533 0.682667v851.217066L340.650667 643.345067V70.109867zM102.536533 851.7632l238.045867 171.6224 580.881067-340.923733V411.784533L102.536533 851.831467z" fill="#409EFF"></path><path d="M409.463467 255.3856l113.732266 238.933333 138.8544 56.866134 259.413334-139.400534-506.0608-156.330666z" fill="#409EFF"></path></svg>`;
    case 'google':
      return `<svg t="1772156627174" class="icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><path d="M222.087529 515.915294c0-32.527059 5.481412-63.698824 15.179295-92.973176l-170.285177-128.90353A496.941176 496.941176 0 0 0 15.058824 515.945412c0 79.721412 18.672941 154.955294 51.802352 221.726117l170.255059-129.114353a293.767529 293.767529 0 0 1-15.028706-92.611764" fill="#FBBC05"></path><path d="M521.246118 219.979294a294.460235 294.460235 0 0 1 186.337882 65.957647l147.245176-145.648941C765.108706 62.885647 650.089412 15.058824 521.246118 15.058824 321.204706 15.058824 149.293176 128.421647 66.981647 294.038588l170.405647 128.90353c39.243294-118.061176 151.100235-202.992941 283.919059-202.992942" fill="#EA4335"></path><path d="M523.414588 805.315765c-133.511529 0-245.940706-84.359529-285.394823-201.728l-171.188706 128.12047C149.564235 896.301176 322.349176 1008.941176 523.444706 1008.941176c124.024471 0 242.447059-43.128471 331.38447-124.054588l-162.514823-123.090823c-45.808941 28.310588-103.574588 43.550118-168.929882 43.550117" fill="#34A853"></path><path d="M1008.941176 511.216941c0-29.394824-4.638118-61.108706-11.565176-90.503529H523.354353v192.301176h272.835765c-13.613176 65.596235-50.718118 115.983059-103.875765 148.781177l162.484706 123.090823c93.394824-84.901647 154.142118-211.425882 154.142117-373.669647" fill="#4285F4"></path></svg>`;
    case 'bili':
      return `<svg t="1772156858042" class="icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><path d="M998.4 352.256c-3.072-136.192-121.856-162.304-121.856-162.304s-92.672-0.512-212.992-1.536l87.552-84.48s13.824-17.408-9.728-36.864c-23.552-19.456-25.088-10.752-33.28-5.632-7.168 5.12-112.128 108.032-130.56 126.464-47.616 0-97.28-0.512-145.408-0.512h16.896S323.584 63.488 315.392 57.856s-9.216-13.824-33.28 5.632c-23.552 19.456-9.728 36.864-9.728 36.864l89.6 87.04c-97.28 0-181.248 0.512-220.16 2.048C15.872 225.792 25.6 352.256 25.6 352.256s1.536 271.36 0 408.576c13.824 137.216 119.296 159.232 119.296 159.232s41.984 1.024 73.216 1.024c3.072 8.704 5.632 51.712 53.76 51.712 47.616 0 53.76-51.712 53.76-51.712s350.72-1.536 379.904-1.536c1.536 14.848 8.704 54.272 56.832 53.76 47.616-1.024 51.2-56.832 51.2-56.832s16.384-1.536 65.024 0c113.664-20.992 120.32-154.112 120.32-154.112s-2.048-273.92-0.512-410.112z m-97.792 434.176c0 21.504-16.896 38.912-37.888 38.912h-691.2c-20.992 0-37.888-17.408-37.888-38.912V328.192c0-21.504 16.896-38.912 37.888-38.912h691.2c20.992 0 37.888 17.408 37.888 38.912v458.24z" fill="#1296DB"></path><path d="M409.088 418.816l-203.264 38.912 17.408 76.288 201.216-38.912zM518.656 621.056c-49.664 106.496-94.208 26.112-94.208 26.112l-33.28 21.504s65.536 89.6 128 21.504c73.728 68.096 130.048-22.016 130.048-22.016l-30.208-19.456c0-0.512-52.736 75.776-100.352-27.648zM619.008 495.104l201.728 38.912 16.896-76.288-202.752-38.912z" fill="#1296DB"></path></svg>`;
    case 'douyin':
      return `<svg t="1772156792665" class="icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><path d="M544.448 39.36v646.976c0 76.032-63.104 137.664-140.8 137.664-77.824 0-140.864-61.632-140.864-137.6 0-76.096 63.04-137.664 140.8-137.664 14.72 0 28.928 2.176 42.24 6.272V391.04a314.816 314.816 0 0 0-42.24-2.88c-168.512 0-305.088 133.568-305.088 298.24 0 164.736 136.576 298.24 305.088 298.24 168.512 0 305.088-133.504 305.088-298.24V352.512a398.592 398.592 0 0 0 229.504 72.32h0.512v-160.64c-126.976 0-229.952-100.672-229.952-224.832H544.448z" fill="#242A36"></path></svg>`;
    default:
      return '';
  }
}

// 搜索引擎配置
const ENGINES = [
  { key: 'bing',   name: 'Bing',    url: 'https://www.bing.com/search?q='          },
  { key: 'google', name: 'Google',  url: 'https://www.google.com/search?q='        },
  { key: 'bili',   name: '哔哩哔哩', url: 'https://search.bilibili.com/all?keyword=' },
  { key: 'douyin', name: '抖音',    url: 'https://www.douyin.com/search/'          },
];

// 初始默认壁纸（对象：image 类型）
const INITIAL_DEFAULT_WALLPAPERS = [
  { type: 'image', url: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1920&q=80' },
  { type: 'image', url: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1920&q=80' },
  { type: 'image', url: 'https://images.unsplash.com/photo-1518609878373-06d740f60d8b?auto=format&fit=crop&w=1920&q=80' },
  { type: 'image', url: 'https://images.unsplash.com/photo-1500534314211-0a24cd03f2c0?auto=format&fit=crop&w=1920&q=80' },
];

// 存储键名
const LS_DISABLED = 'disabledDefaultWallpapers';
const LS_INDEX    = 'wallpaperIndex';
// IndexedDB 配置 - 用于存储视频壁纸（解决localStorage容量限制问题）
const DB_NAME     = 'wallpaperDB';
const DB_VERSION  = 1;
const STORE_NAME  = 'customWallpapers';

// 状态
let disabledDefaultIndices = [];
let customWallpapers = []; // [{type:'image'|'video', url:string}]
let defaultWallpapers = [];
let wallpapers = [];       // default + custom
let currentWallpaperIndex = 0;
let currentEngineKey = ENGINES[0].key;

// 背景层引用
const bgLayer = document.getElementById('bgLayer');
const bgVideo = document.getElementById('bgVideo');

// ========== 2. 工具函数：localStorage ==========

function loadDisabledDefault() {
  try {
    const saved = localStorage.getItem(LS_DISABLED);
    if (!saved) return [];
    const arr = JSON.parse(saved);
    return Array.isArray(arr) ? arr : [];
  } catch {
    return [];
  }
}

function saveDisabledDefault() {
  try {
    localStorage.setItem(LS_DISABLED, JSON.stringify(disabledDefaultIndices));
  } catch (e) {
    console.error('保存禁用默认壁纸失败:', e);
  }
}

// 打开IndexedDB数据库 - 新增：用于存储视频壁纸
function openDB() {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open(DB_NAME, DB_VERSION);
    
    request.onupgradeneeded = (event) => {
      const db = event.target.result;
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        db.createObjectStore(STORE_NAME, { keyPath: 'id', autoIncrement: true });
      }
    };
    
    request.onsuccess = (event) => {
      resolve(event.target.result);
    };
    
    request.onerror = (event) => {
      reject(event.target.error);
    };
  });
}

// 加载自定义壁纸 - 修改：使用IndexedDB替代localStorage，支持存储视频
async function loadCustomWallpapers() {
  try {
    const db = await openDB();
    return new Promise((resolve) => {
      const transaction = db.transaction(STORE_NAME, 'readonly');
      const store = transaction.objectStore(STORE_NAME);
      const request = store.getAll();
      
      request.onsuccess = (event) => {
        const wallpapers = event.target.result || [];
        console.log('从IndexedDB加载自定义壁纸:', wallpapers);
        resolve(wallpapers);
      };
      
      request.onerror = (event) => {
        console.error('加载自定义壁纸失败:', event.target.error);
        resolve([]);
      };
    });
  } catch (e) {
    console.error('打开数据库失败:', e);
    return [];
  }
}

// 保存自定义壁纸 - 修改：使用IndexedDB替代localStorage，支持存储视频
async function saveCustomWallpapers() {
  try {
    const db = await openDB();
    return new Promise((resolve) => {
      const transaction = db.transaction(STORE_NAME, 'readwrite');
      const store = transaction.objectStore(STORE_NAME);
      
      // 清空现有数据
      store.clear();
      
      // 保存新数据
      customWallpapers.forEach((wp, index) => {
        store.put({ ...wp, id: index + 1 });
      });
      
      transaction.oncomplete = () => {
        console.log('保存自定义壁纸成功');
        resolve(true);
      };
      
      transaction.onerror = (event) => {
        console.error('保存自定义壁纸失败:', event.target.error);
        resolve(false);
      };
    });
  } catch (e) {
    console.error('打开数据库失败:', e);
    return false;
  }
}

function loadWallpaperIndex() {
  const raw = localStorage.getItem(LS_INDEX);
  const n = Number(raw);
  return Number.isFinite(n) ? n : 0;
}

function saveWallpaperIndex() {
  localStorage.setItem(LS_INDEX, String(currentWallpaperIndex));
}

// ========== 3. 壁纸列表构建 & 应用 ==========

// 捕获视频当前帧作为缓存背景（供下次打开页面时立即显示）
function captureVideoFrame(video) {
  try {
    const vw = video.videoWidth;
    const vh = video.videoHeight;
    if (!vw || !vh) return null;
    const MAX_W = 640, MAX_H = 360;
    const ratio = Math.min(MAX_W / vw, MAX_H / vh, 1);
    const canvas = document.createElement('canvas');
    canvas.width = Math.round(vw * ratio);
    canvas.height = Math.round(vh * ratio);
    canvas.getContext('2d').drawImage(video, 0, 0, canvas.width, canvas.height);
    return canvas.toDataURL('image/jpeg', 0.75);
  } catch (e) {
    return null;
  }
}

function buildCurrentDefaultWallpapers() {
  return INITIAL_DEFAULT_WALLPAPERS.filter(
    (_, idx) => !disabledDefaultIndices.includes(idx),
  );
}

function rebuildWallpapers() {
  defaultWallpapers = buildCurrentDefaultWallpapers();
  wallpapers = [...defaultWallpapers, ...customWallpapers];
}

function applyWallpaper(index) {
  if (!wallpapers.length) return;
  if (index < 0 || index >= wallpapers.length) index = 0;

  currentWallpaperIndex = index;
  const wp = wallpapers[index];

  if (!bgLayer || !bgVideo) return;

  if (wp.type === 'image') {
    // 静态图片背景：显示 bgLayer，隐藏 video
    bgLayer.style.backgroundImage = `url('${wp.url}')`;
    bgLayer.style.opacity = '1';
    // 缓存当前图片 URL，供下次打开标签时即时恢复，消除白屏
    try { localStorage.setItem('bgCache', wp.url); } catch (e) { console.warn('Failed to cache wallpaper:', e); }
    
    // 立即隐藏视频，因为图片加载速度快
    bgVideo.pause();
    bgVideo.removeAttribute('src');
    bgVideo.load();
    bgVideo.style.display = 'none';
    bgVideo.style.opacity = '0';
  } else if (wp.type === 'video') {
    // 视频背景：直接在 bgVideo 上设置 src，使用 canplay 事件尽早显示
    // 不清除 bgCache——保留上次缓存的帧，让页面重新打开时立即有背景可见
    bgVideo.oncanplay = null;
    bgVideo.onerror = null;
    bgVideo.pause();
    bgVideo.src = wp.url;
    bgVideo.style.display = 'block';
    bgVideo.style.opacity = '0';

    bgVideo.oncanplay = () => {
      bgVideo.oncanplay = null;
      bgVideo.style.opacity = '1';
      bgVideo.play().catch(() => {});

      // 捕获当前帧并缓存，供下次打开页面时立即显示（消除黑屏等待）
      try {
        const frame = captureVideoFrame(bgVideo);
        if (frame) {
          localStorage.setItem('bgCache', frame);
        }
      } catch (e) {}

      // 视频已可见后淡出静态背景层
      bgLayer.style.opacity = '0';
      setTimeout(() => { bgLayer.style.backgroundImage = 'none'; }, 500);
    };

    bgVideo.onerror = () => {
      bgVideo.onerror = null;
      console.error('视频加载失败，使用默认背景');
      bgLayer.style.opacity = '1';
      bgLayer.style.backgroundImage = `url('${INITIAL_DEFAULT_WALLPAPERS[0].url}')`;
      bgVideo.style.display = 'none';
      bgVideo.style.opacity = '0';
    };

    bgVideo.load();
  }

  saveWallpaperIndex();

  document.querySelectorAll('.wallpaper-item').forEach((el, idx) => {
    el.classList.toggle('active', idx === index);
  });
}

// 将当前列表中的 idx 映射到「默认/自定义 + 原始索引」
function resolveWallpaperIndex(idx) {
  const currentDefaults = buildCurrentDefaultWallpapers();
  const defaultCount = currentDefaults.length;

  if (idx < defaultCount) {
    const wp = currentDefaults[idx];
    const originIndex = INITIAL_DEFAULT_WALLPAPERS.findIndex(d => d.url === wp.url);
    return { type: 'default', originIndex };
  }

  const customIndex = idx - defaultCount;
  return { type: 'custom', customIndex };
}

// 删除壁纸（默认 + 自定义）
async function deleteWallpaperByIndex(idx) {
  if (idx < 0 || idx >= wallpapers.length) return;

  const ok = confirm('确认删除这张壁纸吗？');
  if (!ok) return;

  const info = resolveWallpaperIndex(idx);

  if (info.type === 'default') {
    if (
      typeof info.originIndex === 'number' &&
      info.originIndex >= 0 &&
      !disabledDefaultIndices.includes(info.originIndex)
    ) {
      disabledDefaultIndices.push(info.originIndex);
      saveDisabledDefault();
    }
  } else if (info.type === 'custom') {
    customWallpapers.splice(info.customIndex, 1);
    await saveCustomWallpapers();
  }

  rebuildWallpapers();

  if (!wallpapers.length) {
    localStorage.removeItem(LS_INDEX);
    if (bgLayer) bgLayer.style.backgroundImage = 'none';
    const list = document.getElementById('wallpaperList');
    if (list) list.innerHTML = '';
    return;
  }

  if (currentWallpaperIndex === idx) {
    currentWallpaperIndex = Math.max(0, idx - 1);
  } else if (currentWallpaperIndex > idx) {
    currentWallpaperIndex -= 1;
  }

  if (currentWallpaperIndex >= wallpapers.length) {
    currentWallpaperIndex = wallpapers.length - 1;
  }

  saveWallpaperIndex();
  applyWallpaper(currentWallpaperIndex);
  renderWallpaperList();
}

// 渲染壁纸列表
function renderWallpaperList() {
  const list = document.getElementById('wallpaperList');
  if (!list) return;

  list.innerHTML = '';

  wallpapers.forEach((wp, idx) => {
    const item = document.createElement('div');
    item.className = 'wallpaper-item' + (idx === currentWallpaperIndex ? ' active' : '');

    if (wp.type === 'image') {
      // 图片缩略图
      const img = document.createElement('img');
      img.src = wp.url;
      img.alt = '壁纸 ' + (idx + 1);
      item.appendChild(img);
    } else {
      // 视频缩略图：小尺寸自动播放、静音、循环
      const video = document.createElement('video');
      video.className = 'wallpaper-thumb-video';
      video.src = wp.url;
      video.autoplay = true;
      video.loop = true;
      video.muted = true;
      video.playsInline = true; // iOS
      video.setAttribute('playsinline', 'true');

      item.appendChild(video);
    }

    // 点击切换壁纸
    item.addEventListener('click', () => {
      applyWallpaper(idx);
      toggleWallpaperPanel(false);
    });

    // 删除按钮
    const delBtn = document.createElement('button');
    delBtn.className = 'wallpaper-delete-btn';
    delBtn.type = 'button';
    delBtn.textContent = '×';
    delBtn.addEventListener('click', async (e) => {
      e.stopPropagation();
      await deleteWallpaperByIndex(idx);
    });
    item.appendChild(delBtn);

    list.appendChild(item);
  });

  // “添加壁纸”卡片（图片/视频都可以）
  const addItem = document.createElement('div');
  addItem.className = 'wallpaper-item add-wallpaper';
  addItem.innerHTML = `
    <div class="add-wallpaper-content">
      <div class="add-wallpaper-plus">+</div>
      <div>添加壁纸</div>
    </div>
  `;
  addItem.addEventListener('click', (e) => {
    e.stopPropagation();
    const fileInput = document.getElementById('wallpaperFileInput');
    if (fileInput) {
      fileInput.value = '';
      fileInput.click();
    }
  });
  list.appendChild(addItem);
}

function toggleWallpaperPanel(show) {
  const panel = document.getElementById('wallpaperPanel');
  if (!panel) return;

  panel.classList.toggle('show', show);
  panel.setAttribute('aria-hidden', show ? 'false' : 'true');
}

// ========== 4. 搜索引擎相关 ==========

function renderEngineDropdown() {
  const dropdown = document.getElementById('engineDropdown');
  if (!dropdown) return;
  dropdown.innerHTML = '';

  ENGINES.forEach(engine => {
    const div = document.createElement('div');
    div.className = 'engine-item' + (engine.key === currentEngineKey ? ' active' : '');
    div.dataset.key = engine.key;
    div.innerHTML = `
      <span class="engine-icon">${iconSVG(engine.key)}</span>
      <span>${engine.name}</span>
    `;
    div.onclick = (ev) => {
      ev.stopPropagation();
      setEngine(engine.key);
      toggleDropdown(false);
    };
    dropdown.appendChild(div);
  });
}

function setEngine(key) {
  currentEngineKey = key;
  localStorage.setItem('currentEngine', key);

  const eng = ENGINES.find(e => e.key === key) || ENGINES[0];
  const logo = document.getElementById('engineLogo');
  if (logo) {
    logo.innerHTML = iconSVG(eng.key);
  }

  document.querySelectorAll('.engine-item').forEach(el => {
    el.classList.toggle('active', el.dataset.key === key);
  });
}

function toggleDropdown(forceState) {
  const dropdown = document.getElementById('engineDropdown');
  if (!dropdown) return;
  const willOpen = typeof forceState === 'boolean'
    ? forceState
    : !dropdown.classList.contains('open');
  dropdown.classList.toggle('open', willOpen);
}

function bindSearchForm() {
  const form = document.getElementById('searchForm');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const input = document.getElementById('q');
    if (!input) return;
    const kw = input.value.trim();
    if (!kw) return;

    const eng = ENGINES.find(e2 => e2.key === currentEngineKey) || ENGINES[0];
    let url = eng.url + encodeURIComponent(kw);
    if (eng.key === 'douyin') {
      url = 'https://www.douyin.com/search/' + encodeURIComponent(kw);
    }
    window.location.href = url;
  });
}

function bindEngineDropdownEvents() {
  const selector = document.getElementById('engineSelector');
  if (selector) {
    selector.addEventListener('click', (e) => {
      e.stopPropagation();
      toggleDropdown();
    });
  }
  document.addEventListener('click', () => toggleDropdown(false));
}

// ========== 5. 时钟相关 ==========

function updateClock() {
  const clockEl = document.getElementById('clock');
  if (!clockEl) return;

  const now = new Date();
  const h = String(now.getHours()).padStart(2, '0');
  const m = String(now.getMinutes()).padStart(2, '0');
  const s = String(now.getSeconds()).padStart(2, '0');

  clockEl.textContent = `${h}:${m}:${s}`;
}

// ========== 6. 初始化入口 ==========

// 初始化函数 - 修改：使用async/await处理异步操作
async function init() {
  // 壁纸状态
  disabledDefaultIndices = loadDisabledDefault();
  customWallpapers = await loadCustomWallpapers();
  rebuildWallpapers();
  currentWallpaperIndex = loadWallpaperIndex();
  
  // 确保索引有效
  if (currentWallpaperIndex >= wallpapers.length) {
    currentWallpaperIndex = wallpapers.length ? wallpapers.length - 1 : 0;
  }
  
  // 立即应用壁纸，不等待预加载（浏览器会在后台加载图片/视频）
  if (wallpapers.length) {
    applyWallpaper(currentWallpaperIndex);
  } else {
    // 如果没有壁纸，使用第一张默认壁纸作为 fallback
    if (INITIAL_DEFAULT_WALLPAPERS.length > 0) {
      bgLayer.style.backgroundImage = `url('${INITIAL_DEFAULT_WALLPAPERS[0].url}')`;
      bgLayer.style.opacity = '1';
    }
  }

  renderWallpaperList();

  // 壁纸面板事件
  const btn = document.getElementById('wallpaperBtn');
  if (btn) {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      toggleWallpaperPanel(true);
    });
  }

  const panel = document.getElementById('wallpaperPanel');
  if (panel) {
    panel.addEventListener('click', () => toggleWallpaperPanel(false));
  }

  const wallpaperListEl = document.getElementById('wallpaperList');
  if (wallpaperListEl) {
    wallpaperListEl.addEventListener('click', (e) => {
      e.stopPropagation();
    });
  }

  // 本地图片/视频上传（自动识别类型）
  const fileInput = document.getElementById('wallpaperFileInput');
  if (fileInput) {
    fileInput.addEventListener('change', (e) => {
      const file = e.target.files && e.target.files[0];
      if (!file) return;

      const mime = file.type;
      const name = file.name.toLowerCase();

      let type = 'image';
      if (mime.startsWith('video/')) {
        type = 'video';
      } else if (!mime && /\.(mp4|webm|mov|avi|mkv)$/i.test(name)) {
        type = 'video';
      } else if (mime.startsWith('image/')) {
        type = 'image';
      } else if (/\.(png|jpe?g|gif|webp|bmp|apng)$/i.test(name)) {
        type = 'image';
      }

      if (type === 'image') {
        const MAX_SIZE = 5 * 1024 * 1024;
        if (file.size > MAX_SIZE) {
          alert('图片太大了，请选择 5MB 以内的图片。');
          return;
        }

        const reader = new FileReader();
        reader.onload = (ev) => {
          const dataUrl = ev.target && ev.target.result;
          if (!dataUrl) return;

          customWallpapers.push({ type: 'image', url: dataUrl });
          saveCustomWallpapers();
          rebuildWallpapers();

          currentWallpaperIndex = wallpapers.length - 1;
          saveWallpaperIndex();

          applyWallpaper(currentWallpaperIndex);
          renderWallpaperList();
        };

        reader.readAsDataURL(file);
      } else {
        // 视频：使用 FileReader 读取为 dataURL 以便持久保存 - 修改：支持视频持久化存储
        const reader = new FileReader();
        reader.onload = async (ev) => {
          const dataUrl = ev.target && ev.target.result;
          if (!dataUrl) return;

          customWallpapers.push({ type: 'video', url: dataUrl });
          await saveCustomWallpapers(); // 保存到IndexedDB
          rebuildWallpapers();

          currentWallpaperIndex = wallpapers.length - 1;
          saveWallpaperIndex();

          applyWallpaper(currentWallpaperIndex);
          renderWallpaperList();
        };

        reader.readAsDataURL(file);
      }
    });
  }

  // 搜索引擎
  currentEngineKey = localStorage.getItem('currentEngine') || ENGINES[0].key;
  setEngine(currentEngineKey);
  renderEngineDropdown();
  bindSearchForm();
  bindEngineDropdownEvents();

  // 搜索框覆盖层
  const searchBoxEl = document.getElementById('searchForm');
  const searchInputEl = document.getElementById('q');
  const searchOverlayEl = document.getElementById('searchOverlay');

  if (searchBoxEl && searchInputEl && searchOverlayEl) {
    searchBoxEl.classList.remove('focused');

    searchOverlayEl.addEventListener('click', () => {
      searchBoxEl.classList.add('focused');
      searchInputEl.focus();
    });

    searchInputEl.addEventListener('focus', () => {
      searchBoxEl.classList.add('focused');
    });

    searchInputEl.addEventListener('blur', () => {
      if (!searchInputEl.value.trim()) {
        searchBoxEl.classList.remove('focused');
      }
    });
  }

  // 时钟
  updateClock();
  setInterval(updateClock, 1000);
}

// 调用初始化函数
(async () => {
  await init();
})();