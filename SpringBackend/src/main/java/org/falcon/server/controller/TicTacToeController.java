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
    //       page that is returned to the user without the .html extension.
    @Autowired
    private TicTacToeService service;
    @Autowired
    private HttpSession session;
    static final String[] pieceSrc = {"pieceOne", "pieceTwo", "pieceThree",
                                      "pieceFour", "pieceFive", "pieceSix",
                                      "pieceSeven", "pieceEight",
                                      "pieceNine"};
    static final String[] pieceVis = {"visOne", "visTwo", "visThree",
                                      "visFour", "visFive", "visSix",
                                      "visSeven", "visEight", "visNine"};

    //----------------------------Game-Page-----------------------------------
    @RequestMapping("/tictactoe")
    public String index() {
        return "index";
    }
    //------------------------Simple-Change-Header----------------------------
    @RequestMapping("/tictactoe/changeheader")
    public String changeHeader(Model model) {
        model.addAttribute("gameInfoHeader", "Tic Tac Toe");
        return "index";
    }
    //-----------------------------Start-Game---------------------------------
    @Deprecated
    @RequestMapping("/tictactoe/startgame")
    public String startGame(Model model) {
        model.addAttribute("visOne", "opacity: 0.001;");
        return "index";
    }
    //----------------------------Reset-Board---------------------------------
    @RequestMapping("/tictactoe/resetboard")
    public String resetBoard(Model model) {
        this.service.getGame().getBoard().resetBoard();
        final String INVIS_ATTR = "opacity: 0.001;";

        for (String attr : pieceVis) {
            model.addAttribute(attr, INVIS_ATTR);
        }
        return "boardPatch :: boardPatch";
    }
    //----------------------------Select-Spot---------------------------------
//    @Deprecated
//    //@RequestMapping("/tictactoe/select/{spot}")
//    public String selectSpot(@PathVariable String spot, Model model) {
//        //-------------------------Load-Board---------------------------------
//        for (int i = 0; i < 9; i++) {
//            if (this.service.getGame().getBoard().getBoard()[i] == 'X') {
//                model.addAttribute(pieceVis[i], "opacity: 1");
//                model.addAttribute(pieceSrc[i], "/images/X.png");
//            } else if (this.service.getGame().getBoard().getBoard()[i] == 'O') {
//                model.addAttribute(pieceVis[i], "opacity: 1");
//                model.addAttribute(pieceSrc[i], "/images/O.png");
//            } else {
//                model.addAttribute(pieceVis[i], "opacity: 0.001");
//            }
//        }
//        //-------------------------Make-Move----------------------------------
//        int intSpot = Integer.parseInt(spot) - 1;
//        if (this.service.getGame().getBoard().isAvailable(intSpot)) {
//            if (this.service.getGame().getCurrentPlayer().getPlayerPiece() == 'X') {
//                this.service.getGame().makeMove(intSpot);
//                this.selectSpotModel("/images/X.png", intSpot, model);
//            } else {
//                this.service.getGame().makeMove(intSpot);
//                this.selectSpotModel("/images/O.png", intSpot, model);
//            }
//        }
//        this.service.getGame().getBoard().printBoard();
//        return "index";
//    }
    //----------------------------Select-Spot---------------------------------
//    @RequestMapping("/tictactoe/select/{spot}")
//    public String selectSpot(@PathVariable String spot, Model model) {
//        //-------------------------Load-Board---------------------------------
//        for (int i = 0; i < 9; i++) {
//            if (this.service.getGame().getBoard().getBoard()[i] == 'X') {
//                model.addAttribute(pieceVis[i], "opacity: 1");
//                model.addAttribute(pieceSrc[i], "/images/X.png");
//            } else if (this.service.getGame().getBoard().getBoard()[i] == 'O') {
//                model.addAttribute(pieceVis[i], "opacity: 1");
//                model.addAttribute(pieceSrc[i], "/images/O.png");
//            } else {
//                model.addAttribute(pieceVis[i], "opacity: 0.001");
//            }
//        }
//        //-------------------------Make-Move----------------------------------
//        int intSpot = switch (spot) {
//            case "one" -> 0;
//            case "two" -> 1;
//            case "three" -> 2;
//            case "four" -> 3;
//            case "five" -> 4;
//            case "six" -> 5;
//            case "seven" -> 6;
//            case "eight" -> 7;
//            case "nine" -> 8;
//            default -> -1;
//        };
//        if (this.service.getGame().getBoard().isAvailable(intSpot)) {
//            if (this.service.getGame().getCurrentPlayer().getPlayerPiece() == 'X') {
//                this.service.getGame().makeMove(intSpot);
//                this.selectSpotModel("/images/X.png", intSpot, model);
//            } else {
//                this.service.getGame().makeMove(intSpot);
//                this.selectSpotModel("/images/O.png", intSpot, model);
//            }
//        }
//        this.service.getGame().getBoard().printBoard();
//        return "index";
//    }
    @RequestMapping("/tictactoe/select/{spot}")
    public String selectSpot(@PathVariable String spot, Model model) {
        //-------------------------Load-Board---------------------------------
        for (int i = 0; i < 9; i++) {
            if (this.service.getGame().getBoard().getBoard()[i] == 'X') {
                model.addAttribute(pieceVis[i], "opacity: 1");
                model.addAttribute(pieceSrc[i], "/images/X.png");
            } else if (this.service.getGame().getBoard().getBoard()[i] == 'O') {
                model.addAttribute(pieceVis[i], "opacity: 1");
                model.addAttribute(pieceSrc[i], "/images/O.png");
            } else {
                model.addAttribute(pieceVis[i], "opacity: 0.001");
            }
        }
        //-------------------------Make-Move----------------------------------
        int intSpot = switch (spot) {
            case "one" -> 0;
            case "two" -> 1;
            case "three" -> 2;
            case "four" -> 3;
            case "five" -> 4;
            case "six" -> 5;
            case "seven" -> 6;
            case "eight" -> 7;
            case "nine" -> 8;
            default -> -1;
        };
        if (this.service.getGame().getBoard().isAvailable(intSpot)) {
            if (this.service.getGame().getCurrentPlayer().getPlayerPiece() == 'X') {
                this.service.getGame().makeMove(intSpot);
                this.selectSpotModel("/images/X.png", intSpot, model);
            } else {
                this.service.getGame().makeMove(intSpot);
                this.selectSpotModel("/images/O.png", intSpot, model);
            }
        }
        this.service.getGame().getBoard().printBoard();
        return "boardPatch :: boardPatch";
    }

    //-------------------------Select-Spot-Model------------------------------
    public void selectSpotModel(String imgPath, int spot, Model model) {
        String visAttr = "opacity: 1";
        model.addAttribute(pieceVis[spot], visAttr);
        model.addAttribute(pieceSrc[spot], imgPath);
    }
    //--------------------------------Test------------------------------------
    @RequestMapping("/tictactoe/test/changeheader/{header}")
    public String changeHeader(@PathVariable String header, Model model) {
        model.addAttribute("gameInfoHeader", header);
        return "index";
    }
}
