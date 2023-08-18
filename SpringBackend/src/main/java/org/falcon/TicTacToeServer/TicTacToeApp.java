package org.falcon.TicTacToeServer;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;


@SpringBootApplication
public class TicTacToeApp { // Possibly start a V2 to weave in better logic,
                            // practice, and foresight.
                            // A consensus may come while trying to understand
                            // fix, and discover a better way. Or possibly,
                            // you could improve in marginal ways but the cost
                            // of trying to refactor bad code is a worse
                            // outcome than starting over with a marginal
                            // product.
    public static void main(String[] args) {
        SpringApplication.run(TicTacToeApp.class, args);
    }
}
