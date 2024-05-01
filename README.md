# Automation Starter Kit

## Setup

This will start a web server hosting the turn based game.

```sh
PORT=4000 npm start
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

Using the example test in game.spec.js as a guide, make try and click another square on the board.

Try selecting squares using a variety of selectors

-   by type
-   by data-testid
-   by class
-   by id
