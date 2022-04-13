import navigationMenu from "../../../elements/navigation_menu";
import brandHeader from "../../../elements/brand_header";
import rightPanel from "../../../elements/right_panel_overlay";
import productListPage from "../../../pages/product_list_page";
import wishlistPage from "../../../pages/wishlist_page";
import cartPage from "../../../pages/cart_page";

When('user adds {int} items to wishlist', (itemsCount) => {
    navigationMenu.openBeddingMenu()
        .selectPillowsCategory();
    productListPage.addItemsToWishlist(itemsCount);
})

Then('{int} items are displayed in wishlist', (itemsCount) => {
    brandHeader.wishlistCounter.should('have.text', itemsCount);
    brandHeader.openWishlist();
    wishlistPage.addedItems.should('have.length', itemsCount);
})

Given('user added all wishlist items to cart', () => {
    cy.fixture('userData').then((userData) => {
        wishlistPage.addAllItemsToCart(userData.zipcode)
        rightPanel.goToCart();
    })
})

When('user goes to cart', () => {
    brandHeader.openCart();
})

Then('cart contains {int} items', (itemsCount) => {
    cartPage.cartEntries.should('have.length', itemsCount)
})

And('cart counter shows {int} items', (itemsCount) => {
    brandHeader.cartCounter.should('have.text', itemsCount);
})

And('merchandise value is calculated correctly', () => {
    cartPage.checkEntriesTotalPrice();
})