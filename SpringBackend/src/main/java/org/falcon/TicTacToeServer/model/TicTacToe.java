package org.falcon.TicTacToeServer.model;

public class TicTacToe {
    Player X, O;
    Board board;
    public TicTacToe() {
        this.X = new Player('X', "Player 1", true);
        this.O = new Player('O', "Player 2", false);
        this.board = new Board();
    }
    //--------------------------Get-Current-Player----------------------------
    public Player getCurrentPlayer() {
        if (this.X.getIsCurrentPlayer()) {
            return this.X;
        } else {
            return this.O;
        }
    }
    //----------------------------Switch-Player-------------------------------
    public void switchPlayer() {
        if (this.X.getIsCurrentPlayer()) {
            this.X.setIsCurrentPlayer(false);
            this.O.setIsCurrentPlayer(true);
        } else {
            this.X.setIsCurrentPlayer(true);
            this.O.setIsCurrentPlayer(false);
        }
    }
    //---------------------------Play-Tic-Tac-Toe-----------------------------
    // TODO: add frontend/backend communication to complete this method
    public void playTicTacToe() {
        this.board.resetBoard();
        while (true) {
            this.makeMove();
            // call to frontend to update visual board
            char outcome = this.board.determineWinner();
            if (outcome != 'N') {
                // end game sequence. freeze board, display winner
            } else if (this.board.isDraw()) {
                // end game sequence. freeze board, display draw
                break;
            }
            this.switchPlayer();
        }
    }
    //---------------------------Safe-User-Input------------------------------
    public int userInput() {
        return 1;
    }
    //-----------------------------Make-Move----------------------------------
    public void makeMove() {
        int slotChoice = this.userInput();
        this.placePiece(slotChoice);
    }
    //-----------------------------Place-Piece--------------------------------
    public void placePiece(int slot) {
        this.board.getBoard()[slot] = this.getCurrentPlayer().getPlayerPiece();
    }
    //---------------------------End-Game-Message-----------------------------
    public void endGameMessage(String winner) {
        // display winner message, freeze board, and display play again button
        //TODO: add this method to another container method called endGame()
    }
    public void endGameMessage() {
        // display draw message, freeze board, and display play again button
    }
    //-------------------------Determine-Image-Path---------------------------
    public String determineImgPath(char piece) {
        if (piece == 'X') {
            return "images/X.png";
        } else {
            return "images/O.png";
        }
    }
    //------------------------------Getters-----------------------------------
    public Player getX() {
        return this.X;
    }
    public Player getO() {
        return this.O;
    }
    public Board getBoard() {
        return this.board;
    }
}
