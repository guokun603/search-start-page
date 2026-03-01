/**
 * Tests for the search engine dropdown fix.
 *
 * Bug: When the search input is empty and the user clicks the search button
 * or the engine selector, the input's blur event fired first (from mousedown),
 * removed the .focused class, set pointer-events:none on the engine selector,
 * and prevented the dropdown from opening or staying open.
 *
 * Fix: mousedown listeners with e.preventDefault() on both the engine selector
 * and the search button keep the input focused (prevent blur), so the .focused
 * class stays and the dropdown remains accessible.
 */

/**
 * @jest-environment jsdom
 */

const fs = require('fs');
const path = require('path');

// Load the page HTML
const html = fs.readFileSync(
  path.resolve(__dirname, '../index.html'),
  'utf8'
);

// Minimal localStorage mock
const localStorageMock = (() => {
  let store = {};
  return {
    getItem: (k) => store[k] ?? null,
    setItem: (k, v) => { store[k] = String(v); },
    removeItem: (k) => { delete store[k]; },
    clear: () => { store = {}; },
  };
})();

// Minimal IndexedDB mock (resolves with empty arrays)
function makeIDBMock() {
  const req = { onsuccess: null, onerror: null, onupgradeneeded: null, result: null };
  const store = {
    getAll: () => {
      const r = { onsuccess: null, onerror: null };
      setTimeout(() => r.onsuccess && r.onsuccess({ target: { result: [] } }), 0);
      return r;
    },
    clear: () => {},
    put: () => {},
  };
  const tx = {
    objectStore: () => store,
    oncomplete: null,
    onerror: null,
  };
  const db = {
    objectStoreNames: { contains: () => true },
    transaction: () => { setTimeout(() => tx.oncomplete && tx.oncomplete(), 0); return tx; },
  };
  req.result = db;
  return {
    open: () => {
      setTimeout(() => req.onsuccess && req.onsuccess({ target: req }), 0);
      return req;
    },
  };
}

// Set up the DOM and run main.js once for all tests in this file
// (const declarations in main.js cannot be re-declared in the same window context)
beforeAll(async () => {
  Object.defineProperty(window, 'localStorage', { value: localStorageMock, writable: true });
  Object.defineProperty(window, 'indexedDB', { value: makeIDBMock(), writable: true, configurable: true });
  window.location = { href: '' };

  document.open();
  document.write(html);
  document.close();

  // Run main.js in this document's context
  const mainJs = fs.readFileSync(path.resolve(__dirname, '../main.js'), 'utf8');
  const script = document.createElement('script');
  script.textContent = mainJs;
  document.head.appendChild(script);

  // Wait for async init (IndexedDB promises)
  await new Promise(r => setTimeout(r, 100));
});

// Reset per-test state between each test
beforeEach(() => {
  localStorageMock.clear();

  // Close the dropdown
  const dropdown = document.getElementById('engineDropdown');
  if (dropdown) dropdown.classList.remove('open');

  // Clear input
  const input = document.getElementById('q');
  if (input) input.value = '';

  // Remove focused class
  const form = document.getElementById('searchForm');
  if (form) form.classList.remove('focused');
});

