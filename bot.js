/*
  Bot-de-pruebas
  Primer bot creado por mi.
  Autor: Beksun
*/

// require the discord.js module
const Discord = require('discord.js');

// create a new Discord client
const client = new Discord.Client();

// add a configuration file
const { name, version, description, main, author, prefix, token, dependencies } = require('./package.json');

// when the client is ready, run this code
// this event will trigger whenever your bot:
// - finishes logging in
// - reconnects after disconnecting
client.on('ready', () => {
    console.log('Ready!');
});

// add responses to messages
client.on('message', message => {
    if (message.content === `${prefix}ping`) {
	    // send back "Pong" to the channel the message was sent in
	    message.channel.send('Pong');
	}
	else if (message.content === `${prefix}server`) {
	    // send back total info about the server
		message.channel.send(`Server name: ${message.guild.name}\nTotal members: ${message.guild.memberCount}\nDate of creation: ${message.guild.createdAt}\nRegion of the server: ${message.guild.region}`);
	}
});

// login to Discord with your app's token
client.login(token);