class ProductListPage {
    get wishlistButtons() {
        return cy.get('[data-article-type] .wishlistIcon');
    }

    addItemsToWishlist(itemsCount) {
        let i = 1;
        this.wishlistButtons
            .each(($btn) => {
                if (i <= itemsCount) {
                    cy.wrap($btn).click();
                    i++;
                } else {
                    return false;
                }
            });
    }
}

export default new ProductListPage();