module.exports = {
    name: 'kick',
    description: 'Kicks the specified user',
    execute(message, args) {
        // kick an specified member
		if (!message.mentions.users.size) {
		    // in case the user didn't specify a user, an error message appears
			return message.reply('add a member to kick');
		}
	    const taggedUser = message.mentions.users.first();
	    message.channel.send(`You wanted to kick: ${taggedUser.username}`);
    },
};