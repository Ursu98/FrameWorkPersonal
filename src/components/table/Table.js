import { ExcelComponent } from "@core/ExcelComponent";
import { createTable } from "@/components/table/table.template";
import {$} from "@core/dom";
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
    if (event.target.dataset.resize) {
      const resizer = $(event.target);
      // const parent = resizer.$el.parentNode; // BAD
      // const parent = resizer.$el.closest(".column");// BET but still bed
      const parent = resizer.closest("[data-type= \"resizable\"]");
      console.log("--- Parent", parent);
      // console.log(resizer.$el.getBoundingClientRect());
      console.log(222, parent.getCords());
      // console.log("event", event.target);
      // console.log("Start_Resizing - Table onMousedown",
      //     event.target.dataset.resize);
    }
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
