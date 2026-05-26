const products = [
    {id:1, sku:"P001", name:"Notebook", price:50, stockQty:100},
    {id:2, sku:"P002", name:"Pen", price:10, stockQty:500},
    {id:3, sku:"P003", name:"Marker", price:30, stockQty:20}
]

const formatProductLabel = `${products[0].sku} - ${products[0].name}`;

const prepareProductTableRows = {
        id:1,
        label: "P001 - Notebook",
        price: "₹50",
        stockText: "100 units",
        stockStatus: "Available"
};

const lowStockProducts = products.filter(product => {
    return product.stockQty < 50;
});
console.log(formatProductLabel);
console.log(prepareProductTableRows);
console.log(lowStockProducts);


const orderItems = [
    {productId: 1, quantity: 2, rate: 50},
    {productId: 2, quantity: 5, rate: 10}
];

const calculateOrderTotal = orderItems.reduce((total, item) => {
    return total + (item.quantity * item.rate);
},0);
console.log(calculateOrderTotal);          