# Bamazon 

## Description 
- Bamazon is a Amazon-like storefront that uses MySQL tools.The app takes in orders from customers and depletes
  stock from the store's inventory.

## Prerequisites
- Node 
- Express
- Path 
- Mysql



##Installing
Run these commands to install the pacakges:
```
npm install express
npm install path
npm install mysql
```


## Requirements
- Create a MySQL database
- Then create a Table inside of that database called products.
- The products table should have each of the following columns:
 -     1.item_id (unique id for each product)
 -     2.product_name (Name of product)
 -     3.department_name
 -     4.price (cost to customer)
 -     5.stock_quantity (how much of the product is available in stores)
- Populate this database with around 10 different products. (i.e. Insert "mock" data rows into this database and table).
- Then create a Node application called bamazonCustomer.js. Running this application will first display all of the items available for sale. Include the ids, names, and prices of products for sale.
- The app should then prompt users with two messages.
  The first should ask them the ID of the product they would like to buy.
  The second message should ask how many units of the product they would like to buy.
- Once the customer has placed the order, your application should check if your store has enough of the product to meet the customer's request.

- If not, the app should log a phrase like Insufficient quantity!, and then prevent the order from going through.

https://drive.google.com/file/d/1JMlENnW3ykz2JPtq4lgCG8gnG-I9WgAF/view



