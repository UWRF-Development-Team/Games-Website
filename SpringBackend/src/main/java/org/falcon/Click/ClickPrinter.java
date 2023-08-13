package org.falcon.Click;

import org.springframework.context.ApplicationEventPublisher;
import org.springframework.stereotype.Component;

@Component
public class ClickPrinter {
    private ApplicationEventPublisher publisher;
    public ClickPrinter(ApplicationEventPublisher publisher) {
        this.publisher = publisher;
    }
    public void printClick(String source) {
        ClickEvent event = new ClickEvent();
        event.setSource(source);
        event.setTimestamp(java.time.LocalDate.now());
        publisher.publishEvent(event);
    }
}
