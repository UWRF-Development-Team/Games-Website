package org.falcon.server.controller;

import org.falcon.server.message.HeadingRequest;
import org.falcon.server.message.HeadingResponse;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
public class TicTacToeRestController {

    //------------------------------Game-Status-------------------------------
    @GetMapping("/api/status")
    public String getStatus() {
        String status =
                """
                {
                    "game_status": "none"
                }
                """;
        return status;
    }
    @PostMapping("/api/header")
    public ResponseEntity<HeadingResponse> changeHeader(@RequestBody HeadingRequest request) {
        String heading = request.getHeading();
        HeadingResponse response = new HeadingResponse(heading);
        return ResponseEntity.ok(response);
    }
}
// http://localhost:8080/api/tictactoe/status

