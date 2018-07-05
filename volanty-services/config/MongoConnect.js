'use strict';
var mongoose = require('mongoose');
var uri = 'mongodb://localhost:27017/volanty';

const options = {
  useMongoClient: true,
  autoIndex: false, // Don't build indexes
  reconnectTries: Number.MAX_VALUE, // Never stop trying to reconnect
  reconnectInterval: 500, // Reconnect every 500ms
  poolSize: 10, // Maintain up to 10 socket connections
  // If not connected, return errors immediately rather than waiting for reconnect
  bufferMaxEntries: 0
};


var connect = function(){mongoose.connect(uri, options)};
var whenConnected = function(){
  
}
mongoose.connection.on('connected', function (){
  console.log('Mongoose connected to ' + uri);
});

var graceFullShutdown = function(msg, callback){
  mongoose.connection.close(function(){
    console.log('Mongoose disconnected through ') + msg;
    if(callback) callback();
  });
};
process.once('SIGUSR2', function(){
    graceFullShutdown('nodemon restart', function(){
      process.kill(process.pid, 'SIGUSR2');
    });
});

process.on('SIGINT', function(){
    graceFullShutdown('app termination', function(){
      process.exit(0);
    });
});
process.on('SIGTERM', function(){
    graceFullShutdown('Heroku app shutdown', function(){
      process.exit(0);
    });
});

module.exports.connect = connect;
module.exports.disconnect = graceFullShutdown;