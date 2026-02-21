/// <reference types="cypress" />

// Welcome to Cypress!
//
// This spec file contains a variety of sample tests
// for a todo list app that are designed to demonstrate
// the power of writing tests in Cypress.
//
// To learn more about how Cypress works and
// what makes it such an awesome testing tool,
// please read our getting started guide:
// https://on.cypress.io/introduction-to-cypress

describe("pizza-website-text", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173/");
  });

  it("Is the click button available and clickable", () => {
    cy.get(".btn-header").should("exist").should("be.visible").click();
  });

  it("Giving order test", () => {
    cy.get(".btn-header").should("exist").should("be.visible").click();
    cy.contains("Boyut seçmediniz*").should("exist").should("be.visible");

    cy.get("#small").should("exist");
    cy.get("#medium").should("exist");
    cy.get("#large").should("exist");

    cy.get("#fS").should("exist").should("be.visible").click();
    cy.get("#fM").should("exist").should("be.visible").click();
    cy.get("#fL").should("exist").should("be.visible").click();
  });
});
