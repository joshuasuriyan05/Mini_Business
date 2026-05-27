const products = [
    {id:1, sku:"P001", name:"Notebook", price:50, stockQty:100},
    {id:2, sku:"P002", name:"Pen", price:10, stockQty:500},
    {id:3, sku:"P003", name:"Marker", price:30, stockQty:20}
];

function formatProductLabel(product){ 
     return`${product.sku} - ${product.name}`;
}
function prepareProductTableRows(products){
    return products.map(product => {  
        return {  
            id:product.id,
            label: formatProductLabel(product),
            priceText: `₹${product.price}`,
            stockText: `${product.stockQty} units`,
            stockStatus: product.stockQty < 50 ? "Low Stock" : "Available"
        };
    });
}

const lowStockProducts = products.filter(product => {
    return product.stockQty < threshold;
});
console.log(formatProductLabel(products));
console.log(prepareProductTableRows(products));
console.log(lowStockProducts, 50);


const orderItems = [
    {productId: 1, quantity: 2, rate: 50},
    {productId: 2, quantity: 5, rate: 10}
];


const calculateOrderTotal = (orderItems) => {
    return orderItems.reduce((total, item) => {
        return total + (item.quantity * item.rate);
    }, 0);
};
console.log(calculateOrderTotal(orderItems));          