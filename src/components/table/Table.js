import { ExcelComponent } from "@core/ExcelComponent";
import { createTable } from "@/components/table/table.template";

export class Table extends ExcelComponent {
  static className = "excel__table";

  constructor($root) {
    super($root, {
      name: "table",
      listeners: ["click", "mousedown", "mouseup"],
    });
  }

  onClick(event) {
    console.log("Table onclick", event.target);
  }

  onMousedown(event) {
    console.log("Table onMousedown", event.target);
  }

  // onMousemove(event) {
  //   console.log("Table onMousemove", event.target);
  // }

  onMouseup(event) {
    console.log("Table onMouseup", event.target);
  }

  toHTML() {
    return createTable();
  }
}
