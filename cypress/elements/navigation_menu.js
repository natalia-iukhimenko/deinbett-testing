import BeddingFlyoutMenu from "./flyoutMenu/bedding_flyout_menu";

class NavigationMenu {
    get menuItems() {
        return cy.xpath('//a[contains(@class, "menu__linkHref")]');
    }

    openMenuItem(name) {
        this.menuItems.contains(name).click();
    }

    openBeddingMenu() {
        this.openMenuItem('Bettwaren');
        return new BeddingFlyoutMenu();
    }
}

export default new NavigationMenu();