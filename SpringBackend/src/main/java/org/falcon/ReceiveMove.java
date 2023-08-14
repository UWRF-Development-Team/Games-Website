package org.falcon;

import org.springframework.stereotype.Component;
import org.springframework.stereotype.Controller;
import org.springframework.stereotype.Service;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;


@Controller
public class ReceiveMove {
    @RequestMapping("/receiveMove")
    public String receiveMove(Model pageModel) {
        pageModel.addAttribute("imgPath", "");
        return "index";
    }
}
