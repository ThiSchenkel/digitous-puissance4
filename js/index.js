$(document).ready(function () {

    var board = [
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0]
    ];

    function printBoard() {
        var boardHtml = `<div class="container">`;
        for (var i = 0; i < 6; i++) {
            boardHtml += `<div class="row" id="row${i}">`; // Génère les lignes
            for (var j = 0; j < 7; j++) {
                boardHtml += `<div class="col-1 case" id="${i}-${j}">${board[i][j]}</div>`; // Génère les colonnes
            }
            boardHtml += `</div>`;
        }
        boardHtml += `<div class="row">`;
        for (var k = 0; k < 7; k++) { // Génère les button
            boardHtml += `<div class="col-1"><input type="button" value="${k + 1}" id="column${k}"></div>`;
        }
        boardHtml += `</div>`;
        $('#board').html(boardHtml)
    }

    var player = 1;

    function play() {

        var line = [5, 5, 5, 5, 5, 5, 5]
        var pionPlayer = 'player1';

        $(`#column0`).click(function () {
            if (player % 2 === 0) {
                player++;
                pionPlayer = 'player2';
                $(`#tour`).html('<p>Au tour du joueur 1</p>')
            } else {
                player++;
                pionPlayer = 'player1'
                $(`#tour`).html('<p>Au tour du joueur 2</p>')
            }
            if (board[line[0]][0] === 0) {
                $(`#${line[0]}-${0}`).addClass(pionPlayer)
                board[line[0]][0] = 1;
            } else if (board[line[0]][0] === 1) {
                line[0]--;
                $(`#${line[0]}-${0}`).addClass(pionPlayer)
                board[line[0]][0] = 1;
            }
        })
        $(`#column1`).click(function () {
            if (player % 2 === 0) {
                player++;
                pionPlayer = 'player2';
                $(`#tour`).html('<p>Au tour du joueur 1</p>')
            } else {
                player++;
                pionPlayer = 'player1'
                $(`#tour`).html('<p>Au tour du joueur 2</p>')
            }
            if (board[line[1]][1] === 0) {
                $(`#${line[1]}-${1}`).addClass(pionPlayer)
                board[line[1]][1] = 1;
            } else if (board[line[1]][1] === 1) {
                line[1]--;
                $(`#${line[1]}-${1}`).addClass(pionPlayer)
                board[line[1]][1] = 1;
            }
        })
        $(`#column2`).click(function () {
            if (player % 2 === 0) {
                player++;
                pionPlayer = 'player2';
                $(`#tour`).html('<p>Au tour du joueur 1</p>')
            } else {
                player++;
                pionPlayer = 'player1'
                $(`#tour`).html('<p>Au tour du joueur 2</p>')
            }
            if (board[line[2]][2] === 0) {
                $(`#${line[2]}-${2}`).addClass(pionPlayer)
                board[line[2]][2] = 1;
            } else if (board[line[2]][2] === 1) {
                line[2]--;
                $(`#${line[2]}-${2}`).addClass(pionPlayer)
                board[line[2]][2] = 1;
            }
        })
    }

    printBoard()
    play()

})