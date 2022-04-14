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

    get emailErrorElement() {
        return cy.get('#loginEmail-error');
    }

    openRegistrationPage() {
        this.registerButton.click();
    }

    enterEmail(email) {
        this.emailInput.type(email);
    }

    enterPassword(password) {
        this.passwordInput.type(password);
    }

    confirmLogin() {
        this.loginButton.click();
    }

    doLogin(email, password) {
        this.enterEmail(email);
        this.enterPassword(password);
        this.confirmLogin();
    }

    openForgotPasswordPage() {
        this.forgotPasswordLink.click();
    }
}

export default new LoginPage();