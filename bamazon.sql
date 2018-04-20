CREATE DATABASE Bamazon;
Use Bamazon;

CREATE TABLE products (
	item_id INTEGER(11) AUTO_INCREMENT NOT NULL,
	product_name VARCHAR(30) NOT NULL,
	department_name VARCHAR(20) NOT NULL,
	price DECIMAL(10,2) NOT NULL,
	stock_quantity INTEGER(11) NOT NULL,
	PRIMARY KEY (item_id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('Camo Hat', 'Fashion', 7.68, 400), 
('Water Bottle', 'Outdoors', 5.66, 700),
('Japanese Folding Fan', 'Home Decor', 2.65, 2000),
('Artisanal French Soap Bar', 'Beauty', 7.55, 11000),
('Terry Cloth Bathrobe', 'Clothing', 25.98, 50),
('Phone Case', 'Technology', 9.95, 400),
('Multi-Color Computer Mouse', 'Technology', 23.99, 200),
('Plush Rabbit Eye Mask', 'Beauty', 17.99, 150),
('Angel Quartz Figuring', 'Decor', 16.01, 25),
('Premier Colored Pencils', 'School', 23.04, 300)

