// We need to import the CSS so that webpack will load it.
// The MiniCssExtractPlugin is used to separate it out into
// its own CSS file.
import css from "../css/app.css"

// webpack automatically bundles all modules in your
// entry points. Those entry points can be configured
// in "webpack.config.js".
//
// Import dependencies
//
import "phoenix_html"

// Import local files
//
// Local files can be imported directly using relative paths, for example:
import socket from "./socket"


// Connect and Join the chat channel
var channel = socket.channel('my_chat:lobby', {}); 
channel.join(); 

var ul = document.getElementById('msg-list'); 
var name = document.getElementById('name');  
var msg = document.getElementById('msg'); 

// Listen for the Enter keypress event to send a new message
msg.addEventListener('keypress', function (event) {
  if (event.keyCode == 13 && msg.value.length > 0) {
    channel.push('shout', { 
      name: name.value,     
      message: msg.value    
    });
    msg.value = '';         
  }
});

// Listen to the shout event to create a new list item for each message
channel.on('shout', function (payload) { 
    var li = document.createElement("li"); 
    var name = payload.name || 'guest';    
    li.innerHTML = '<b>' + name + '</b>: ' + payload.message; 
    ul.appendChild(li);                   
  });

