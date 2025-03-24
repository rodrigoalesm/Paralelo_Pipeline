/// <reference types="Cypress" />

require('cypress-plugin-tab')

describe("Ejemplo función tab", () =>{

    it("Type TAB", () => {
        cy.visit("https://demoqa.com/automation-practice-form")
        cy.title().should("eq", "DEMOQA")

        cy.wait(1000)

        cy.get('#firstName').type("Rodrigo").tab().
        type("Soto").tab().
        type("rodrigo@gmail.com")

    })
  })//Cierre de describe