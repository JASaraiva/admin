const dbConnection = require("../../config/dbConnection");
const mongoose = require('mongoose');

module.exports = function(app){

    app.get('/users', function(req, res){
      res.send({msg: 'ola mundo'});
    });


    app.post('/users', function(req, res){
        var data = req.body;
        const expDB = app.config.dbConnection();

        expDB.on('error', console.error.bind(console, 'connection error:'));
 
        expDB.once('open', function() {
          console.log("Connection Successful!");
        
          // define Schema
          var UserSchema = mongoose.Schema({
            name: String,
            username: String,
            password: String,
            email: String
          });
    
          // compile schema to model
          var User = mongoose.model('User', UserSchema, 'apiadmin');
      
          // a document instance
          var user1 = new User({ name: data.name, username: data.username, password: data.password, email : data.email });
      
          // save model to database
          user1.save(function (err, user) {
            if (err){
              res.send("CUSTOM MSG ERROR: " +err);
            }
              res.send(user.name + " saved to users collection.");
          });
        });
    });

}