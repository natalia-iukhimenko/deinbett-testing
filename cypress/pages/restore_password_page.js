class RestorePasswordPage {
    get emailInput() {
        return cy.get('#passwordForgottenEmail');
    }

    get submitButton() {
        return cy.get('#passwordForgottenSubmitId');
    }

    restorePassword(email) {
        this.emailInput.type(email);
        this.submitButton.click();
    }
}

export default new RestorePasswordPage();