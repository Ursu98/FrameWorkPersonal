export class DOMListner {
  constructor($root, listeners = []) {
    if (!$root) {
      throw new Error("No root provider from DOMListner");
    }
    this.$root = $root;
    this.listeners = listeners;
  }

  initDomListeners() {
    // console.log("This listners: ", this.listners);
    this.listeners.forEach((listener) => {
      console.log(123, listener);
      console.log(this.$root);
      this.$root.on(listener, () => {
        // console.log("ciota vrode tuta", listener);
        const method = "on" + listener[0].toUpperCase() + listener.slice(1);
        console.log("method", method);
      });
    });
  }

  removeDomListners() {
    console.log(1231, this.listeners);
  }
}
