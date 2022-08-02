const Discord = require('discord.js')
const config = require('../config.json')
var prefix = config.prefix;
var speudo = config.speudo;

module.exports = async (client, message) => {
    console.log(`${client.user.username} est en ligne !`);

    
        client.user.setPresence({ activity: { name: ' Blacknight RP'}, status: 'online' })
    
};