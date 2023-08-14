package org.falcon;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
public class Controller {
    // This will eventually be the path to the game. For now, it's just a
    // placeholder. It will be a GET request and will return a JSON object
    // containing the game board and the current player. For now, it will
    // only generate a test output phrase.
    @GetMapping("/game")
    public String game() {
        return "Tic Tac Toe";
    }
}
