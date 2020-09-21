module.exports = function(application){


  application.get('/users', function(req, res){
      const userModel = application.app.models.user;

      var users = userModel.getUsers()

      res.send({msg: 'enviou', users: users});
    });


    application.post('/users', function(req, res){
        var data = req.body;
        const userModel = application.app.models.user;
        var users = userModel.setUser();
    });

}