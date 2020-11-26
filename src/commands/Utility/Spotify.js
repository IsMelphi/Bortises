module.exports = {
    name: 'spotify',
    description: 'Ver la presencia de Spotify de un usuario',
    aliases: ['espotifai'],
    category: 'Utils',
    execute(message, args, client) {
        const { Spotify } = require('../../utils/utils');
        const Usuario = client.users.resolve(args[0]) || message.mentions.users.first() || message.author;
        Spotify(Usuario, message);
    }
}