package org.falcon;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.io.File;
import java.io.FileNotFoundException;
import java.util.Scanner;

@RestController
public class Home {
    @GetMapping("/")
    public String home()  {
        File file = new File("C:\\Users\\olive\\GitHub\\Games-Website\\Tic-Tac-Toe\\index.html");
        StringBuilder html = new StringBuilder();
        try (Scanner htmlReader = new Scanner(file)) {
            while (htmlReader.hasNextLine()) {
                html.append(htmlReader.nextLine());
            }
        }catch (FileNotFoundException ex) {
            System.err.println(ex.getMessage());
        }
        return html.toString();
    }
}
