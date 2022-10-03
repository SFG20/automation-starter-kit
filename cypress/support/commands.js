<<<<<<< HEAD
// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

let LOCAL_STORAGE_MEMORY = {};

Cypress.Commands.add("saveLocalStorage", () => {
  Object.keys(localStorage).forEach(key => {
    LOCAL_STORAGE_MEMORY[key] = localStorage[key];
  });
});

Cypress.Commands.add("restoreLocalStorage", () => {
  Object.keys(LOCAL_STORAGE_MEMORY).forEach(key => {
    localStorage.setItem(key, LOCAL_STORAGE_MEMORY[key]);
  });
});
=======
/// <reference types="cypress" />

let LOCAL_STORAGE_MEMORY = {}

Cypress.Commands.add('saveLocalStorage', () => {
    Object.keys(localStorage).forEach((key) => {
        LOCAL_STORAGE_MEMORY[key] = localStorage[key]
    })
})

Cypress.Commands.add('restoreLocalStorage', () => {
    Object.keys(LOCAL_STORAGE_MEMORY).forEach((key) => {
        localStorage.setItem(key, LOCAL_STORAGE_MEMORY[key])
    })
})

Cypress.Commands.add('login', (user, password) => {
    cy.acceptCookies()
    cy.get('#loginEmailInput').type(user)
    cy.get('#loginPasswordInput').type(password)
    cy.get('#termsAndConditions').click()
    cy.get('#showSubscriptions').contains('Login').click()
})

Cypress.Commands.add('usePrimarySubscription', () => {
    cy.contains('Primary Subscription').first().click()
})

Cypress.Commands.add('closeTour', () => {
    cy.get('#tourCheckbox').click()
    cy.get('.tour-close').click()
})

Cypress.Commands.add('acceptCookies', () => {
    cy.get('.btn-got-it').click()
})

Cypress.Commands.add('loginAsScheduleEditor', () => {
    cy.task('log', { log: Cypress.env('users').scheduleEditor })
    const { user, password } = Cypress.env('users').scheduleEditor
    cy.login(user, password)
})

Cypress.Commands.add('testDevelopmentEnvironment', () => {
    const url = Cypress.env('servers').development
    cy.visit(url)
})

//TODO: login request to API - payload for request to /token endpoint
// grant_type: password
// client_id: 928d3739-c454-48d5-96ff-916ef9a9aed9 //TODO find where this is coming from, presumably just generated hitting the site for tracking.
// username: scheduleeditor@sfg20.co.uk
// password: Qwerty10
>>>>>>> 6048b935e82fae3ac61b4cb1fb9be7218c0bd845
