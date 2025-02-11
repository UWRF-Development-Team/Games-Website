package org.falcon.server.message;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonProperty;

public class HeadingRequest {
    String heading;
    @JsonCreator
    public HeadingRequest(@JsonProperty("heading") String header) {
        this.heading = header;
    }
    //------------------------------Getters-----------------------------------
    public String getHeading() {
        return this.heading;
    }
    //------------------------------Setters-----------------------------------
    public void setHeading(String heading) {
        this.heading = heading;
    }
}
