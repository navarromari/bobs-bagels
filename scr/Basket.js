const Item = require(`./Item`);

class Basket {
    basketItems = [];

    addItem(item) {
        if (item instanceof Item) {
            this.basketItems.push(item);
        }
    }

    removeItem(item) {

        const indexOfItemInBasketItems = this.basketItems.findIndex(basketItem => basketItem.id === item.id);
        if (indexOfItemInBasketItems > -1) {
            this.basketItems.splice(indexOfItemInBasketItems, 1);
        }

    }
};

module.exports = Basket;