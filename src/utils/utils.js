const Humanize = require('humanize-duration');
const Discord = require('discord.js');

module.exports = {

    Spotify: function Spotify(usuario, message) {
        const Spotify = usuario.presence.activities.filter(e => e.name === 'Spotify');
        if (!Spotify.length) return message.channel.send('El usuario no esta en **Spotify**');
        return message.channel.send(
            new Discord.MessageEmbed()
            .setAuthor(Spotify.map(e => e.details), 'https://media.discordapp.net/attachments/770454173467672578/777635583064277042/Spotify.png')
            .addField('Album', Spotify.map(e => e.assets.largeText))
            .addField('Artista', Spotify.map(e => e.state))
            .addField('Duración', Humanize(Math.floor(new Date(Spotify.map(e => e.timestamps.end)).getTime() - new Date(Spotify.map(e => e.timestamps.start))), { language: 'es', serialComma: false, conjunction: ' y ', round: true }))
            .setThumbnail(Spotify.map(e => e.assets.largeImageURL({ size: 4096, format: 'png' }))[0])
            .setColor('22C65E')
        );
    },

    Markdown: function Markdown(str, options = {}) {
        if (!options.code) {
            return `\`\`\`\n${str}\n\`\`\``;
        } else {
           return `\`\`\`${options.code}\n${str}\n\`\`\``;
        }
    },
}