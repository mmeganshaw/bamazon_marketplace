var mysql = require('mysql');
var inquirer = require('inquirer');


var connection = mysql.createConnection({
	host: "localhost",
	port: 3306,
	user: "root",

  // Your password
  	password: "root",
  	database: "Bamazon",
  	socketPath: "/Applications/MAMP/tmp/mysql/mysql.sock"

});

function display () {
    console.log('Heres What We Got: ');
	console.log('...................\n');
    connection.query("SELECT * FROM products", function (err, data) {
        if (err) throw err;
        for (var i = 0; i < data.length; i++)
            console.log("ID: " + data[i].item_id + ".  " + data[i].product_name + "  $" + data[i].price + "  \n");
        });
};

function start () {
	display();

inquirer.prompt([{
        message: "Please enter the ID# of the item you would like to purchase:",
        name: 'input',
    },
    {
        message: "Enter the quantity of items you would like to purchase:",
        name: 'quantity',
    }
]).then(function (answer) {
    checkInventory(answer.input, answer.quantity);

});

}

function checkInventory (input, order) {
	connection.query("SELECT * FROM products WHERE ?", {
            item_id: input,
        },
        function (err, data) {
            if (data[0].stock_quantity < order) {
                console.log("Insufficient quantity!");
                connection.end(); 
            } else {
                console.log("we have enough!")
            }
        }
    );
};

start();








