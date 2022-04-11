class BrandHeader {
    get loginLink() {
        return cy.get('.headerElement__link--login');
    }

    get loginLinkDescription() {
        return cy.get('.headerElement__text--login .headerElement__suffix');
    }

    openLoginPage() {
        this.loginLink.click();
    }

    openUserAccountPage() {
        this.openLoginPage();
    }
}

export default new BrandHeader();