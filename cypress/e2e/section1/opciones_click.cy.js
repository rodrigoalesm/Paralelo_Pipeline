/// <reference types="Cypress" />

describe("Opciones de click", () =>{

    it("Click sencillo", () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.wait(1000)

        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').should("be.visible").type("Admin")
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').should("be.visible").type("admin123")

        cy.get('.oxd-button').should("be.visible").click()

        cy.get('.oxd-input').should("be.visible").click()
        cy.get(':nth-child(2) > .oxd-main-menu-item').should("be.visible").click()
    })

    //por si acaso la comunicación con el botón se interrumpe o está oculto
    it("Click Force True", () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.wait(1000)

        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').should("be.visible").type("Admin")
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').should("be.visible").type("admin123")

        cy.get('.oxd-button').should("be.visible").click()

        cy.get('.oxd-input').should("be.visible").click()
        cy.get(':nth-child(2) > .oxd-main-menu-item').should("be.visible").click({force:true})
    })

    it.only("Click por coordenadas (x,y)", () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.wait(1000)

        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').should("be.visible").type("Admin")
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').should("be.visible").type("admin123")

        cy.get('.oxd-button').should("be.visible").click()
        cy.wait(1500)

        cy.get('.oxd-userdropdown-tab').should("be.visible").click(50,5)
        
    })
  })//Cierre de describe