package org.falcon.Click;

import org.springframework.context.event.EventListener;
import org.springframework.stereotype.Component;

@Component
public class ClickListener {
    @EventListener(ClickEvent.class)
    public void handleEvent(ClickEvent event) {
        System.out.println("Click from: " + event.getSource() + " at: " + event.getTimestamp());
    }
}
