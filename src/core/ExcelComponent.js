import { DOMListner } from "@core/DOMListner";

export class ExcelComponent extends DOMListner {
  constructor($root, options = {}) {
    super($root, options.listners);
  }

  toHTML() {
    return "";
  }

  init() {
    this.initDomListners();
  }
}
