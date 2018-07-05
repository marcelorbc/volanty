var cron = require("node-cron");
const TODO_SEGUNDO = '* * * * * *'
var started = false;

var start = function(){
    if(started)  console.log("Já iniciado")
    else{
    cron.schedule(TODO_SEGUNDO, function() {
        console.log(new Date())
    }, null, true, 'America/Los_Angeles');
    started = true;
}

}

module.exports.start = start;



