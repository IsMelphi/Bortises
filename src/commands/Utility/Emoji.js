module.exports = {
    name: 'emoji',
    description: 'Información de un emoji',
    aliases: ['jumbo'],
    category: 'Utils',
    execute(message, args, client) {
        const Discord = require('discord.js');
        if (!args[0]) return message.channel.send('Debes colocar un emoji');
        if (!args[0].includes(':')) return message.channel.send('Emoji incorrecto');

        const Emojis = Discord.Util.parseEmoji(args[0])

        const Embed = new Discord.MessageEmbed()

        if (Emojis.animated === true) Embed.setDescription(`**Descargar**: [Aquí](https://cdn.discordapp.com/emojis/${Emojis.id}.gif?v=1)\n**Nombre**: ${Emojis.name}\n**ID**: ${Emojis.id}\n**Identificar**: ${Emojis.name}:${Emojis.id}`);
        else Embed.setDescription(`**Descargar**: [Aquí](https://cdn.discordapp.com/emojis/${Emojis.id}.png?v=1)\n**Nombre**: ${Emojis.name}\n**ID**: ${Emojis.id}\n**Identificar**: ${Emojis.name}:${Emojis.id}`);

        if (Emojis.animated === true) Embed.setImage(`https://cdn.discordapp.com/emojis/${Emojis.id}.gif?v=1`);
        else Embed.setImage(`https://cdn.discordapp.com/emojis/${Emojis.id}.png?v=1`);

        message.channel.send(Embed);
    }
}
