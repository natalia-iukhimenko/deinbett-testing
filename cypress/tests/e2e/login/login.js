import loginPage from "../../../pages/login_page";

When('user enters existing login and password', () => {
    loginPage.enterEmail(Cypress.env('email'));
    loginPage.enterPassword(Cypress.env('password'));
})

And('confirms login', () => {
    loginPage.confirmLogin();
})