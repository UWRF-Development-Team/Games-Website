package org.falcon.terminalgame;

import java.util.InputMismatchException;
import java.util.Scanner;

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
        if (this.X.isCurrentPlayer()) {
            return this.X;
        } else {
            return this.O;
        }
    }
    //----------------------------Switch-Player-------------------------------
    public void switchPlayer() {
        if (this.X.isCurrentPlayer()) {
            this.X.isCurrentPlayer = false;
            this.O.isCurrentPlayer = true;
        } else {
            this.X.isCurrentPlayer = true;
            this.O.isCurrentPlayer = false;
        }
    }
    //---------------------------Play-Tic-Tac-Toe-----------------------------
    public void playTicTacToe() {
        this.board.resetBoard();
        this.board.printBoard();
        while (true) {
            this.makeMove();
            this.board.printBoard();
            char outcome = this.board.determineWinner();
            if (outcome != 'N') {
                this.endGameMessage(this.getCurrentPlayer().getName());
                    break;
            } else if (this.board.isDraw()) {
                this.endGameMessage();
                break;
            }
            this.switchPlayer();
        }
    }
    //-----------------------------Safe-User-Input----------------------------
    public int userInput() {
        Scanner input = new Scanner(System.in);
        int choice = -1;
        boolean validInput = false;
        do {
            System.out.println("Enter a number between 1 and 9.");
            try {
                choice = input.nextInt();
                if (choice < 1 || choice > 9) {
                    System.out.println("Please enter a number" +
                            " between 1 and 9.");
                } else if (!this.board.isAvailable(--choice)) {
                    System.out.println("That spot is already taken. Choose" +
                            " another.");
                } else {
                    validInput = true;
                }
            } catch (InputMismatchException ex) {
                System.out.println("Please enter a valid number.");
                input.nextLine(); // Reset the input
            }
        } while (!validInput);
        return choice;
    }
    //------------------------------Make-Move---------------------------------
    public void makeMove() {
        int slotChoice = this.userInput();
        this.placePiece(slotChoice);
    }
    //----------------------------End-Game-Message----------------------------
    public void endGameMessage(String winner) {
        String message = String.format("Congratulations %s! You won!", winner);
        System.out.println(message);
    }
    public void endGameMessage() {
        System.out.println("It's a draw!");
    }
    //------------------------------Place-Piece-------------------------------
    public void placePiece(int slot) {
        this.board.getBoard()[slot] = this.getCurrentPlayer().getPlayerPiece();
    }
    public static void main(String[] args) {
        TicTacToe game = new TicTacToe();
        game.playTicTacToe();
    }
}
