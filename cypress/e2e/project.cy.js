describe("Proves de navegació", () => {
  it("Ha de navegar a la pàgina de projectes", () => {
      cy.visit("index.html"); // Obre la pàgina principal
      cy.contains("Veure els meus projectes").click();
      cy.url().should("include", "projectes.html"); // Comprova la URL
      cy.contains("Els meus projectes").should("be.visible"); // Comprova el títol
  });

  it("Ha d'obrir un repositori de GitHub", () => {
      cy.visit("projectes.html");
      cy.get("ul li a").first().should("have.attr", "href").and("include", "github.com"); // Comprova que l'enllaç conté "github.com"
  });
});