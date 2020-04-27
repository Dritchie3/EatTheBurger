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
    password: "ub3db4wy6y1bsh6v",
    database: "	v3ljip0j1brttkxo"
    });
};