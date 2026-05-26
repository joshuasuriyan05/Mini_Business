const products = [ 
            {id:1, sku:"P001", name:"Notebook", price:50, stockQty:100},
            {id:2, sku:"P002", name:"Pen", price:10, stockQty:500},
            {id:3, sku:"P003", name:"Marker", price:30, stockQty:20}
];

const findProductsBySku = products.find(product => {
    return product.sku === "P002";
});

const calculateStockValue = products.reduce((sum, product) => {
    return sum + (product.price * product.stockQty);
}, 0);

const getLowStockProducts = products.filter(product => {
    return product.stockQty < 50;
});

function validateProduct(product) {
    let errors = [];
    if (product.sku === ""){
        errors.push("SKU is required");
    }
    if (product.name === ""){
        errors.push("Name is required");
    }
    if (product.price <= 0){
        errors.push("Price must be a positive number");
    }
    if (product.stockQty < 0){
        errors.push("Stock quantity cannot be negative");
    }
    return errors;
}


const calculateLineTotal = (price, quantity) => {
    return price * quantity;
};

console.log(findProductsBySku);
console.log(calculateStockValue);
console.log(getLowStockProducts);
console.log(validateProduct({
    sku: "", 
    name: "", 
    price:0, 
    stockQty:-1})
);
console.log(calculateLineTotal(2, 50));