const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());



const products = [
    { id: 1, sku: "P001", name: "Notebook", price: 50, stockQty: 100 },
    { id: 2, sku: "P002", name: "Pen", price: 10, stockQty: 500 },
    { id: 3, sku: "P003", name: "Marker", price: 30, stockQty: 20 }
];

app.get('api/health', (req, res) => {
    res.status(200).json({ status: "OK" });
});         

app.get('api/products', (req, res) => {
    res.json(products);
});

app.get('api/products/:id', (req, res) => {
    const productId = parseInt(req.params.id);
    const product = products.find(p => p.id === productId);
    if (product) {
        res.json(product);
    } else {
        res.status(404).json({ message: "Product not found" });
    }
});

const existingProduct = products.find(p => p.sku === sku);
     if(existingProduct){
        return res.status(400).json({message: "SKU must be unique"});
     };
const products1=[];
app.post('/api/products', (req, res) => {
    const {sku, name, price, stockQty} = req.body;
     if(!sku || !name || !price || !stockQty){
        return res.status(400).json({message: "All fields are required"});
     };
     const newProduct = {
        id: products.length + 1,
        sku,
        name,
        price,
        stockQty
     };
     products.push(newProduct);
     res.status(201).json({
        message: "Product added successfully",
        product: newProduct
     });
});
module.exports = app;

