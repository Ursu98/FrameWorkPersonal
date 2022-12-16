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

  // onClick(event) {
  //   console.log("Table onclick", event.target);
  // }
  onMousedown(event) {
    if (event.target.dataset.resize) {
      console.log(11122, event.target);
      const resizer = $(event.target);
      const $parent = resizer.closest("[data-type= 'resizable']");
      const type = resizer.data.resize;
      console.log(type, 11);
      const cords = $parent.getCords();

      const sideProp = type === "col" ? "bottom" : "right";
      resizer.css({ opacity: 1, zIndex: 1000, [sideProp]: "-2000px" });
      let delta;
      let value;

      document.onmousemove = (event) => {
        if (type === "col") {
          delta = event.pageX - cords.right;
          value = cords.width + delta;
          resizer.css({ right: -delta + "px" });
        } else {
          delta = event.pageY - cords.bottom;
          value = cords.height + delta;
          resizer.css({ bottom: -delta + "px" });
        }
      };
      document.onmouseup = () => {
        document.onmousemove = null;
        document.onmouseup = null;
        resizer.css({ opacity: 0, bottom: 0, right: 0 });

        if (type === "col") {
          document
            .querySelectorAll(`[data-col = "${$parent.data.col}"]`)
            .forEach((el) => {
              el.style.width = value + "px";
            });
          $parent.css({ width: value + "px" });
        } else {
          $parent.css({ height: value + "px" });
        }
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
