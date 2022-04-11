class RegistrationPage {
    get salutationDropdown() {
        return cy.get('#salutation');
    }

    get firstNameInput() {
        return cy.get('#firstName');
    }

    get lastNameInput() {
        return cy.get('#lastName');
    }

    get emailInput() {
        return cy.get('#email');
    }

    get passwordInput() {
        return cy.get('#password')
    }

    get passwordConfirmationInput() {
        return cy.get('#password2');
    }

    get agbCheckbox() {
        return cy.xpath('//div[contains(@class, "accountNew__agbCheckbox")]//div[contains(@class, "accountNew__checkbox")]//span[1]');
    }

    get submitRegistrationButton() {
        return cy.get('#register-submit');
    }

    selectSalutation(value) {
        this.salutationDropdown.select(value);
        return this;
    }

    fillFirstName(firstName) {
        this.firstNameInput.type(firstName);
        return this;
    }

    fillLastName(lastName) {
        this.lastNameInput.type(lastName);
        return this;
    }

    fillEmail(email) {
        this.emailInput.type(email);
        return this;
    }

    fillPassword(password) {
        this.passwordInput.type(password);
        return this;
    }

    fillPasswordConfirmation(passwordConfirmation) {
        this.passwordConfirmationInput.type(passwordConfirmation);
        return this;
    }

    checkAgbCheckbox() {
        this.agbCheckbox.click();
    }

    confirmRegistration() {
        this.submitRegistrationButton.click();
    }
}

export default new RegistrationPage();