const cols = 10;
const rows = 10;
const board = [];
const colors = {white:"#fff", red: "#f00", green: "#0a0" }

function fillBoard() {
    for (let rowCount = 0; rowCount < rows; rowCount++) {
        const row = [];

        for (let colCount = 0; colCount < cols; colCount++) {
            const boardIndex = colCount + rowCount;
            if (boardIndex % 2 === 0) {
                row.push(colors.white);
            } else {
                row.push(colors.red);
            }
        }
        board.push(row);
    }
}

function paintBoard() {
    for (let rowCount = 0; rowCount < rows; rowCount++) {
        for (let colCount = 0; colCount < cols; colCount++) {
            const x = rowCount * 60;
            const y = colCount * 60;
            fill(board[rowCount][colCount]);
            rect(x, y, 60, 60);
        }
    }
}

function test() {
    board[3][4] = colors.green;
}

