const CODES = {
  A: 65,
  Z: 90,
};

const createRow = (content) => {
  return `
    <div class="row">
        <div class="row-info"></div>
            <div class="row-data"> ${content}
        </div>
    </div>
  `;
};

const createCol = (col) => {
  return `
    <div class="column">
      ${col}
    </div>
  `;
};

// const createCell = () => {
//   return `
// <div class="cell" contenteditable="true">B1</div>
// `;
// };
const toChar = (_, index) =>{
  return String.fromCharCode(CODES.A + index);
};

export const createTable = (rowsCount = 15) => {
  const rows = [];

  const colsCount = CODES.Z - CODES.A + 1;
  const cols = new Array(colsCount)
      .fill("")
      .map((toChar))
      .map(createCol).join("");
  console.log(12, cols);
  rows.push(createRow(cols));
  for (let i = 0; i < rowsCount; i++) {
    rows.push(createRow());
  }
  return rows.join("");
};
