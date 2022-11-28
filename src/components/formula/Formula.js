import { ExcelComponent } from "@core/ExcelComponent";

export class Formula extends ExcelComponent {
  static className = "excel__formula";

  constructor($root) {
    super($root, {
      name: "formula",
      listeners: ["input", "click"],
    });
  }

  onInput(event) {
    console.log(event.target.textContent.trim());
    console.log("Formula onInput", event.target);
  }

  onClick(event) {
    console.log("Formula onClick", event);
  }

  toHTML() {
    return `
        <div class="info">
            fx
        </div>
        <div class="input" contenteditable spellcheck="false">
        </div>`;
  }
}
