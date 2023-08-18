package org.falcon.server.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
@RestController
public class TicTacToeRestController {

    //------------------------------Game-Status-------------------------------
    @GetMapping("/api/tictactoe/status")
    public String getStatus() {
        String status =
                """
                {
                    "game_status": "none"
                }
                """;
        return status;
    }
}
// http://localhost:8080/api/tictactoe/status
