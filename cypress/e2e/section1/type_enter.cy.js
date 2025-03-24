/// <reference types="Cypress" />

describe(" Funciones para Type ", () =>{

    it("Type --> ENTER", () => {
        cy.visit("https://www.google.co.cr/")
        cy.title().should("eq", "Google")
        cy.wait(1500)

        //escribe la búsqueda y presiona enter de una vez
        cy.get("#APjFqb").type("Wikipedia {enter}")
    })
  })//Cierre de describe