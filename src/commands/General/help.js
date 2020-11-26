module.exports = {
    name: 'help',
    description: 'Información y ayuda sobre los comandos de Gato',
    aliases: ['Ayuda'],
    category: 'General',
    usage: 'gato!help (-dm) | gato!help <comando>',
    execute(message, args, client) {
        const Discord = require('discord.js');
        if (!args[0]) {
            const Embed = new Discord.MessageEmbed()
            .setDescription(`Comandos N°${client.commands.size - client.commands.filter(e => e.category === 'Devs').size}`)
            // Comandos en Total - Comandos Devs
            .addField('Comandos Utiles', '`'+ client.commands.filter(e => e.category === 'Utils').map(e => e.name).join(' | ') + '`')
            message.channel.send(Embed);

        }  else if (args[0] === '-dm') {
            // Mensaje al dm
            const Embed = new Discord.MessageEmbed()
            .setDescription(`Comandos N°${client.commands.size - client.commands.filter(e => e.category === 'Devs').size}`)
            // Comandos en Total - Comandos Devs
            .addField('Comandos Utiles', '`'+ client.commands.filter(e => e.category === 'Utils').map(e => e.name).join(' | ') + '`')
            return message.author.send(Embed);
            
        } else if (typeof client.commands.get(args[0]) === 'undefined') {
            // Si el comando no existe
            return message.channel.send('Comando equivocado');
        } else {
            // Información de un comando
            const EmbedInfo = new Discord.MessageEmbed()
            .addField('Categoria', client.commands.get(args[0]).category, true)
            .addField('Alias', client.commands.get(args[0]).aliases.join(' '), true)
            .addField('Uso', client.commands.get(args[0]).usage, true)
            return message.channel.send(EmbedInfo);
        }
    }
}