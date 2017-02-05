class TicTacToe {
    constructor() {
      this.player = 'x';
        this.field = [[null,null,null],[null,null,null],[null,null,null]];
    }

    getCurrentPlayerSymbol() {
        return this.player;
    }

    nextTurn(rowIndex, columnIndex) {

        if (this.field[rowIndex][columnIndex] == null) {
            this.field[rowIndex][columnIndex] = this.player;
            if (this.field[rowIndex][columnIndex] == 'x') {

                return  this.player = 'o';
            }
            else {
                return this.player = 'x';
            }
        }

    }

    isFinished() {
        if(this.getWinner()!= null) {
            return true;

        }
        return this.noMoreTurns();

    }

    getWinner() {

        if (this.field[0][0] == this.field[1][1] && this.field[1][1] == this.field[2][2] ) {

            return this.field[0][0];
        }

        if (this.field[0][2] == this.field[1][1] && this.field[1][1] == this.field[2][0] ) {

            return this.field[2][0];
        }

        if (this.field[0][0] == this.field[0][1] && this.field[0][1] == this.field[0][2] ) {
            return this.field[0][0];
        }
        if (this.field[1][0] == this.field[1][1] && this.field[1][1] == this.field[1][2] ) {
            return this.field[1][0];
        }
        if (this.field[2][0] == this.field[2][1] && this.field[2][1] == this.field[2][2] ) {
            return this.field[2][0];
        }

        if (this.field[0][0] == this.field[1][0] && this.field[1][0] == this.field[2][0] ) {
            return this.field[0][0];
        }
        if (this.field[0][1] == this.field[1][1] && this.field[1][1] == this.field[2][1] ) {
            return this.field[0][1];
        }
        if (this.field[0][2] == this.field[1][2] && this.field[1][2] == this.field[2][2] ) {
            return this.field[0][2];
        }

        return null;
    }

    noMoreTurns() {

        for (var column = 0; column < this.field.length; column++) {
            for (var row = 0; row < this.field[column].length; row++) {
                if (this.field[row][column] == null) {
                    return false;
                }
            }
        }
        return true;
    }

    isDraw() {
        if(this.getWinner()!=null) {

            return false;
        }
        return this.noMoreTurns();
    }

    getFieldValue(rowIndex, colIndex) {
        if(this.field[rowIndex][colIndex]==null) {
            return null;
        }
        else  {
            return  this.field[rowIndex][colIndex];
        }

    }
}

module.exports = TicTacToe;
