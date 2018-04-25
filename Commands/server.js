module.exports = {
    name: 'server',
    description: 'Shows the servers info',
    execute(message, args) {
        message.channel.send(`Server name: ${message.guild.name}\nTotal members: ${message.guild.memberCount}\nDate of creation: ${message.guild.createdAt}\nRegion of the server: ${message.guild.region}`);
    },
};