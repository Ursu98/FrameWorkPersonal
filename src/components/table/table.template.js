const CODES = {
  A: 65,
  Z: 90,
};

const createRow = (index, content) => {
  const resizer = index
    ? " <div class = 'row-resize ' " + "data-resize='row'  > </div>"
    : "";
  return `
    <div class = "row" data-type = "resizable" >
        <div class="row-info">${index ? index : ""}  
        ${resizer}
         </div>
            <div class="row-data"> ${content}
        </div>
    </div>
  `;
};

const createCol = (col, id) => {
  // console.log("sadas", id);
  return `
    <div class="column" data-type="resizable" data-col="${id}">
      ${col}
      <div class="col-resize " data-resize="col"> </div>
    </div>
  `;
};

const createCell = (_, col) => {
  // console.log("index col", col);
  return `
<div class="cell" contenteditable="true" data-col="${col}">
<div class="cell-resize " data-resize="cell"> </div>

</div>
`;
};
const toChar = (_, index) => {
  return String.fromCharCode(CODES.A + index);
};

export const createTable = (rowsCount = 50) => {
  const rows = [];
  const colsCount = CODES.Z - CODES.A + 1;
  const cols = new Array(colsCount)
    .fill("")
    .map(toChar)
    .map(createCol)
    .join("");

  rows.push(createRow(null, cols));

  for (let i = 0; i < rowsCount; i++) {
    const cells = new Array(colsCount).fill("").map(createCell).join("");
    rows.push(createRow(i + 1, cells));
  }
  return rows.join("");
};
