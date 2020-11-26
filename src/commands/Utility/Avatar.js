module.exports = {
    name: 'avatar',
    description: 'Ver el avatar de un usuario',
    aliases: ['pf'],
    category: 'Utils',
    execute(message, args, client) {
        const Discord = require('discord.js');
        const Usuario = client.users.resolve(args[0]) || message.mentions.users.first() || message.author;

        message.channel.send(`**${message.member.displayName}**, Aquí esta el avatar de __${Usuario.tag}__:\n${Usuario.displayAvatarURL({ size: 4096, dynamic: true, format: 'png' })}`);
    }
}