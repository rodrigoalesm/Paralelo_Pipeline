
describe("Bienvenido al curso de cypress sección 1", () =>{

  it("Primer test -> Hola Mundo", () => {
      cy.log("Hola Mundo")
      cy.wait(1000)
  })

  it("Segundo test -> Llenar el campo Full Name", () => {
      cy.visit("https://demoqa.com/text-box") //Visita la página

      cy.get("#userName").type("Rodrigo Soto Marín") //obtiene y escribe en el elemento
      cy.wait(3000)
  })

})//Cierre de describe