export default class FlyoutMenu {
    constructor(id) {
        this.id = id;
    }

    selectCategory(link) {
        cy.get(`#${this.id} .flyoutTile__Headline a[href = '${link}`).click();
    }
}