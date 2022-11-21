/**
 * export class Excel
 */
export class Excel {
  /**
   * create constructor
   * @param {string} selector
   * @param {{components: *[]}} options
   */
  constructor(selector, options) {
    this.$el = document.querySelector(selector);
    this.components = options.components || [];
  }

  getRoot() {
    const $root = document.createElement("div");
    this.components.forEach((Component) => {
      const component = new Component();
      // console.log(component);
      // console.log(component.toHTML());
      $root.insertAdjacentHTML("beforeend", component.toHTML());
    });
    return $root;
  }

  render() {
    const nod = document.createElement("h1");
    nod.textContent = "privet Brat";
    this.$el.append(this.getRoot());
  }
}
