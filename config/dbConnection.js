const mongoose = require('mongoose');

const expDB = function(){
    mongoose.connect('mongodb://localhost:27017/apiadmin', {useNewUrlParser: true});
    return mongoose.connection;
}

module.exports = function(){    
    return expDB;
};