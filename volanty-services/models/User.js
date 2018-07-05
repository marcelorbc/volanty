var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var mongoosePaginate = require('mongoose-paginate');

var schema = new  Schema({
    username:   {type: String},
    email:      {type: String},
    firstname:  {type: String},
    lastname:   {type: String},
    created: { type: Date, default: new Date },  //timestamp for creation 
 }, {collection: "users"});

 schema.plugin(mongoosePaginate);
 var  model = mongoose.model('User', schema);
 module.exports =  model;