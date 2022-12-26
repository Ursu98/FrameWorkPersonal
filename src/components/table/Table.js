import { ExcelComponent } from "@core/ExcelComponent";
import { createTable } from "@/components/table/table.template";
import { resizeHandler } from "./table.resize";

export class Table extends ExcelComponent {
  static className = "excel__table";

  constructor($root) {
    super($root, {
      name: "table",
      listeners: ["mousedown"],
    });
  }

  // onClick(event) {
  //   console.log("Table onclick", event.target);
  // }
  onMousedown(event) {
    resizeHandler(event);
  }

  // onMousemove(event) {
  //   console.log("Table onMousemove", event.target);
  // }

  // onMouseup(event) {
  //   console.log("Table onMouseup", event.target);
  // }

  toHTML() {
    return createTable();
  }
}
