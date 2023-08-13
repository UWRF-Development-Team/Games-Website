package org.falcon.Click;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ClickController {
    int clickCount;
    private ClickService clickService;
    @Autowired
    // This annotation makes it so that Spring will automatically
    // create a ClickService object and pass it to the constructor when it
    // creates a ClickController object. This is called dependency injection.
    public ClickController(ClickService clickService) {
        this.clickService = clickService;
        this.clickCount = 0;
    }
    @GetMapping("/click")
    public String click() {
        this.clickService.printClick("ClickController");
        this.clickCount++;
        return "Click detected! Click count: " + this.clickCount + ".";
    }
}