describe('Search engine dropdown fix', () => {
  test('engine selector has a mousedown listener that calls preventDefault', () => {
    const selector = document.getElementById('engineSelector');
    expect(selector).not.toBeNull();

    // Simulate mousedown: if preventDefault is called, defaultPrevented should be true
    const md = new MouseEvent('mousedown', { bubbles: true, cancelable: true });
    selector.dispatchEvent(md);
    expect(md.defaultPrevented).toBe(true);
  });

  test('search button has a mousedown listener that calls preventDefault', () => {
    const btn = document.querySelector('.search-btn');
    expect(btn).not.toBeNull();

    const md = new MouseEvent('mousedown', { bubbles: true, cancelable: true });
    btn.dispatchEvent(md);
    expect(md.defaultPrevented).toBe(true);
  });

  test('clicking engine selector with empty input keeps .focused class on search box', () => {
    const form = document.getElementById('searchForm');
    const input = document.getElementById('q');
    const selector = document.getElementById('engineSelector');

    // Open the search box
    form.classList.add('focused');
    input.value = '';

    // Simulate the mousedown (with our fix, this should NOT blur the input
    // because preventDefault is called). In jsdom blur is not automatically
    // triggered by mousedown, but we confirm the class stays.
    selector.dispatchEvent(new MouseEvent('mousedown', { bubbles: true, cancelable: true }));
    selector.dispatchEvent(new MouseEvent('click', { bubbles: true, cancelable: true }));

    expect(form.classList.contains('focused')).toBe(true);
  });

  test('clicking engine selector opens the dropdown', () => {
    const form = document.getElementById('searchForm');
    const selector = document.getElementById('engineSelector');
    const dropdown = document.getElementById('engineDropdown');

    form.classList.add('focused');

    // mousedown (preventDefault prevents blur) + click
    selector.dispatchEvent(new MouseEvent('mousedown', { bubbles: true, cancelable: true }));
    selector.dispatchEvent(new MouseEvent('click', { bubbles: true, cancelable: true }));

    expect(dropdown.classList.contains('open')).toBe(true);
  });

  test('clicking a dropdown engine item changes the engine and closes the dropdown', () => {
    const form = document.getElementById('searchForm');
    const selector = document.getElementById('engineSelector');
    const dropdown = document.getElementById('engineDropdown');

    form.classList.add('focused');

    // Open the dropdown
    selector.dispatchEvent(new MouseEvent('mousedown', { bubbles: true, cancelable: true }));
    selector.dispatchEvent(new MouseEvent('click', { bubbles: true, cancelable: true }));
    expect(dropdown.classList.contains('open')).toBe(true);

    // Click on the Google engine item
    const googleItem = dropdown.querySelector('[data-key="google"]');
    expect(googleItem).not.toBeNull();

    googleItem.dispatchEvent(new MouseEvent('mousedown', { bubbles: true, cancelable: true }));
    googleItem.dispatchEvent(new MouseEvent('click', { bubbles: true, cancelable: true }));

    // Dropdown should be closed after selecting
    expect(dropdown.classList.contains('open')).toBe(false);

    // Engine should be switched to google
    expect(window.localStorage.getItem('currentEngine')).toBe('google');
  });

  test('clicking search button with empty input keeps .focused class so dropdown remains accessible', () => {
    const form = document.getElementById('searchForm');
    const btn = form.querySelector('.search-btn');
    const input = document.getElementById('q');

    form.classList.add('focused');
    input.value = '';

    // mousedown with preventDefault keeps input focused → .focused stays
    btn.dispatchEvent(new MouseEvent('mousedown', { bubbles: true, cancelable: true }));
    // Verify .focused wasn't removed by anything in the mousedown handler
    expect(form.classList.contains('focused')).toBe(true);
  });

  test('clicking search button with non-empty input keeps .focused class', () => {
    const form = document.getElementById('searchForm');
    const btn = form.querySelector('.search-btn');
    const input = document.getElementById('q');

    form.classList.add('focused');
    input.value = 'hello';

    btn.dispatchEvent(new MouseEvent('mousedown', { bubbles: true, cancelable: true }));

    expect(form.classList.contains('focused')).toBe(true);
  });

  test('after clicking search with empty input, user can still open the dropdown', () => {
    const form = document.getElementById('searchForm');
    const btn = form.querySelector('.search-btn');
    const input = document.getElementById('q');
    const selector = document.getElementById('engineSelector');
    const dropdown = document.getElementById('engineDropdown');

    form.classList.add('focused');
    input.value = '';

    // Click search (empty input - no navigation)
    btn.dispatchEvent(new MouseEvent('mousedown', { bubbles: true, cancelable: true }));
    btn.dispatchEvent(new MouseEvent('click', { bubbles: true, cancelable: true }));

    // .focused should still be on (our fix prevents blur from removing it)
    expect(form.classList.contains('focused')).toBe(true);

    // User can now open dropdown
    selector.dispatchEvent(new MouseEvent('mousedown', { bubbles: true, cancelable: true }));
    selector.dispatchEvent(new MouseEvent('click', { bubbles: true, cancelable: true }));

    expect(dropdown.classList.contains('open')).toBe(true);
  });

  test('selecting an engine updates the logo and marks the item as active', () => {
    const form = document.getElementById('searchForm');
    const selector = document.getElementById('engineSelector');
    const dropdown = document.getElementById('engineDropdown');
    const logo = document.getElementById('engineLogo');

    form.classList.add('focused');
    selector.dispatchEvent(new MouseEvent('mousedown', { bubbles: true, cancelable: true }));
    selector.dispatchEvent(new MouseEvent('click', { bubbles: true, cancelable: true }));

    const biliItem = dropdown.querySelector('[data-key="bili"]');
    expect(biliItem).not.toBeNull();
    biliItem.dispatchEvent(new MouseEvent('mousedown', { bubbles: true, cancelable: true }));
    biliItem.dispatchEvent(new MouseEvent('click', { bubbles: true, cancelable: true }));

    // Logo should now show Bili icon (SVG content)
    expect(logo.innerHTML).toContain('svg');
    // Active class should be on bili item
    expect(biliItem.classList.contains('active')).toBe(true);
    // Other items should not be active
    const bingItem = dropdown.querySelector('[data-key="bing"]');
    expect(bingItem.classList.contains('active')).toBe(false);
  });
});

