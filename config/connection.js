//connection for "localhost"
const mysql = require("mysql");


require("dotenv").config();
const api_Key = process.env.MYSQL_API_KEY;
// console.log(api_Key);


const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: api_Key,
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