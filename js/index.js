$(document).ready(function () {

    var board = [
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0]
    ];

    var player = 1;
    var line = [5, 5, 5, 5, 5, 5, 5]
    var pionPlayer = 'player1';

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

    function choosePlayer() {
        if (player % 2 === 0) {
            player++;
            pionPlayer = 'player2';
            $(`#tour`).html('<p>Au tour du joueur 1</p>')
        } else {
            player++;
            pionPlayer = 'player1'
            $(`#tour`).html('<p>Au tour du joueur 2</p>')
        }
    }

    function playOnColumn(column) {

        choosePlayer();
        if (board[line[column]][column] === 0) {
            $(`#${line[column]}-${column}`).addClass(pionPlayer)
            board[line[column]][column] = 1;
        } else if (board[line[column]][column] === 1) {
            if (line[column] === 0) {
                console.log("fin de la colonne, impossible de rajoute des pions");
            } else {
                line[column]--;
                $(`#${line[column]}-${column}`).addClass(pionPlayer)
                board[line[column]][column] = 1;
            }
        }
    }

    function play() {
        $(`#column0`).click(() => { playOnColumn(0) })
        $(`#column1`).click(() => { playOnColumn(1) })
        $(`#column2`).click(() => { playOnColumn(2) })
        $(`#column3`).click(() => { playOnColumn(3) })
        $(`#column4`).click(() => { playOnColumn(4) })
        $(`#column5`).click(() => { playOnColumn(5) })
        $(`#column6`).click(() => { playOnColumn(6) })
        $(`#column7`).click(() => { playOnColumn(7) })
    }

    printBoard()
    play()

})