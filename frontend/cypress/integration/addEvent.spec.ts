describe("Add event test", () => {
  before(() => {
    cy.visit("/");
    cy.viewport("macbook-13");
  });

  it("should show errors when required fields are not filled", () => {
    cy.get(`button[type="submit"]`).click().should("have.attr", "disabled");
    cy.get("[data-cy=error]").should("exist");
    cy.get("[data-cy=message]").should("not.exist");
  });

  it("should add an event", () => {
    const eventData = {
      email: "user@test.test",
      name: "Test",
      surname: "User",
      date: "2017-06-01T08:30",
    };

    cy.get(`input[name="email"]`).type(eventData.email);
    cy.get(`input[name="name"]`).type(eventData.name);
    cy.get(`input[name="surname"]`).type(eventData.surname);
    cy.get(`[id="datetime-local"]`).first().click().type(eventData.date);

    cy.get(`button[type="submit"]`).click();
    cy.get("[data-cy=error]").should("not.exist");
    cy.get("[data-cy=message]").should("exist");
  });
});
