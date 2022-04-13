class CartPage {
    get cartEntries() {
        return cy.get('.cartEntry');
    }

    get entriesPrices() {
        return cy.get('.cartEntry__price');
    }

    get totalPriceWithoutDelivery() {
        return cy.contains('Warenwert').next();
    }

    checkEntriesTotalPrice() {
        let sum = 0.0;
        this.entriesPrices.each($el => {
            sum += this.extractPrice($el.text());
        }).then(() => {
            let sumStr = sum.toString().replace('.', ',');
            this.totalPriceWithoutDelivery.should('contain.text', sumStr);
        });
    }

    extractPrice(priceStr) {
        let price = priceStr.match(/\d+,\d+/);
        return parseFloat(price[0].replace(',', '.'));
    }
}

export default new CartPage();