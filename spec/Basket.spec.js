const { assertEquals } = require(`../test-framework.js`);
const Item = require(`../scr/Item.js`)
const Basket = require(`../scr/Basket.js`);

//Setup
function testAddMethod() {
    const testCases = {
        test1: {
            basket: new Basket(),
            item: new Item(`test1`),
            expected: 1,
            logMessage: `Test 1 = addItem method puts something into the basket`
        },
        test3: {
            basket: new Basket(),
            item: `not an Item`,
            expected: 0,
            logMessage: `Test 3 =  items that are not from class Item should not be added`
        },
        test4: {
            basket: new Basket(),
            item: null,
            expected: 0,
            logMessage: `Test 3 = falsy value items should not be added`
        }
    }

    //Execute && Verify
    Object.entries(testCases).forEach(entry => {
        console.log(entry[1].logMessage);
        entry[1].basket.addItem(entry[1].item);
        const actual = entry[1].basket.basketItems.length;
        const result = assertEquals(actual, entry[1].expected);
        console.log(result);
        console.log(`========================test end=========================`);
    })
}

function testRemoveMethod() {
    //Setup
    const testCases = {
        test1: {
            basket: new Basket(),
            item: new Item(`test4`),
            expected: 0,
            addAndremoveItems: (Basket, Item) => {
                Basket.addItem(Item);
                Basket.removeItem(Item);
            },
            logMessage: `Test 4 = basketItems length decreases by 1 when Item is found and removed from basket`
        },
    }

    //Execute && Verify
    Object.entries(testCases).forEach(entry => {
        console.log(entry[1].logMessage);
        entry[1].addAndremoveItems(entry[1].basket, entry[1].item);
        const actual = entry[1].basket.basketItems.length;
        const result = assertEquals(actual, entry[1].expected);
        console.log(result);
        console.log(`========================test end=========================`);
    })
}

testAddMethod();
testRemoveMethod();