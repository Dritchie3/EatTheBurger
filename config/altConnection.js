//connection for "localhost"
var mysql = require("mysql");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "",
    database: "eat_burgerDB"
});
connection.connect(function (err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});

module.exports = connection;

//connection for "Heroku"
var mysql = require("mysql");

var connection;
if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
}else {
    connection = mysql.createConnection({
    host: "	lmag6s0zwmcswp5w.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    port: 3306,
    user: "	ezsmoybrl5g5fmes",
    password: "",
    database: "	v3ljip0j1brttkxo"
    });
};

// Initiate MySQL Connection.
connection.connect(function (err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});

module.exports = connection;