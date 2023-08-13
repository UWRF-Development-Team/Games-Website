package org.falcon.Click;

import org.springframework.stereotype.Service;

@Service
public class ClickService {
    private ClickPrinter printer;
    public ClickService(ClickPrinter printer) {
        this.printer = printer;
    }
    public void printClick(String source) {
        printer.printClick(source);
    }
}
