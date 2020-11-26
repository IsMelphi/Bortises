module.exports = {
    name: 'say',
    description: 'Repetir un mensaje',
    aliases: ['decir'],
    category: 'General',
    execute(message, args, client) {
        if (!args[0]) return message.channels.send('Debes escribir un mensaje');
        if (message.deletable) message.delete();
        message.channel.send(args.join(' ').replace(/@everyone/gi, '@everijuan').replace(/@here/gi, '@jere'), { disableMentions: 'all' });
    }
}