class UserAccountPage {
    get navigationSidebar() {
        return cy.get('.sidebarNavigation');
    }

    get logoutLink() {
        return this.navigationSidebar.xpath('//a[contains(@href, "logout")]');
    }

    logout() {
        this.logoutLink.click();
    }
}

export default new UserAccountPage();