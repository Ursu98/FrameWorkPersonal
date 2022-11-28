import { capitalise } from "@core/utils";

const getMethodName = (eventName) => {
  return "on" + capitalise(eventName);
};

export class DOMListner {
  constructor($root, listeners = []) {
    if (!$root) {
      throw new Error("No root provider from DOMListner");
    }
    this.$root = $root;
    this.listeners = listeners;
  }

  initDomListeners() {
    this.listeners.forEach((listener) => {
      const method = getMethodName(listener);
      const name = this.name || "";
      if (!this[method]) {
        throw new Error(`
       Method: ${method}, is not implemented in ${name} Component
        `);
      }
      this[method] = this[method].bind(this);
      this.$root.on(listener, this[method]);
    });
  }

  removeDomListeners() {
    this.listeners.forEach((listener) => {
      const method = getMethodName(listener);
      const name = this.name || "";
      if (this[!method]) {
        throw new Error(`
       Method: ${method}, is implemented in ${name} Component
        `);
      }
      this[method] = this[method].bind(this);
      this.$root.off(listener, this[method]);
    });
    console.log(1231, this.listeners);
  }
}
