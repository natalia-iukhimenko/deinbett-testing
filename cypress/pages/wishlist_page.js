class WishlistPage {
    get addedItems() {
        return cy.get('.wishlistEntry');
    }

    get zipcodeInput() {
        return cy.get('#zipcode-logistic-input');
    }


    get addAllButton() {
        return cy.get('#addAddToWishlist');
    }

    enterZipcode(zipcode) {
        this.zipcodeInput.type(zipcode);
    }

    addAllToCart() {
        this.addAllButton.click()
    }

    addAllItemsToCart(zipcode) {
        this.enterZipcode(zipcode);
        this.addAllToCart();
    }
}

export default new WishlistPage();