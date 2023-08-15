package org.falcon.TicTacToeServer.controller;

import org.falcon.TicTacToeServer.service.TicTacToeService;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class TicTacToeController {
    private final TicTacToeService ticTacToeService;
    public TicTacToeController(TicTacToeService ticTacToeService) {
        this.ticTacToeService = ticTacToeService;
    }
    //----------------------------Game-Page-----------------------------------
    @RequestMapping("/tictactoe")
    public String index() {
        return "index";
    }
    //-----------------------------Make-Move----------------------------------
    @RequestMapping("/tictactoe/board/{slot}")
    public String board(@PathVariable int slot, Model pageModel) {
        if (!this.ticTacToeService.validChoice(slot)) {
            return "redirect:/tictactoe";
        } else {
            this.ticTacToeService.getGame().placePiece(slot);
            pageModel.addAttribute(this.ticTacToeService.getPieceId(slot),
                                   this.ticTacToeService.getImgSrc());
            this.ticTacToeService.getGame().switchPlayer();
        }
        return "index";
    }
    //----------------------------Clear-Board---------------------------------
    @RequestMapping("/tictactoe/board/clear")
    public String clear(Model pageModel) {
        final String VIS_ATTRIBUTE = "opacity: 0.01;";
        String[] pieces = {"visOne", "visTwo", "visThree", "visFour",
                           "visFive", "visSix", "visSeven", "visEight",
                           "visNine"};
        for (String piece : pieces) {
            pageModel.addAttribute(piece, VIS_ATTRIBUTE);
        }
        return "index";
    }
    //-----------------------------Set-Board----------------------------------
    @RequestMapping("/tictactoe/board/set")
    public String set(Model pageModel) {
        String[] pieces = {"pieceOne", "pieceTwo", "pieceThree", "pieceFour",
                           "pieceFive", "pieceSix", "pieceSeven", "pieceEight",
                           "pieceNine"};
        for (String piece : pieces) {
            pageModel.addAttribute(piece, "/images/O.png");
        }
        return "index";
    }
}
