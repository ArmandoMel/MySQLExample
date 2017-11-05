var express = require("express");
var mysql = require("mysql");

var app = express();

var connection = mysql.createConnection({
	// properties ...
		host: 'sql9.freemysqlhosting.net',
		user: 'sql9202677',
		password: 'lYElUwYg29',
		database: 'sql9202677',
			port:3306
});

connection.connect(function(error){
	if (!!error) {
		console.log('Error');
	} else {
		console.log('Connected');
	}
	
});

//connection.close(function(error){
//	if (!!error) {
//		console.log('Error');
//	} else {
//		console.log('Disconnected');
//	}
//	
//});
		
app.get('/', function(req, resp) {
//	connection.query("INSERT INTO mySampleTable(Name) VALUES ('Erik Mkrtchyan'), ('Anna Tarkhanyan')", function(error, rows, fields) {
//		if (!!error) {
//			console.log('Error in the query');
//		} else {
//			console.log('Successful Inserted!\n');
//			console.log(rows);
//			// pars with your rows/fields
//		}
//	});

	connection.query("SELECT * FROM mysampletable", function(error, rows, fields){ 
	
	if (!!error) {
		console.log('Error in the query');
		conn
	} else {
		console.log('Successful query!\n');
		console.log(rows);
		resp.json(rows);
	}
	});
	
});

app.listen(1338);
