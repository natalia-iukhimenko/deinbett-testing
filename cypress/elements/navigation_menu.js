import BeddingFlyoutMenu from "./flyoutMenu/bedding_flyout_menu";

class NavigationMenu {
    openMenuItem(link) {
        cy.wait(1000);
        cy.get(`.menu__linkHref[href = '${link}']`)
            .should('exist')
            .click();
    }

    openBeddingMenu() {
        this.openMenuItem('/bettwaren-bettdekoration');
        return new BeddingFlyoutMenu();
    }
}

export default new NavigationMenu();