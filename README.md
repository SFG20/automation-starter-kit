# Automation Starter Kit
## Setup

To run locally, you can start the server to test the application, you can run:

```sh
npm i
npm start
```

Using a web browser, enter the address:

- [http://localhost:3000](http://localhost:3000)

If you prefer to use a remote version to test against, you can see the app here:

- [https://sfg20.github.io/automation-starter-kit](https://sfg20.github.io/automation-starter-kit)

You should see the game board that the user sees. This is the application we will be testing.

## Tooling

You can run the tests in Continuous integration mode using:

```sh
npm test 
```
Or, as you're developing the tests, you may find the interactive mode a little easier:

```sh
npm run test:ui // interactive mode
```


## First exercise

- Inspect the game board by right clicking on it and selecting the 'inspect' option.
- Ensure the elements tab is selected an investigate the HTML
- To the left of the elements tab is a 'pointer' icon. Select it and hover of the tictactoe board
- Use the above techniques to identify ways to uniquely idenify the square you're interested in

Using the example test in game.spec.js as a guide, make try and click another square on the board.

Try selecting squares using a variety of selectors
- by type
- by data-testid
- by class
- by id

## References to help with the exercise

- [https://docs.cypress.io/api/table-of-contents](https://docs.cypress.io/api/table-of-contents)


