import brandHeader from '../../../elements/brand_header'
import restorePasswordPage from '../../../pages/restore_password_page'
import login_page from "../../../pages/login_page";

Given('user logged out', () => {
    brandHeader.openUserAccountPage();
})

When('user opens "restore password" page', () => {
    login_page.openForgotPasswordPage();
})

And('confirms password restoration', () => {
    restorePasswordPage.restorePassword(Cypress.env('email'));
})

Then('"Check email" page is opened', () => {
    cy.location('pathname').should('equal', '/passwortMail/gesendet')
})