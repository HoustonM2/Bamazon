var mysql = require("mysql");
var inquirer = require("inquirer");
var dotenv = require('dotenv').config()

// create the connection information for the sql database
var connection = mysql.createConnection({
  host: "localhost",

 
  port: 3306,

 
  user: "root",

  // My  password
  password: process.env.PASSWORD,
  database: "bamazon_db"
});

//Connecting to sql
connection.connect(function(err) {
  if (err) throw err;
  console.log("connected to "+ connection.threadId);



  //Selecting data from the product table 
  connection.query('SELECT * FROM products;', function(err,response){
      if(err){
          throw err;
      }
      console.table(response)
      start(response);
  })

  //Function for prompting users
  function start(data) {
    inquirer
    .prompt([
            {
              name: "productID",
              type: "input",
              message: "What's the id of the product you want to buy?"
            },
            {
              name: "units",
              type: "input",
              message: "How many units of the product would you like to buy?"
            }])
  
      .then(function(answer) {
  
      
        // based on their answer, either call the bid or the post functions
        var whatCustomerWants= parseInt(answer.productID);
        var quantity=answer.units;
        checkDatabase(whatCustomerWants)
       
        
        update(data,whatCustomerWants,quantity);
        
      });
    }
    //Calling the 'start' function 
    // start();

    function update(data,whatCustomerWants,quantity){
     
      for(var i=0; i<data.length; i++){
        
        if(whatCustomerWants === parseInt(data[i].item_ID) && quantity < data[i].stock_quantity){
            console.log("YES!WE HAVE IT")
            connection.query("UPDATE products SET stock_quantity = stock_quantity -?  Where item_id =?", [quantity,whatCustomerWants],function (err,res){
              console.log("Success")
            })
          return true;
        } 
      }
      console.log("Out of Stock")
      return false;

    }
  
  connection.end();
  //Ending connection

})


  function checkDatabase (whatCustomerWants){
    connection.query("SELECT * FROM products WHERE ?", {"products": whatCustomerWants}, function(err, results) {
      results
  })
}

