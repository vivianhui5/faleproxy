/**
 * Jest setup file to polyfill browser APIs needed by cheerio/undici
 */

// Polyfill File API for Node.js 18.x compatibility in Jest
if (typeof global.File === 'undefined') {
  global.File = class File {
    constructor(bits, name, options = {}) {
      this.bits = bits;
      this.name = name;
      this.options = options;
      this.type = options.type || '';
      this.lastModified = options.lastModified || Date.now();
    }
  };
}

// Polyfill FormData if needed
if (typeof global.FormData === 'undefined') {
  global.FormData = class FormData {
    constructor() {
      this.data = new Map();
    }
    append(key, value) {
      this.data.set(key, value);
    }
    get(key) {
      return this.data.get(key);
    }
  };
}

