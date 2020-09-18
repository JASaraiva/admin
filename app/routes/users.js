module.exports = function(app){

    app.get('/users', function(req, res){

        var connection = app.config.dbConnection();
        var users = app.app.models.Users;

        user.getUser(connection,function(error, result){
            res.render('user/index', {users, result});
        });
        
        connection.query('SELECT * FROM users', )

    });
}