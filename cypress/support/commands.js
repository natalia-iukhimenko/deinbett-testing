Cypress.Commands.add('acceptAllCookies', () => {
    cy.setCookie('optOutAccepted', 'true');
})

Cypress.Commands.add('openMainPage', () => {
    cy.acceptAllCookies();
    cy.visit('/');
})