Cypress.Commands.add('acceptAllCookies', () => {
    cy.setCookie('optOutAccepted', 'true');
})