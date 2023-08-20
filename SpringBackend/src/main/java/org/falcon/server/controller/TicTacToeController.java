package org.falcon.server.controller;

import org.falcon.server.service.TicTacToeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class TicTacToeController {
    // Note: many methods return a String. This String is the name of the HTML
    // page that is returned to the user without the .html extension.

    //----------------------------Game-Page-----------------------------------
    @RequestMapping("/")
    public String index() {
        return "index";
    }
    @PostMapping("/changeheader")
    public String changeheader(Model model) {
        model.addAttribute("gameInfoHeader", "Tic Tac Toe");
        return "index";
    }
}
