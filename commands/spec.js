const discord = require("discord.js");
const config = require('../config.json');

module.exports.run = async (bot, message, args) => {

    
    let embed = new discord.RichEmbed()
    .addField("**Talenty na Paladina**", "📘 `*hpala` - Talenty na holy paladina \n 📘 `*ppala` - Talenty na protection paladina \n 📘 `*rpala` - Talenty na retri paladina")
    .addField("**Talenty na Druida**", "📕 `*bdruid` - Talenty na balance druida \n 📕 `*rdruid` - Talenty na resto druida \n 📕 `*fdruid` - Talenty na feral druida")
    .addField("**Talenty na Samana**", "📗 `*rsaman` - Talenty na resto samana \n 📗 `*elesaman` - Talenty na elemental samana \n 📗 `*enhasaman` - Talenty na enhacement samana")
    .addField("**Talenty na Maga**", "📙 `*fmage` - Talenty na fire maga")
    .addField("**Talenty na Priesta**", "📔 `*spriest` - Talenty na shadow priesta")
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
