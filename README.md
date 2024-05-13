# Automation Starter Kit

## Setup

This will start a web server hosting the turn based game.

```sh
npm run start:client
```

## Tooling

```sh
npm test // ci mode
```

```sh
npm run test:ui // interactive mode
```

## First exercise

-   Inspect the game board by right clicking on it and selecting the 'inspect' option.
-   Ensure the elements tab is selected an investigate the HTML
-   To the left of the elements tab is a 'pointer' icon. Select it and hover of the tictactoe board
-   Use the above techniques to identify ways to uniquely idenify the square you're interested in

Using the example test in game.cy.js as a guide, try and click another square on the board.

Try selecting squares using a variety of selectors

-   by type
-   by data-testid
-   by class
-   by id

Build other test cases

-   Ensure you can't click on the same square twice
-   Ensure the 'next' turn is for the correct 'player' i.e. 0 or X
-   Can the game be won by X / 0?
-   Can the game be drawn?
-   Can you restart the game?
