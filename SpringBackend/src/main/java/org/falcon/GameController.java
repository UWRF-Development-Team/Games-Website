package org.falcon;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/")
public class GameController {
    @RequestMapping("/")
    public String home() {
        return "index";
    }
}
