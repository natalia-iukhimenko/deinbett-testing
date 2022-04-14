import loginPage from "../../../pages/login_page";

When('user enters existing login', () => {
    loginPage.enterEmail(Cypress.env('email'));
})

And('user enters existing password', () => {
    loginPage.enterPassword(Cypress.env('password'));
})

And('user enters wrong password {string}', (password) => {
    loginPage.enterPassword(password);
})

And('confirms login', () => {
    loginPage.confirmLogin();
})

Then('wrong login or password message is displayed', () => {
    loginPage.emailErrorElement.should('have.text', 'Benutzername nicht gefunden oder Passwort falsch.');
})

And('user is on login page', () => {
    cy.location('pathname').should('equal', '/login');
})