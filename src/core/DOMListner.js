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
      this.$root.on(listener, this[method]);
    });
  }

  removeDomListners() {
    console.log(1231, this.listeners);
  }
}
