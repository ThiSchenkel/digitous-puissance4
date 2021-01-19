
var board = [
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
];

$(document).ready(function () {
    function printBoard() {
        var boardHtml = `<div id="container">`;
        for (var i = 0; i < 6; i++) {
            boardHtml += `<div class="row" id="row${i}">`;
            for (var j = 0; j < 7; j++) {
                boardHtml += `<div id = "col${j}" class="col-1 case">${board[i][j]}</div>`;
            }
            boardHtml += `</div>`;
        }
        boardHtml += `</div>`;
        $('#board').html(boardHtml)
    }

    printBoard();
})