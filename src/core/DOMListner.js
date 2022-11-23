export class DOMListner {
  constructor($root, listners = []) {
    if (!$root) {
      throw new Error("No root provider from DOMListner");
    }
    this.$root = $root;
    this.listners = listners;
  }

  initDomListners() {
    console.log(123, this.listners);
  }

  removeDomListners() {
    console.log(1231, this.listners);
  }
}
