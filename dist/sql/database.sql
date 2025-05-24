-- Insert sample data into Suppliers
INSERT INTO Suppliers (SupplierName, ContactName, Address, Phone, Email) VALUES
('Acme Corp', 'John Doe', '123 Main St', '555-1212', 'john.doe@acmecorp.com'),
('Beta Industries', 'Jane Smith', '456 Oak Ave', '555-3434', 'jane.smith@betaindustries.com');

-- Insert sample data into Products
INSERT INTO Products (ProductName, SupplierID, Description, UnitPrice, UnitsInStock, ReorderLevel) VALUES
('Widget A', 1, 'A standard widget', 19.99, 50, 10),
('Gadget B', 2, 'A high-tech gadget', 99.99, 25, 5),
('Super Widget X', 1, 'The ultimate widget', 49.99, 30, 8);

-- Insert sample data into Sales and SalesDetails
-- Sale 1
INSERT INTO Sales (TotalAmount) VALUES (149.97);
DECLARE @SaleID1 INT = SCOPE_IDENTITY();
INSERT INTO SalesDetails (SaleID, ProductID, Quantity, UnitPrice) VALUES
(@SaleID1, 1, 3, 19.99), (@SaleID1, 2, 1, 89.99);

-- Sale 2
INSERT INTO Sales (TotalAmount) VALUES (99.98);
DECLARE @SaleID2 INT = SCOPE_IDENTITY();
INSERT INTO SalesDetails (SaleID, ProductID, Quantity, UnitPrice) VALUES
(@SaleID2, 2, 1, 99.98);