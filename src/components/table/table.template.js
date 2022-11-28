// const CODES = {
//   A: 65,
//   Z: 90,
// };

const createRow = () => {
  return `
    <div class="row">
        <div class="row-info"></div>
            <div class="row-data">
        </div>
    </div>
  `;
};

// const createColl = () => {
//   return `
//   <div class="column"></div>
//   `;
// };

// const createCell = () => {
//   return `
// <div class="cell" contenteditable="true">B1</div>
// `;
// };

export const createTable = (rowsCount = 15) => {
  // const colsCount = CODES.Z - CODES.A;
  const rows = [];
  rows.push(createRow());
  for (let i = 0; i < rowsCount; i++) {
    rows.push(createRow());
  }
  return rows.join("");
};
