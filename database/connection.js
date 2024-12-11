const mysql = require('mysql2')

const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE_NAME
})

connection.connect((err) => {
    if (err) {
        console.log('Error connecting to Database', err);
    } else {
        console.log('Database is connected');
    }
})

module.exports = connection