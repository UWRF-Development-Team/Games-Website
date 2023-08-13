package org.falcon.Click;

import org.springframework.context.ApplicationEventPublisher;
import org.springframework.stereotype.Component;

import java.time.LocalDate;

@Component
public class ClickPrinter {
    private ApplicationEventPublisher publisher;
    public ClickPrinter(ApplicationEventPublisher publisher) {
        this.publisher = publisher;
    }

    public void printClick(String source) {
        ClickEvent event = new ClickEvent();
        event.setSource(source);
        event.setTimestamp(LocalDate.now());
        this.publisher.publishEvent(event);
    }
}
