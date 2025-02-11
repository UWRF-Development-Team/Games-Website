package org.falcon.server.model;

public class Board {
    private char[] board;
    public Board() {
        this.board = new char[9];
        this.resetBoard();
    }
    //-------------------------------Methods----------------------------------
    public void resetBoard() {
        for (int i = 0; i < 9; i++) {
            this.board[i] = ' ';
        }
    }
    //--------------------------Spot-Availability-----------------------------
    public boolean isAvailable(int slot) {
        return this.board[slot] == ' ';
    }
    //---------------------------Determine-Draw-------------------------------
    public boolean isDraw() {
        for (int i = 0; i < 9; i++) {
            if (this.board[i] == ' ') {
                return false;
            }
        }
        return true;
    }
    //--------------------------Determine-Winner------------------------------
    public char determineWinner() {
        //--------------------------------Rows--------------------------------
        for (int i = 0; i < 9; i += 3) {
            if (this.board[i] == this.board[i + 1] &&
                this.board[i + 1] == this.board[i + 2] &&
                this.board[i] != ' ') {
                return this.board[i];
            }
        }
        //------------------------------Columns-------------------------------
        for (int i = 0; i < 3; i++) {
            if (this.board[i] == this.board[i + 3] &&
                this.board[i + 3] == this.board[i + 6] &&
                this.board[i] != ' ') {
                return this.board[i];
            }
        }
        //------------------------------Diagonals-----------------------------
        if (this.board[0] == this.board[4] &&
            this.board[4] == this.board[8] &&
            this.board[0] != ' ') {
            return this.board[0];
        } else if (this.board[2] == this.board[4] &&
                   this.board[4] == this.board[6] &&
                   this.board[2] != ' ') {
            return this.board[2];
        }
        return 'N';
    }
    //--------------------------Print-Current-Board---------------------------
    public void printBoard() {
        System.out.println("-------------"); // 0 1 2    1 2 3
        for (int i = 0; i < 9; i += 3) {     // 3 4 5 -> 4 5 6
            System.out.println("| " +        // 6 7 8    7 8 9
                               this.board[i] +     " | " +
                               this.board[i + 1] + " | " +
                               this.board[i + 2] + " |");
            System.out.println("-------------");
        }
    }

    //------------------------------Getters-----------------------------------
    public char[] getBoard() {
        return this.board;
    }

}
