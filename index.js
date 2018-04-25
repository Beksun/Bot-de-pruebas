/*
  Bot-de-pruebas
  Primer bot creado por mi.
  Autor: Beksun
*/

// imports the system modules
const fs = require('fs');

// require the discord.js module
const Discord = require('discord.js');

// create a new Discord client and command files
const client = new Discord.Client();
client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands');

for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
}

// add a configuration file
const { name, version, description, main, author, prefix, token, dependencies } = require('./config.json');

// when the client is ready, run this code
// this event will trigger whenever your bot:
// - finishes logging in
// - reconnects after disconnecting
client.on('ready', () => {
    console.log('The bot is ready to be used');
});

// add responses to messages sent by users
client.on('message', message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).split(/ +/);
	const command = args.shift().toLowerCase();

	if (!client.commands.has(command)) return;

	try {
		client.commands.get(command).execute(message, args);
	}
	catch (error) {
		console.error(error);
		message.reply('there was an error trying to execute that command');
	}
});

// login to Discord with your app's token
client.login(token);