package org.falcon.Click;

import java.time.LocalDate;

public class ClickEvent {
    private String source;
    private LocalDate timestamp;
    public ClickEvent() {

    }
    public ClickEvent(String source, LocalDate timestamp) {
        this.source = source;
        this.timestamp = timestamp;
    }
    //-------------------------------Getters----------------------------------
    public String getSource() {
        return source;
    }
    public LocalDate getTimestamp() {
        return timestamp;
    }
    //-------------------------------Setters----------------------------------
    public void setSource(String source) {
        this.source = source;
    }
    public void setTimestamp(LocalDate timestamp) {
        this.timestamp = timestamp;
    }
}
