module.exports = {
    name: 'prune',
    description: 'Prunes the amount of messages specified',
    execute(message, args) {
        // prunes a number of messages specified by the user (plus this message)
		const amount = parseInt(args[0]) + 1;

	    if (isNaN(amount)) {
	        // the string is not a number
			return message.reply('that doesn\'t seem to be a valid number.');
	    }
		else if (amount < 1 || amount > 100) {
		    // the number is not in the range specified
			return message.reply('you need to input a number between 2 and 100.');
		}
		
		// deletes the number of messages specified
		message.channel.bulkDelete(amount, true).catch(err => {
		    // catches an error
			console.error(err);
		    message.channel.send('There was an error trying to prune ${amount} messages in this channel!');
		});
    },
};