require('dotenv').config();
const Discord = require('discord.js');
const Handler = require('./handler');
const Mongo = require('./src/database/main');
const client = new Discord.Client();

client.commands = new Discord.Collection();

const ArchivosComandos = require('fs').readdirSync('./src/commands').filter(file => file.endsWith('.js'));

for (Folder of Handler()) {
    const FolderFile = require('fs').readdirSync(`./src/commands/${Folder}`);
    for (File of FolderFile) {
        ArchivosComandos.push([Folder, File]);
    };
}

for (file of ArchivosComandos) {
    let cmd;
    if (Array.isArray(file)) cmd = require(`./src/commands/${file[0]}/${file[1]}`);
    else cmd = require(`./src/commands/${file}`);

    client.commands.set(cmd.name, cmd);
}

client.on('message', async (message) => {

    let Prefix = 'gato!';
    if (!message.content.startsWith(Prefix)) return;

    const args = message.content.slice(Prefix.length).trim().split(/ +/g);
    const cmdName = args.shift().toLowerCase();

    const command = client.commands.get(cmdName) || client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(cmdName));
    if (!command) return;

    try {
        command.execute(message, args, client);
    } catch(error) {
        return console.error(error);
    }

});

client.login(process.env.DISCORD_TOKEN)