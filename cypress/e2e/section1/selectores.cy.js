/// <reference types="Cypress" />

require('cypress-xpath');

describe("Tipos de selectores", () =>{

    it.only("Selector por ID", () => {
        cy.visit("https://demoqa.com/text-box")
        cy.title().should("eq", "DEMOQA")
        cy.wait(1000)

        cy.get("#userName").should("be.visible", {timeout:5000}).type("Rodrigo")
        cy.get("#userEmail").should("be.visible").type("rod@gmail.com")

    })

    it("Selector por Atributo", () => {
        cy.visit("https://demoqa.com/text-box")
        cy.title().should("eq", "DEMOQA")
        cy.wait(1000)

        cy.get("[placeholder='Full Name']").should("be.visible").type("Rodrigo")

    })

    it("Selector por XPATH", () => {
        cy.visit("https://demoqa.com/text-box")
        cy.title().should("eq", "DEMOQA")
        cy.wait(1000)

        cy.xpath("//*[@id='userName']").should("be.visible").type("Rodrigo")
        cy.xpath("")
    })

    it("Selector por Contains", () => {
        cy.visit("https://demoqa.com/automation-practice-form")
        cy.title().should("eq", "DEMOQA")
        cy.wait(1000)

        //Hace get de la Class
        cy.get(".custom-control-label").contains("Female").click()
        cy.wait(1500)
        cy.get(".custom-control-label").contains("Other").click()
        
    })

    it("Selector por copy_selector", () => {
        cy.visit("https://demoqa.com/automation-practice-form")
        cy.title().should("eq", "DEMOQA")
        cy.wait(1000)

        cy.get("#userNumber").should("be.visible").type("4536763")
    })
  })//Cierre de describe