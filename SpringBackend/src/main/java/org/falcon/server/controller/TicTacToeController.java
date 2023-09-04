package org.falcon.server.controller;
import jakarta.servlet.http.HttpSession;
import org.falcon.server.service.TicTacToeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class TicTacToeController {
    // Note: many methods return a String. This String is the name of the HTML
    // page that is returned to the user without the .html extension.
    @Autowired
    private TicTacToeService service;
    @Autowired
    private HttpSession session;


    //----------------------------Game-Page-----------------------------------
    @RequestMapping("/tictactoe")
    public String index() {
        return "index";
    }
    @RequestMapping("/tictactoe/changeheader")
    public String changeHeader(Model model) {
        model.addAttribute("gameInfoHeader", "Tic Tac Toe");
        return "index";
    }
    @RequestMapping("/tictactoe/startgame")
    public String startGame(Model model) {
        model.addAttribute("visOne", "opacity: 0.001;");
        return "index";
    }
    @RequestMapping("/tictactoe/resetboard")
    public String resetBoard(Model model) {
        this.service.getGame().getBoard().resetBoard();
        final String INVIS_ATTR = "opacity: 0.001;";
        String[] vis = {"visOne", "visTwo", "visThree", "visFour", "visFive",
                "visSix", "visSeven", "visEight", "visNine"};
        for (String attr : vis) {
            model.addAttribute(attr, INVIS_ATTR);
        }
        return "index";
    }
    @RequestMapping("/tictactoe/select/{spot}")
    public String selectSpot(@PathVariable String spot, Model model) {

        for (int i = 0; i < 9; i++) {
            String[] pieceSrc = {"pieceOne", "pieceTwo", "pieceThree",
                        "pieceFour", "pieceFive", "pieceSix", "pieceSeven",
                        "pieceEight", "pieceNine"};
            String[] vis = {"visOne", "visTwo", "visThree", "visFour", "visFive",
                    "visSix", "visSeven", "visEight", "visNine"};
            if (this.service.getGame().getBoard().getBoard()[i] == 'X') {
                model.addAttribute(vis[i], "opacity: 1");
                model.addAttribute(pieceSrc[i], "/images/X.png");
            } else if (this.service.getGame().getBoard().getBoard()[i] == 'O') {
                model.addAttribute(vis[i], "opacity: 1");
                model.addAttribute(pieceSrc[i], "/images/O.png");
            } else {
                model.addAttribute(vis[i], "opacity: 0.001");
            }
        }

        int intSpot = Integer.parseInt(spot) - 1;
        if (this.service.getGame().getBoard().isAvailable(intSpot)) {
            if (this.service.getGame().getCurrentPlayer().getPlayerPiece() == 'X') {
                this.service.getGame().makeMove(intSpot);

                String[] pieceSrc = {"pieceOne", "pieceTwo", "pieceThree",
                        "pieceFour", "pieceFive", "pieceSix", "pieceSeven",
                        "pieceEight", "pieceNine"};
                String[] vis = {"visOne", "visTwo", "visThree", "visFour", "visFive",
                        "visSix", "visSeven", "visEight", "visNine"};
                String visAttr = "opacity: 1";
                model.addAttribute(vis[intSpot], visAttr);
                model.addAttribute(pieceSrc[intSpot], "/images/X.png");
            } else {
                this.service.getGame().makeMove(intSpot);
                String[] pieceSrc = {"pieceOne", "pieceTwo", "pieceThree",
                        "pieceFour", "pieceFive", "pieceSix", "pieceSeven",
                        "pieceEight", "pieceNine"};
                String[] vis = {"visOne", "visTwo", "visThree", "visFour", "visFive",
                        "visSix", "visSeven", "visEight", "visNine"};
                String visAttr = "opacity: 1";
                model.addAttribute(vis[intSpot], visAttr);
                model.addAttribute(pieceSrc[intSpot], "/images/O.png");
            }
        }
        this.service.getGame().getBoard().printBoard();
        return "index";
    }
    //--------------------------------Test------------------------------------
    @RequestMapping("/tictactoe/test/changeheader/{header}")
    public String changeHeader(@PathVariable String header, Model model) {
        model.addAttribute("gameInfoHeader", header);
        return "index";
    }

}
