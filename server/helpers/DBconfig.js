const mysql = require('mysql')
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'shopping'
})

connection.connect(err => {
    if (err) throw err
    console.log("connected to mysql")
})

module.exports = connection