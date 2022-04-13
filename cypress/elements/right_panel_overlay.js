class RightPanelOverlay {
    get toCartButton() {
        return cy.get('#overlayRight .button--addToCart');
    }

    goToCart() {
        this.toCartButton.click();
    }
}

export default new RightPanelOverlay();