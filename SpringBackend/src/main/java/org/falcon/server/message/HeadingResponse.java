package org.falcon.server.message;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonProperty;

public class HeadingResponse {
    String heading;
    @JsonCreator
    public HeadingResponse(@JsonProperty("heading") String heading) {
        this.heading = heading;
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
