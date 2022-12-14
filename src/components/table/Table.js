import { ExcelComponent } from "@core/ExcelComponent";
import { createTable } from "@/components/table/table.template";
import { $ } from "@core/dom";
export class Table extends ExcelComponent {
  static className = "excel__table";

  constructor($root) {
    super($root, {
      name: "table",
      listeners: ["mousedown"],
    });
  }

  onClick(event) {
    console.log("Table onclick", event.target);
  }
  onMousedown(event) {
    if (event.target.dataset.resize) {
      const resizer = $(event.target);
      const $parent = resizer.closest("[data-type= 'resizable']");
      const type = resizer.data.resize;
      console.log(type, 11);
      const cords = $parent.getCords();
      document.onmousemove = (event) => {
        if (type === "col") {
          const delta = event.pageX - cords.right;
          console.log("rest--", delta);
          const value = cords.width + delta;
          // $parent.$el.style.width = value + "px";
          $parent.css({
            width: value + "px",
            color: "green",
          });
          console.log(11111111, $parent);
          console.log("parent data---", $parent.data);
          document
            .querySelectorAll(`[data-col = "${$parent.data.col}"]`)
            .forEach((el) => {
              el.style.width = value + "px";
            });
        } else {
          console.log(11111111, $parent);

          const delta = event.pageY - cords.bottom;
          const value = cords.height + delta;
          console.log(value);
          // $parent.$el.style.height = value + "px";
          $parent.css({
            height: value + "px",
            color: "red",
          });
          // document
          //     .querySelectorAll(`[data-row="${$parent.data.row}"]`)
          //     .forEach((el) => {
          //       el.style.height = value + "px";
          //     });
        }
      };
      document.onmouseup = () => {
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
