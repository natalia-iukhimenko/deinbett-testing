class LoginPage {
    get registerButton() {
        return cy.get('#registerAccount');
    }

    get forgotPasswordLink() {
        return cy.get('.existingAccount__forgotten');
    }

    openRegistrationPage() {
        this.registerButton.click();
    }

    openForgotPasswordPage() {
        this.forgotPasswordLink.click();
    }
}

export default new LoginPage();