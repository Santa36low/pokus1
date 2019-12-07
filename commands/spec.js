const discord = require("discord.js");
const config = require('../config.json');

module.exports.run = async (bot, message, args) => {

    
    let embed = new discord.RichEmbed()
    .addField("`*hpala`", "Talenty na holy paladina")
    .addField("`*ppala`", "Talenty na protection paladina")
    .addField("`*rpala`", "Talenty na retri paladina")
    .addField("`*bdruid`", "Talenty na balance druida")
    .addField("`*rdruid`", "Talenty na resto druida")
    .addField("`*fdruid`", "Talenty na feral druida")
    .setColor(0xDE1212)
    .setFooter("📌                                Naslouchám ti můj synu. Zvol si spec.                             📌")
    .setTitle("🎚                     ✅Zvládl jsi to zde jsou příkazy!                   🎚")
    .setThumbnail('http://imgWorld.cz/s3/WNTKewOsPE.png')
    message.channel.send(embed);

};

module.exports.help = {
    name: 'spec',
    aliases: []
};
