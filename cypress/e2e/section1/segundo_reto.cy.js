/// <reference types="Cypress" />

require('cypress-plugin-tab')
require('cypress-xpath')

describe("Segundo Reto", () =>{

    it("Probando aplicación", () => {
        cy.visit("https://computer-database.gatling.io/computers")
        cy.title().should("eq", "Computers database")
        cy.wait(1500)

        //buscando
        cy.xpath("//input[@id='searchbox']").type("ACE")
        cy.get("#searchsubmit").should("be.visible").click()

        //agregando
        cy.get("#add").should("be.visible").click()
        cy.wait(1000)
        cy.get("#name").should("be.visible").type("cypress")
        cy.get("#introduced").should("be.visible").type("2021-03-15").tab().type("2025-02-15")
        //combobox
        cy.get("#company").should("be.visible").select("Nokia").should("have.value", "16").wait(1500)
        cy.xpath("//input[@value='Create this computer']").should("be.visible").click()

        //buscando el agregado
        cy.xpath("//input[@id='searchbox']").type("cypress")
        cy.get("#searchsubmit").should("be.visible").click()
    })
  })//Cierre de describe