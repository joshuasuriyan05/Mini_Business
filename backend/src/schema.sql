
CREATE TABLE products_demo (
id SERIAL PRIMARY KEY,
sku VARCHAR(50) UNIQUE NOT NULL,
name VARCHAR(255) NOT NULL,
price NUMERIC(10, 2) NOT NULL,
stock_qty INTEGER NOT NULL DEFAULT 0,
created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO products_demo (sku, name, price, stock_qty)
VALUES
('P001', 'Notebook', 50.00, 100),
('P002', 'Pen', 10.00, 500);

SELECT * FROM products_demo;

INSERT INTO products_demo (sku, name, price, stock_qty)
VALUES ('P001', 'Duplicate Notebook', 60.00, 20);

INSERT INTO products_demo (sku, price, stock_qty)
VALUES ('P003', 25.00, 10);