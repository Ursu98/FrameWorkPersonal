import { ExcelComponent } from "@core/ExcelComponent";

export class Toolbar extends ExcelComponent {
  static className = "excel__toolbar";

  constructor($root) {
    super($root, {
      name: "toolbar",
      listeners: ["click"],
    });
  }
  onClick(event) {
    console.log("Toolbar onClick", event.target);
  }

  toHTML() {
    return `   <div class="button">
            <span class="material-icons md-18"> format_align_left </span>
        </div>
        <div class="button">
            <span class="material-icons md-18"> format_align_justify </span>
        </div>
        <div class="button">
            <span class="material-icons md-18"> format_align_right </span>
        </div>
        <div class="button">
            <span class="material-icons md-18"> format_bold </span>
        </div>
        <div class="button">
            <span class="material-icons md-18"> format_italic </span>
        </div>
        <div class="button">
            <span class="material-icons md-18"> format_underlined </span>
        </div>`;
  }
}
