var grid;
var gameWon;

function findOption() {
    var optionsArray = [];
    optionsArray.push([[0, 0, 0, 0, 0, 0, 6, 8, 0],
                                    [0, 0, 0, 0, 7, 3, 0, 0, 9],
                                    [3, 0, 9, 0, 0, 0, 0, 4, 5],
                                    [4, 9, 0, 0, 0, 0, 0, 0, 0],
                                    [8, 0, 3, 0, 5, 0, 9, 0, 2],
                                    [0, 0, 0, 0, 0, 0, 0, 3, 6],
                                    [9, 6, 0, 0, 0, 0, 3, 0, 8],
                                    [7, 0, 0, 6, 8, 0, 0, 0, 0],
                                    [0, 2, 8, 0, 0, 0, 0, 0, 0]]);
    var selectedOption = Math.floor(Math.random() * (optionsArray.length));
    grid = optionsArray[selectedOption];
}

function populateGrid() {
    gameWon = false;
    findOption();
}

function verifyWin() {
    var aux;
    var lin = 0, col = 0, grids = 0;
    for(var i = 0; i < 9; i++) {
        aux = [0, 0, 0, 0, 0, 0, 0, 0, 0];
        for(var j = 0; j < 9; j++) {
            aux[grid[i][j]] = 1;
        }
        var cnt = 0;
        for(var k = 0; k < 9; k++) cnt += aux[k];
        if (cnt == 9) lin += 1;
    }

    for(var j = 0; j < 9; j++) {
        aux = [0, 0, 0, 0, 0, 0, 0, 0, 0];
        for(var i = 0; i < 9; i++) {
            aux[grid[i][j]] = 1;
        }
        var cnt = 0;
        for(var k = 0; k < 9; k++) cnt += aux[k];
        if (cnt == 9) col += 1;
    }

    var corners = [[0, 0], [3, 3], [6, 6], [0, 3], [0, 6], [3, 6], [3, 0], [6, 0], [6, 3]];

    for(var x in corners) {
        aux = [0, 0, 0, 0, 0, 0, 0, 0, 0];
        for(var i = x[0]; i <= x[0]+2; i++) {
            for(var j = x[1]; j <= x[1]+2; j++) {
                aux[grid[i][j]] = 1;
            }
        }
        var cnt = 0;
        for(var k = 0; k < 9; k++) cnt += aux[k];
        if (cnt == 9) grids += 1;
    }

    if (lin == 9 && col == 9 && grids == 9) gameWon = true;
    else gameWon = false;
}

