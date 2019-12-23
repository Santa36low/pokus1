const discord = require("discord.js");
const config = require('../config.json');

module.exports.run = async (bot, message, args) => {

    
    let embed = new discord.RichEmbed()
                .addField("	🗑 `*del xx`", "Vymaže předchozí zprávy, xx - je počet zpráv.")
                .addField("💾 `*info`", "Zobrazí informace o serveru.") 
                .addField("☯ `*ikon`", "Ikonky pro channely.")
                .setAuthor('Kardinal Richelieu je připravený. ✅', 'https://raw.githubusercontent.com/Santa36low/pokus1/master/obr%C3%A1zky/logo.sword.png')
                .setTitle('Volitelné příkazy.')
                .setColor(0xDE1212)
                .setFooter("📌                                         Naslouchám ti můj synu.                                             📌")
                .setThumbnail('https://raw.githubusercontent.com/Santa36low/pokus1/master/obr%C3%A1zky/sword-icon-32147%20(1).png')
    message.channel.send(embed);

};

module.exports.help = {
    name: "gm",
    aliases: ['']
};
