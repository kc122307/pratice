CREATE TABLE orders (
    order_id INT PRIMARY KEY AUTO_INCREMENT,
    customer_name VARCHAR(255) NOT NULL,
    order_name VARCHAR(255) NOT NULL,
    order_price DECIMAL(10, 2) NOT NULL
);
