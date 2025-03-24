
describe("Primer test con Cypress actualizado", () => {
    it("Esto es un hola mundo actualizado desde Cypress", () => {
        cy.log("Mensaje actualizado, bienvenidos!")

        cy.visit("https://demoqa.com/text-box")
        cy.wait(1000)

        //obtiene y escribe en el elemento
        cy.get("#userName").type("Rodrigo Soto Marín")
        cy.get("#userEmail").type("rodrigoalesm@gmail.com")
        cy.get("#currentAddress").type("50m west of St. Lucía School")
        cy.get("#permanentAddress").type("Green House!")
        
        cy.wait(1000)
    })
}) 