var MongoConnect = require("./config/MongoConnect");
var JobScheduled = require("./services/JobScheduled");
var UserService = require("./services/UserService")

MongoConnect.connect()
JobScheduled.start();

module.exports.Database = MongoConnect;
module.exports.Services = {
    UserService : UserService
}
