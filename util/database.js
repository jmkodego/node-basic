const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'bcbfu5iotgoljv0v3x5r-mysql.services.clever-cloud.com',
    user: 'uqvn4nwokyndqjit',
    database: 'bcbfu5iotgoljv0v3x5r',
    password: '0tEX743ME2OOwtjhitz'
})

module.exports = pool.promise();