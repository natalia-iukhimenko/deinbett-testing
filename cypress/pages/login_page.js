class LoginPage {
    get registerButton() {
        return cy.get('#registerAccount');
    }

    get emailInput() {
        return cy.get('#loginEmail');
    }

    get passwordInput() {
        return cy.get('#loginPassword');
    }

    get loginButton() {
        return cy.get('#login-submit');
    }

    get forgotPasswordLink() {
        return cy.get('.existingAccount__forgotten');
    }

    openRegistrationPage() {
        this.registerButton.click();
    }

    doLogin(email, password) {
        this.emailInput.type(email);
        this.passwordInput.type(password);
        this.loginButton.click();
    }

    openForgotPasswordPage() {
        this.forgotPasswordLink.click();
    }
}

export default new LoginPage();