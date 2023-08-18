Player moves are made in the core game.
Player moves are put into a board container.
The board container is the logic which determines 
valid moves and the game status.
The board container will need access to the HTML
to apply the status of the board to the status of
the screen/HTML.
Main container or Tic-Tac-Toe container will set
the announcement of the game status. It will give
the announcement header the current player's
information. It will modify the start button to 
a play again button visually and modifies the buttons
to attach the resetBoard() functionality.
Once the board algorithm determines the game is over
event listeners will be removed from the board.
-----------------------------------------------------
General Spring Logic & Flow
-----------------------------------------------------
Category:             Controller
* Overview: Handles incoming HTTP requests and define
* the entry point of the application. They process the
* requests, provide appropriate responses, and interacts
* with the services.
Category:             Service
* Overview: Brain of the application. It makes decisions
* and performs actions for the application. 

Category:             Repository

Category:             Entity

Category:              Mapping
* Overview: Associates or connects components together.
* It is often used to specify how incoming requests are
* directed to specific methods in the controller.


Branch of logic:

Item 1: Ex. Controller
  |
  V
Item 2: Ex. Mapping
  |
  V
Item 3: Ex. Service
  |
  V
Ect...
-----------------------------------------------------
Logic Flow Hypothesis
-----------------------------------------------------
