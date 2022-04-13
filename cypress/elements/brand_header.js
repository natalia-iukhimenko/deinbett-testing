class BrandHeader {
    get loginLink() {
        return cy.get('.headerElement__link--login');
    }

    get loginLinkDescription() {
        return cy.get('.headerElement__text--login .headerElement__suffix');
    }

    get wishlistLink() {
        return cy.get('.headerElement__icon--wishlist');
    }

    get cartLink() {
        return cy.get('.headerElement__icon--cart');
    }

    get wishlistCounter() {
        return cy.get('.headerElement__status--wishlist');
    }

    get cartCounter() {
        return cy.get('.headerElement__status--cart');
    }

    openLoginPage() {
        this.loginLink.click();
    }

    openUserAccountPage() {
        this.openLoginPage();
    }

    openWishlist() {
        this.wishlistLink.click({force: true});
    }

    openCart() {
        this.cartLink.click({force: true});
    }
}

export default new BrandHeader();