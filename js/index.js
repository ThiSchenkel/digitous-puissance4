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
    var win = 0;

    function printBoard() {
        var boardHtml = `<div class="container">`;
        for (var i = 0; i < 6; i++) {
            boardHtml += `<div class="row centrage" id="row${i}">`; // Génère les lignes
            for (var j = 0; j < 7; j++) {
                boardHtml += `<div class="col-1 case centrage" id="${i}-${j}"></div>`; // Génère les colonnes
            }
            boardHtml += `</div>`;
        }
        boardHtml += `<div class="row centercol">`;
        for (var k = 0; k < 7; k++) { // Génère les button
            boardHtml += `<div class="col-1"><input type="button" class="buttoncol " value="${k + 1}" id="column${k}" alt="play at ${k + 1}"></div>`;
        }
        boardHtml += `</div>`;
        $('#board').html(boardHtml)
    }

    function choosePlayer() { // Fonction pour choisir le joueur
        if (win === 1 || win === 2) {
            $(`#newparty`).html(`<p>Bravo joueur ${player}!</p>`)
        } else {
            if (player === 2) { // Nombre pair = joueur2
                player = 1;
                pionPlayer = 'player1';
                $(`#newparty`).html('<p>Joueur 1 à toi de jouer!</p>')
            } else { // Nombre impaire = joueur1
                player = 2;
                pionPlayer = 'player2'
                $(`#newparty`).html('<p>Joueur 2 à toi de jouer!</p>')
            }
        }
    }

    function playOnColumn(column) { // Fonction pour jouer sur la colonne

        if (win === 1 || win === 2) {
            return;
        } else {
            if (board[line[column]][column] === 0) { // Si la dernière ligne = 0
                $(`#${line[column]}-${column}`).addClass(pionPlayer) // Alors j'ajoute un pion
                board[line[column]][column] = player; // Remplace par le chiffre du joueur
                checkRow(line[column], player);
                checkColumn(column, player);
                checkDiagonalLeft(player)
                checkDiagonalRight(player)
            } else if (board[line[column]][column] === 1 || board[line[column]][column] === 2) { // Si non si la ligne = 1
                if (line[column] === 0) { // Si le joueur essaye de jouer sur la première ligne
                    console.log("fin de la colonne, impossible de rajoute des pions"); // Alors j'indique qu'on ne peut plus mettre de pion
                } else { // Si non
                    line[column]--;
                    $(`#${line[column]}-${column}`).addClass(pionPlayer) // Je joue le pion
                    board[line[column]][column] = player; // Remplace par le chiffre du joueur
                    checkRow(line[column], player);
                    checkColumn(column, player);
                    checkDiagonalLeft(player)
                    checkDiagonalRight(player)
                }
            }
            choosePlayer();
        }
    }

    function checkRow(row, player) { // Fonction win horizontale
        for (var i = 0; i < 4; i++) {
            if (board[row][i] === player && // Check si a la position "i" il y a le p1
                board[row][i + 1] === player && // Check si a la position "i + 1" il y a le p1
                board[row][i + 2] === player && // Check si a la position "i + 2" il y a le p1
                board[row][i + 3] === player) { // Check si a la position "i + 3" il y a le p1
                console.log(`Gagné! en ligne par le joueurs ${player} sur la ligne ${row}`);
                win = player;
            }
        }
    }

    function checkColumn(column, player) { // Fonction win verticale
        for (var i = 0; i < 3; i++) {
            if (board[i][column] === player &&
                board[i + 1][column] === player &&
                board[i + 2][column] === player &&
                board[i + 3][column] === player) {
                console.log(`Gagné! en ligne par le joueurs ${player} sur la colonne ${column}`)
                win = player;
            }
        }
    }

    function checkDiagonalLeft(player) {
        for (var i = 3; i < 6; i++) {
            for (var j = 0; j < 4; j++) {
                if (board[i][j] === player &&
                    board[i - 1][j + 1] === player &&
                    board[i - 2][j + 2] === player &&
                    board[i - 3][j + 3] === player) {
                    console.log(`Gagné! en diagonale par le joueurs ${player}`)
                    win = player;
                }
            }
        }
    }

    function checkDiagonalRight(player) {
        for (var i = 3; i < 6; i++) {
            for (var j = 3; j < 7; j++) {
                if (board[i][j] === player &&
                    board[i - 1][j - 1] === player &&
                    board[i - 2][j - 2] === player &&
                    board[i - 3][j - 3] === player) {
                    console.log(`Gagné! en diagonale par le joueurs ${player}`)
                    win = player;
                }
            }
        }
    }

    function retry() {
        board = [
            [0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0]
        ];
        player = 1;
        line = [5, 5, 5, 5, 5, 5, 5]
        pionPlayer = 'player1';
        win = 0;
        printBoard();
        playWithButton()
        $('#newparty').html(`Pour commencer la partie , cliquer sur un chiffre`)
    }

    function playWithButton() { // Fonction boutton pour jouer sur la colonne
        $(`#column0`).click(() => { playOnColumn(0) })
        $(`#column1`).click(() => { playOnColumn(1) })
        $(`#column2`).click(() => { playOnColumn(2) })
        $(`#column3`).click(() => { playOnColumn(3) })
        $(`#column4`).click(() => { playOnColumn(4) })
        $(`#column5`).click(() => { playOnColumn(5) })
        $(`#column6`).click(() => { playOnColumn(6) })
        $(`#column7`).click(() => { playOnColumn(7) })
        $('#retry').click(() => { retry() });
    }

    // function playWithCase() { // Boutton pour cliquer sur les cases
    //     $(`#0-0`).click(() => { playOnColumn(0) })
    //     $(`#0-1`).click(() => { playOnColumn(1) })
    //     $(`#0-2`).click(() => { playOnColumn(2) })
    //     $(`#0-3`).click(() => { playOnColumn(3) })
    //     $(`#0-4`).click(() => { playOnColumn(4) })
    //     $(`#0-5`).click(() => { playOnColumn(5) })
    //     $(`#0-6`).click(() => { playOnColumn(6) })
    // }

    printBoard()
    playWithButton()
})