import { ExcelComponent } from "@core/ExcelComponent";

export class Header extends ExcelComponent {
  static className = "excel__header";

  constructor($root) {
    super($root, {
      name: "header",
      listeners: ["input", "click"],
    });
  }

  toHTML() {
    return ` <label>
            <input type="text" class="input" value="Tabel nou"/>
        </label>
        <div>
            <div class="button">
                <span class="material-icons md-18">delete</span>
            </div>
            <div class="button">
                <span class="material-icons md-18">exit_to_app</span>
            </div>
        </div>`;
  }
}
