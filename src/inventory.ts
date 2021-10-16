import products from "./products";
import Product from "./products"

interface InventoryItem {
    product: typeof Product;
    quantity: number;
}

const inventory = [
    {
        name: "motor",
        price: 10.00,
        quantity: 10,
    },
    {
        name: 'sensor',
        price: 12.50,
        quantity: 4,
    },
    {
        name: 'LED',
        price: 1.00,
        quantity: 20,
    }
];

function calcInventoryValue(inventory){
    if(inventory = [ ]){
        return 0;
    }
    (products.price * quantity) +(products.price * quantity) + (products.price * quantity)
}

calcInventoryValue(inventory){
    console.log(inventory[])
}