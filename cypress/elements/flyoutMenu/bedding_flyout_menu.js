import FlyoutMenu from "./flyout_menu";

export default class BeddingFlyoutMenu extends FlyoutMenu {
    constructor() {
        super('Bettwaren');
    }

    selectPillowsCategory() {
        this.selectCategory('/kopfkissen');
    }
}