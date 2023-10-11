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
                model.addAttribute("gameInfoHeader", "O's Turn");
                this.service.getGame().makeMove(intSpot);
                this.selectSpotModel("/images/X.png", intSpot, model);

            } else {
                model.addAttribute("gameInfoHeader", "X's Turn");
                this.service.getGame().makeMove(intSpot);
                this.selectSpotModel("/images/O.png", intSpot, model);

            }
        }
        //-------------------------Determine-Winner---------------------------
        // Horizontal
        for (int i = 0; i < 9; i += 3) {
            if (this.service.getGame().getBoard().getBoard()[i] ==
                    this.service.getGame().getBoard().getBoard()[i + 1] &&
                    this.service.getGame().getBoard().getBoard()[i + 1] ==
                    this.service.getGame().getBoard().getBoard()[i + 2] &&
                    this.service.getGame().getBoard().getBoard()[i] != ' ') {
                if (this.service.getGame().getBoard().getBoard()[i] == 'X') {
                    model.addAttribute("gameInfoHeader", "X Wins!");
                } else {
                    model.addAttribute("gameInfoHeader", "O Wins!");
                }
            }
        }
        // Vertical
        for (int i = 0; i < 3; i++) {
            if (this.service.getGame().getBoard().getBoard()[i] ==
                    this.service.getGame().getBoard().getBoard()[i + 3] &&
                    this.service.getGame().getBoard().getBoard()[i + 3] ==
                    this.service.getGame().getBoard().getBoard()[i + 6] &&
                    this.service.getGame().getBoard().getBoard()[i] != ' ') {
                if (this.service.getGame().getBoard().getBoard()[i] == 'X') {
                    model.addAttribute("gameInfoHeader", "X Wins!");
                } else {
                    model.addAttribute("gameInfoHeader", "O Wins!");
                }
            }
        }
        // Diagonal
        if (this.service.getGame().getBoard().getBoard()[0] ==
                this.service.getGame().getBoard().getBoard()[4] &&
                this.service.getGame().getBoard().getBoard()[4] ==
                this.service.getGame().getBoard().getBoard()[8] &&
                this.service.getGame().getBoard().getBoard()[0] != ' ') {
            if (this.service.getGame().getBoard().getBoard()[0] == 'X') {
                model.addAttribute("gameInfoHeader", "X Wins!");
            } else {
                model.addAttribute("gameInfoHeader", "O Wins!");
            }
        } else if (this.service.getGame().getBoard().getBoard()[2] ==
                this.service.getGame().getBoard().getBoard()[4] &&
                this.service.getGame().getBoard().getBoard()[4] ==
                this.service.getGame().getBoard().getBoard()[6] &&
                this.service.getGame().getBoard().getBoard()[2] != ' ') {
            if (this.service.getGame().getBoard().getBoard()[2] == 'X') {
                model.addAttribute("gameInfoHeader", "X Wins!");
            } else {
                model.addAttribute("gameInfoHeader", "O Wins!");
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
