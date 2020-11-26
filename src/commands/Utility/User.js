module.exports = {
    name: 'user',
    description: 'Estadistica de un usuario',
    aliases: ['us'],
    category: 'Utils',
    execute(message, args, client) {
        const Discord = require('discord.js');
        const { Badges } = require('../../utils/flags');
        const Usuario = client.users.resolve(args[0]) || message.mentions.users.first() || message.author;
        const Roles = message.guild.member(Usuario)._roles.map(e => message.guild.roles.cache.get(e).toString());

        if (Roles.length >= 1020) Roles = `${Evaluacion.substr(0, 1010)}...`;

        if (!Usuario.avatar) {
            const Embed = new Discord.MessageEmbed()
            .setAuthor(`Información de ${message.guild.members.resolve(Usuario.id).displayName}`, Usuario.displayAvatarURL({ size: 4096, format: 'png', dynamic: true }))
            .addField('Información', `**Nombre y discriminador**: ${Usuario.tag}\n**ID**: ${Usuario.id}\n**Insignias**: ${Usuario.flags.toArray().length < 1 ? '\u200b' : Usuario.flags.toArray().map(e => Badges[e]).join(' ')}`)
            .addField('Servidor', `**Cuenta creada**: ${(str => { return str.slice(0,1).toUpperCase() + str.slice(1)})((((date) => { let opciones = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }; return new Intl.DateTimeFormat('es', opciones).format(date) })(Usuario.createdAt)))}\n**Ingreso al servidor**: ${(str => { return str.slice(0,1).toUpperCase() + str.slice(1)})((((date) => { let opciones = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }; return new Intl.DateTimeFormat('es', opciones).format(date) })(message.guild.member(Usuario).joinedAt)))}\n**Rol destacado**: ${message.guild.member(Usuario).roles.highest}\n**Roles**: ${Roles}`)
            .setColor('A0D9DA')
            .setImage(Usuario.displayAvatarURL({ size: 4096, format: 'png', dynamic: true }))
            return message.channel.send(Embed);
        }

        if (Usuario.avatar.startsWith('a_')) {
            const NitroEmbed = new Discord.MessageEmbed()
            .setAuthor(`Información de ${message.guild.members.resolve(Usuario.id).displayName}`, Usuario.displayAvatarURL({ size: 4096, format: 'png', dynamic: true }))
            .addField('Información', `**Nombre y discriminador**: ${Usuario.tag}\n**ID**: ${Usuario.id}\n**Insignias**: ${Usuario.flags.toArray().length < 1 ? '\u200b' : Usuario.flags.toArray().map(e => Badges[e]).join(' ')} <:nitro:760315882802380840>`)
            .addField('Servidor', `**Cuenta creada**: ${(str => { return str.slice(0,1).toUpperCase() + str.slice(1)})((((date) => { let opciones = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }; return new Intl.DateTimeFormat('es', opciones).format(date) })(Usuario.createdAt)))}\n**Ingreso al servidor**: ${(str => { return str.slice(0,1).toUpperCase() + str.slice(1)})((((date) => { let opciones = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }; return new Intl.DateTimeFormat('es', opciones).format(date) })(message.guild.member(Usuario).joinedAt)))}\n**Rol destacado**: ${message.guild.member(Usuario).roles.highest}\n**Roles**: ${Roles}`)
            .setColor('A0D9DA')
            .setImage(Usuario.displayAvatarURL({ size: 4096, format: 'png', dynamic: true }))
            return message.channel.send(NitroEmbed);
        } else {
            const Embed = new Discord.MessageEmbed()
            .setAuthor(`Información de ${message.guild.members.resolve(Usuario.id).displayName}`, Usuario.displayAvatarURL({ size: 4096, format: 'png', dynamic: true }))
            .addField('Información', `**Nombre y discriminador**: ${Usuario.tag}\n**ID**: ${Usuario.id}\n**Insignias**: ${Usuario.flags.toArray().length < 1 ? '\u200b' : Usuario.flags.toArray().map(e => Badges[e]).join(' ')}`)
            .addField('Servidor', `**Cuenta creada**: ${(str => { return str.slice(0,1).toUpperCase() + str.slice(1)})((((date) => { let opciones = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }; return new Intl.DateTimeFormat('es', opciones).format(date) })(Usuario.createdAt)))}\n**Ingreso al servidor**: ${(str => { return str.slice(0,1).toUpperCase() + str.slice(1)})((((date) => { let opciones = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }; return new Intl.DateTimeFormat('es', opciones).format(date) })(message.guild.member(Usuario).joinedAt)))}\n**Rol destacado**: ${message.guild.member(Usuario).roles.highest}\n**Roles**: ${Roles}`)
            .setColor('A0D9DA')
            .setImage(Usuario.displayAvatarURL({ size: 4096, format: 'png', dynamic: true }))
            return message.channel.send(Embed);
        }
    }
}