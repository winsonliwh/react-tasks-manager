const express = require('express')
const app = express();
const mysql = require('mysql')

const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "password",
    database: "taskdatabase"
});

app.get("/", (req, res) => {
    const sqlInsert = "INSERT INTO task (name, assignedTo) VALUES ('Take out trash', 'Nick');"
    db.query(sqlInsert, (err, result)=> {
        res.send("hello world")
    })
});

app.listen(3001, () => {
    console.log("running on port 3001")
});