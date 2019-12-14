const discord = require("discord.js");
const config = require('../config.json');

module.exports.run = async (bot, message, args) => {

    
    let embed = new discord.RichEmbed()
    .addField("📘 `*hpala`", "Talenty na holy paladina")
    .addField("📘 `*ppala`", "Talenty na protection paladina")
    .addField("📘 `*rpala`", "Talenty na retri paladina")
    .addField("📕 `*bdruid`", "Talenty na balance druida")
    .addField("📕 `*rdruid`", "Talenty na resto druida")
    .addField("📕 `*fdruid`", "Talenty na feral druida")
    .addField("📗 `*rsaman`", "Talenty na resto samana")
    .addField("📗 `*elesaman`", "Talenty na elemental samana")
    .addField("📗 `*enchasaman`", "Talenty na enhacement samana")
    .setAuthor('Kardinal Richelieu je připravený. ✅', 'https://raw.githubusercontent.com/Santa36low/pokus1/master/obr%C3%A1zky/logo.sword.png')
    .setColor(0xDE1212)
    .setTitle('Vyber charakter a spec.')
    .setFooter("📌                                         Naslouchám ti můj synu.                                             📌")
    .setThumbnail('https://raw.githubusercontent.com/Santa36low/pokus1/master/obr%C3%A1zky/sword-icon-32147%20(1).png')
    message.channel.send(embed);

};

module.exports.help = {
    name: 'spec',
    aliases: []
};
