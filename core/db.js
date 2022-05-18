const mysql = require('mysql');

const db = mysql.createPool({
    connectionLimit: 10,
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'ebanijya'
});

// const db = mysql.createPool(
//     {
//         connectionLimit: 10,
//         host: '103.27.86.49',
//         port: '3306',
//         user: 'greentech_user',
//         password: '@gxU9u9112215Uta',
//         database: 'ebanijya',
//         connectTimeout: 20000,
//         multipleStatements: true
//     });

// console.log(mysql.createConnection('mysql://ebanijya_user:SynergicWeb@2020@103.27.86.49/ebanijya?debug=true&charset=BIG5_CHINESE_CI&timezone=-0700'));

// const db = mysql.createConnection('mysql://ebanijya_user:SynergicWeb@2020@103.27.86.49/ebanijya?debug=true&charset=BIG5_CHINESE_CI&timezone=-0700');
// var connection = mysql.createConnection('mysql://greentech_user:@gxU9u9112215Uta@103.27.86.49/ebanijya?debug=true&charset=BIG5_CHINESE_CI&timezone=-0700');
// console.log(connection);

db.getConnection((err, connection) => {
    if (err) console.log(err);
    connection.release();
    return;
})

module.exports = db;