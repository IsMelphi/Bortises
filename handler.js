module.exports = function() {
    return require('fs').readdirSync('./src/commands').filter(function SubFolder(file) {
        return require('fs').statSync(`./src/commands/${file}`).isDirectory();
    });
}