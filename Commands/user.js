module.exports = {
    name: 'user',
    description: 'Shows the users info',
    execute(message, args) {
        message.channel.send(`Your username: ${message.author.username}\nYour ID: ${message.author.id}`);
    },
};