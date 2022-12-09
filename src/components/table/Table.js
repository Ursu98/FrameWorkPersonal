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
      const $parent = resizer.closest("[data-type= \"resizable\"]");
      const cords = $parent.getCords();
      document.onmousemove = (event) =>{
        const delta = event.pageX - cords.right;
        console.log("rest--", delta);
        const value = cords.width + delta;
        $parent.$el.style.width = value + "px";
        console.log("parent data---", $parent.data);
        document.querySelectorAll(`[data-col = "${$parent.data.col}"]`)
            .forEach((el) =>{
              console.log(11, el);
              el.style.width = value + "px";
            });
      };
      document.onmouseup = () =>{
        document.onmousemove = null;
      };
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
