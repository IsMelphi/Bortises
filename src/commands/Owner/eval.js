module.exports = {
    name: 'eval',
    description: 'Evaluar codigos JS', 
    aliases: ['e'],
    category: 'Devs',
    execute(message, args, client) {

    const Discord = require('discord.js');
    const Util = require('util');
    const { Markdown } = require('../../utils/utils');

    if (!['534951970310586378'].includes(message.author.id)) return;
    if (!args[0]) return;

    try {

        let Evaluacion = eval(args.join(' '));
        const Tipo = typeof Evaluacion;

        if (typeof Evaluacion !== 'string') Evaluacion = Util.inspect(Evaluacion, { depth: 0});
        if (Evaluacion.length >= 1020) Evaluacion = `${Evaluacion.substr(0, 1010)}...`;

        const Embeed = new Discord.MessageEmbed()
        .setAuthor(message.member.displayName, message.author.displayAvatarURL({ size: 4096, format: 'png', dynamic: true }))
        .addField('Evaluado en', Markdown(Math.abs(Date.now() - message.createdTimestamp) + 'ms', { code: 'yaml' }), true)
        .addField('Tipo', Markdown(((str) => { return str.substring(0, 1).toUpperCase() + str.substring(1) })(Tipo), { code: 'js' }), true)
        .addField('Entrada', Markdown(args.join(' '), { code: 'js' }))
        .addField('Salida', Markdown(Evaluacion.replace(process.env.DISCORD_TOKEN, "'Token Secreto'").replace(process.env.MONGO_URL, "'URI de MONGODB'"), { code: 'js' }))
        .setColor('A0DAA4')
        message.channel.send(Embeed);

    } catch (error) {

        const EmbedError = new Discord.MessageEmbed()
        .setAuthor(message.member.displayName, message.author.displayAvatarURL({ size: 4096, format: 'png', dynamic: true }))
        .addField('Evaluado en', Markdown(Math.abs(Date.now() - message.createdTimestamp) + 'ms', { code: 'yaml' }), true)
        .addField('Tipo', Markdown(error.name, { code: 'js' }), true)
        .addField('Entrada', Markdown(args.join(' '), { code: 'js' }))
        .addField('Error', Markdown(error.message, { code: 'js' }))
        .setColor('D86D66')
        return message.channel.send(EmbedError);
    }
    }
}