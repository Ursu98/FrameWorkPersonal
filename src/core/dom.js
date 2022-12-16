class Dom {
  constructor(selector) {
    this.$el =
      typeof selector === "string"
        ? document.querySelector(selector)
        : selector;
  }

  html(html) {
    if (typeof html === "string") {
      // console.log(111, this.$el);
      this.$el.innerHTML = html;
      return this;
    }
    return this.$el.outerHTML.trim();
  }

  clear() {
    this.html("");
    return this;
  }

  append(node) {
    if (node instanceof Dom) {
      node = node.$el;
    }
    if (Element.prototype.append) {
      this.$el.append(node);
    } else {
      this.$el.appendChild(node);
    }
  }

  get data() {
    return this.$el.dataset;
  }

  closest(selector) {
    return $(this.$el.closest(selector));
  }
  getCords() {
    return this.$el.getBoundingClientRect();
  }
  on(eventType, callback) {
    this.$el.addEventListener(eventType, callback);
  }

  off(eventType, callback) {
    this.$el.removeEventListener(eventType, callback);
  }

  css(styles = {}) {
    // for (const styleKey in styles) {
    //   if (styles.hasOwnProperty.call(styleKey)) {
    //     console.log("styleKey", styleKey);
    //     console.log(123123, styles[styleKey]);
    //     this.$el.style[styleKey] = styles[styleKey];
    //   }
    // }
    Object.keys(styles).forEach((keys) => {
      console.log(keys, 111);
      this.$el.style[keys] = styles[keys];
    });
  }
}

export function $(selector) {
  return new Dom(selector);
}

$.create = (tagName, classes = "") => {
  const el = document.createElement(tagName);
  if (classes) {
    el.classList.add(classes);
  }
  return $(el);
};
