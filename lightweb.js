DEBUG=true;
HOST = process.env.HOST || 'localhost'; // localhost
PORT = process.env.PORT || 14000;
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";


var sys = require("sys")
, fs = require("fs")
, util = require("util")
, url = require("url")
, http = require("http")
, qs = require("querystring")
, express = require("express")



var logs=[];
    
function log(x) {
//    logs.push(x); // bloats memory!
//    console.log(x);
}

app = express();


var starttime = (new Date()).getTime();

var mem = process.memoryUsage();
// every 10 seconds poll for the memory.
/* setInterval(function () {
    mem = process.memoryUsage();
}, 10*1000);
*/

function logMemoryUsage(msg) {
    log( process.memoryUsage() + ": " + msg);
}

var app=express();


app.use(express.static(__dirname+ '/html'));  // What this does and no one will tell you is that requests to /index.html will return the files in the html/ directory on the server.

app.listen(Number(process.env.PORT || PORT), HOST);

sys.puts("Server up at " + app.get('env.HOSTNAME') + " on " + HOST +":" +PORT);
sys.puts("Go to http://" + HOST +":"+PORT +" to view lightweb page.");
				    

				  
