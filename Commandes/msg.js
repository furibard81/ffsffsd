const Discord = require("discord.js");
const fs = require('fs');
const config = require("./config.json");
var prefix = config.prefix;

function wait(ms){
    var start = new Date().getTime()
    var end = start
    while(end < start + ms) {end = new Date().getTime();}
}

module.exports.run = async (client, message, args) => {
    message.delete()

        var sondage = args.slice(0).join(" ")

        if(!sondage) {const fail = await message.channel.send("Veuillez marqué un message"); wait(10000); fail.delete(); return}

        const embed = new Discord.MessageEmbed()
       .setColor("3f48cc")
        .addField('\u200B', `**${sondage}**`,)
        .setFooter(`Message de ${message.author.tag}`, message.author.displayAvatarURL({dynamic:true}))
        message.channel.send(embed).then(embedMessage => {
            embedMessage.react("✅");
        });
};

module.exports.help = {
    name: 'msg'
};
