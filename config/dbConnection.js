var mysql = require('mysql');

module.exports = function(){
    console.log('Conexão ON');
    return conn =  mysql.createConnection({
        host :'localhost',
        user :'root',
        password :'root123',
        database :'portal_noticias'
    });

};