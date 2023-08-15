package org.falcon.TicTacToeServer.service;

import org.falcon.TicTacToeServer.model.TicTacToe;
import org.springframework.stereotype.Service;
@Service
public class TicTacToeService {
    private TicTacToe game = new TicTacToe();

    // TODO: playTicTacToe() is better suited as ticTacToeSequence()
    //      where each move is a call to a set of input verification methods to,
    //      placement/modification (of image/HTML) methods, and a call to the
    //      determineWinner() method which breaks the loop of ticTacToeSequence()
    //      that is itself a loop that is broken once a proper move is made or
    //      the game is over

    public boolean validChoice(int slot) {
        return this.game.getBoard().isAvailable(slot);
    }
    public String getPieceId(int slot) {
        String prefix = "piece";
        String suffix = switch (slot) {
            case 1 -> "One";
            case 2 -> "Two";
            case 3 -> "Three";
            case 4 -> "Four";
            case 5 -> "Five";
            case 6 -> "Six";
            case 7 -> "Seven";
            case 8 -> "Eight";
            case 9 -> "Nine";
            default -> "Error";
        };
        return prefix + suffix;
    }
    public String getImgSrc() {
        char piece = this.game.getCurrentPlayer().getPlayerPiece();
        return "/images/" + piece + ".png";
    }
    //-------------------------------Getters----------------------------------
    public TicTacToe getGame() {
        return this.game;
    }
}
