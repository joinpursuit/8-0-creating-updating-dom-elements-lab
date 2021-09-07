describe("Featured", () => {
  it("should add the 'featured' class to the first `section` element on the page", () => {
    cy.get("section").first().should("have.class", "featured");
  });
});

describe("New post", () => {
  it("should add a new post with the specified content", () => {
    cy.get("section.posts article")
      .should("have.length", 3)
      .last()
      .within(() => {
        cy.get("img")
          .should("have.attr", "src", "./images/paul-gilmore-unsplash.jpg")
          .should(
            "have.attr",
            "alt",
            "Image of a mountain in front of a lake."
          );
        cy.get("h3").should("have.text", "Stop Planning");
        cy.get("p").should("contain.text", "You -- yes you!");
        cy.get("aside")
          .should("exist")
          .within(() => {
            cy.get("p")
              .should("exist")
              .within(() => {
                cy.get("strong").should("contain.text", "Read Time");
                cy.get("span").should("contain.text", "4 Minutes");
                cy.get("a")
                  .should("contain.text", "Read more")
                  .should("have.attr", "href", "#");
              });
          });
      });
  });
});

describe("Swap article positions", () => {
  it("should swap the first and second article in `section.posts`", () => {
    cy.get("section.posts article")
      .should("have.length", 3)
      .then(([first, second]) => {
        cy.wrap(first).should("contain.text", "Take in the Architecture");
        cy.wrap(second).should("contain.text", "Games to Play on the Road");
      });
  });
});
