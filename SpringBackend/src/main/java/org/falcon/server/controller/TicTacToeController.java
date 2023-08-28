package org.falcon.server.controller;
import org.falcon.server.service.TicTacToeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class TicTacToeController {
    // Note: many methods return a String. This String is the name of the HTML
    // page that is returned to the user without the .html extension.
    @Autowired
    private TicTacToeService service;


    //----------------------------Game-Page-----------------------------------
    @RequestMapping("/tictactoe")
    public String index() {
        return "index";
    }
    @RequestMapping("/tictactoe/changeheader")
    public String changeheader(Model model) {
        model.addAttribute("gameInfoHeader", "Tic Tac Toe");
        return "index";
    }
    @RequestMapping("/tictactoe/startgame")
    public String startgame(Model model) {

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
}
