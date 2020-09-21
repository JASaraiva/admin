
const mongoose = require('mongoose');

module.exports = function(app){

    this.getUsers = function(){
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
        
          var User = mongoose.model('User', UserSchema, 'user');
      
          var users =  User.find();

          console.log('---' + users);
      
        });
    }


    this.setUser = function(data){
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
          var User = mongoose.model('User', UserSchema, 'user');
      
          // a document instance
          var user1 = new User({ name: data.name, username: data.username, password: data.password, email : data.email });
      
          // save model to database
          user1.save(function (err, user) {
            if (err){
                console.log(err);
            }
          });
        });
    }

    return this;
}