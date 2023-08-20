package org.falcon.server.service;

import org.falcon.server.model.TicTacToe;
import org.springframework.stereotype.Service;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

@Service
public class TicTacToeService {
    private TicTacToe game = new TicTacToe();
    // Game object holds the logic for the game

    //-------------------------------Getters----------------------------------
    public TicTacToe getGame() {
        return this.game;
    }


}
