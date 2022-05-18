const mysql = require('mysql');

// For Local
// const db = mysql.createPool({
//     connectionLimit: 10,
//     host: 'localhost',
//     user: 'root',
//     password: '',
//     database: 'ebanijya'
// });

// For Server
const db = mysql.createPool({
    connectionLimit: 10,
    host: 'localhost',
    user: 'ebanijya_user',
    password: 'SynergicWeb@2020',
    database: 'ebanijya'
});

db.getConnection((err, connection) => {
    if (err) console.log(err);
    connection.release();
    return;
})

module.exports = db;