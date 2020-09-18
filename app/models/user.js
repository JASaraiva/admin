module.exports = function(){
    
    this.getUsers = function(connection, callback){
        connection.query('SELECT * FROM users', callback)
    }

    return this;
}