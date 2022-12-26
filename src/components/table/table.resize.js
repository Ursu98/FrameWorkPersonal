import { $ } from "../../core/dom";

export const resizeHandler = (event) => {
  if (event.target.dataset.resize) {
    const resizer = $(event.target);
    const $parent = resizer.closest("[data-type= 'resizable']");
    const type = resizer.data.resize;
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
};
