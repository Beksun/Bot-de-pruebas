module.exports = {
    name: 'avatar',
    description: 'Shows the specified avatar',
    execute(message, args) {
        // shows the avatar of the specified user, or the current user's if none is specified
		if (!message.mentions.users.size) {
	        return message.channel.send(`Your avatar: ${message.author.displayAvatarURL}`);
	    }
		const taggedUser = message.mentions.users.first();
		return message.channel.send(`${taggedUser.username}'s avatar: ${taggedUser.displayAvatarURL}`);
    },
};