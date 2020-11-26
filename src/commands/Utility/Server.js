module.exports = {
    name: 'server',
    description: 'Información del servidor',
    aliases: ['servidor'],
    category: 'Utils',
    execute(message, args, client) {
        const Discord = require('discord.js');
        const { Flags, Features, Notificaciones, Verificacion } = require('../../utils/flags');
        
        const embed = new Discord.MessageEmbed()
        .setAuthor(`Información de ${message.guild.name}`, message.guild.iconURL({ size: 2048, format: 'png', dynamic: true }))
        .addField('Creador', `**Tag:** ${message.guild.owner.user.username}\n**ID:** ${message.guild.owner.user.id}`)

    if (message.guild.premiumTier) embed.addField('\<a:NitroNitroso:753722285621248010>Boost Estadisticas', `**Numero de Boost:** ${message.guild.premiumSubscriptionCount} Miembros\n**Nivel de Boost:** ${message.guild.premiumTier}`)
    if (message.guild.features.length) embed.addField('Features', `\`\`\`\n${message.guild.features.map(x => Features[x]).join(', ')}\n\`\`\``)

        embed.addField('Servidor', `**Notificaciones**: ${Notificaciones[message.guild.defaultMessageNotifications]}\n**Creado el**: ${(str => { return str.slice(0,1).toUpperCase() + str.slice(1)})((((date) => { let opciones = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }; return new Intl.DateTimeFormat('es', opciones).format(date) })(message.guild.createdAt)))}\n**Verificación**: ${Verificacion[message.guild.verificationLevel]}\n**Región**: ${Flags[message.guild.region]}`, true)
        embed.addField('Estadisticas del Servidor', `**Canales**: ${message.guild.channels.cache.size}\n**Miembros**: ${message.guild.memberCount}\n**Emojis**: ${message.guild.emojis.cache.size}\n**Roles**: ${message.guild.roles.cache.size}`, true)
        embed.setImage(message.guild.bannerURL({ size: 2048, dynamic: true, format: 'png' }) || message.guild.splashURL({ size: 2048, dynamic: true, format: 'png'}) || message.guild.iconURL({size: 2048, dynamic: true, format: 'png'}))
        .setColor('RANDOM')
        message.channel.send(embed);
    }
}