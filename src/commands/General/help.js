module.exports = {
    name: 'help',
    description: 'Información y ayuda sobre los comandos de Gato',
    aliases: ['Ayuda'],
    category: 'General',
    execute(message, args, client) {
        const Discord = require('discord.js');
        if (!args[0]) {
            const Embed = new Discord.MessageEmbed()
            .setDescription(`Comandos N°${client.commands.size - client.commands.filter(e => e.category === 'Devs').size}`)
            .addField('Comandos Utiles', '`'+ client.commands.filter(e => e.category === 'Utils').map(e => e.name).join(' | ') + '`')
            message.channel.send(Embed);

        } else if (typeof client.commands.get(args[0]) === 'undefined') {
            return message.channel.send('Comando equivocado')
        }
    }
}