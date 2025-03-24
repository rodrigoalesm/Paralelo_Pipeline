/// <reference types="Cypress" /> 
//para que funcionen los comandos

describe("Sección 1 - Validando el título ", () =>{

    it("Test validar título", () => {
        cy.visit("https://demoqa.com/text-box")
        cy.title().should("eq", "DEMOQA")

        cy.log("El título fue validado")
    })
  })//Cierre de describe