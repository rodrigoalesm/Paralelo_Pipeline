/// <reference types="Cypress" />

require('cypress-plugin-tab')

describe("Primer Reto", () =>{

    it("", () => {
        cy.visit("https://demoqa.com/webtables")
        cy.title().should("eq", "DEMOQA")
        cy.wait(1000)

        cy.get('#searchBox').should("be.visible").type("Cierra")
        cy.wait(3000)
        cy.get('#searchBox').should("be.visible").clear()

        //agregar campo
        cy.get('#addNewRecordButton').should("be.visible").click()
        cy.wait(1000)
        cy.get('#firstName').should("be.visible").type("Rodrigo").tab().
        type("Soto").tab().
        type("rodrigo@gmail.com").tab().
        type("28").tab().
        type("30000").tab().
        type("Informática")

        cy.get('#submit').should("be.visible").click()

        //busca el agregado
        cy.get('#searchBox').should("be.visible").type("Rodrigo")
        cy.wait(3000)
        cy.get('#searchBox').should("be.visible").clear()

        //editar un campo
        cy.get("#edit-record-2").should("be.visible").click()
        cy.wait(2000)
        cy.get("#age").should("be.visible").clear().type("22")
        cy.get("#salary").should("be.visible").clear().type("2500")
        cy.get('#submit').should("be.visible").click()

        //eliminar un campo
        cy.get("#delete-record-2").should("be.visible").click()
        cy.wait(2000)



    })
  })//Cierre de describe