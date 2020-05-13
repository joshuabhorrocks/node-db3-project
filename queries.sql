-- Multi-Table Query Practice

-- Display the ProductName and CategoryName for all products in the database. Shows 77 records.
SELECT p.productName, c.categoryName 
FROM product AS p 
JOIN Category AS c ON c.id = p.categoryid

-- Display the order Id and shipper CompanyName for all orders placed before August 9 2012. Shows 429 records.
SELECT O.ShipVia, O.OrderDate, Shipper.Id, Shipper.CompanyName 
FROM [Order] AS O 
JOIN Shipper ON O.ShipVia = Shipper.Id
WHERE O.OrderDate < "2012-08-09";

-- Display the name and quantity of the products ordered in order with Id 10251. Sort by ProductName. Shows 3 records.
SELECT o.Id, od.Quantity, p.ProductName
FROM [Order] AS o
JOIN OrderDetail AS od ON od.OrderId = o.id
JOIN Product AS p ON od.ProductId = p.Id
WHERE o.id = 10251
ORDER BY p.ProductName;

-- Display the OrderID, Customer's Company Name and the employee's LastName for every order. All columns should be labeled clearly. Displays 16,789 records.
SELECT DISTINCT o.Id, c.CompanyName, e.Lastname
FROM [Order] AS o
JOIN Customer AS c ON o.CustomerId = c.Id
JOIN Employee AS e ON o.EmployeeId = e.Id;
