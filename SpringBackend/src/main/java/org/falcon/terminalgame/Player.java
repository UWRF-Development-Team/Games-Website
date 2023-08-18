package org.falcon.terminalgame;
public class Player {
    char playerPiece;
    String name;
    boolean isCurrentPlayer;
    public Player(char playerPiece, String name, boolean isCurrentPlayer) {
        this.playerPiece = playerPiece;
        this.name = name;
        this.isCurrentPlayer = isCurrentPlayer;
    }
    //-------------------------------Getters----------------------------------
    public char getPlayerPiece() {
        return this.playerPiece;
    }
    public String getName() {
        return this.name;
    }
    public boolean isCurrentPlayer() {
        return this.isCurrentPlayer;
    }
}
