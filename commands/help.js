const discord = require("discord.js");
const config = require('../config.json');

module.exports.run = async (bot, message, args) => {

    
    let embed = new discord.RichEmbed()
                .addField("❓ `*?`", "Položíš Kardinalovi otázku.")
                .addField("🎶 `*dj`", "Příkazy pro DJ bota. Hrajeme na vaše přání.")
                .addField("💊 `*spec`", "Zobrazí guidy ma classy a specy.")
                .addField("🗑 `*delete xx`", "Smaže předchozí zprávi xx - počet zpráv.")
                .addField("🔰 `*ali`", "Ukaže banner alliance.")
                .addField("🔰 `*hord`", "Ukaže banner hordy.")
                .addField("📜 `*hlasky`", "Napíše nahodnou hlášku.")
                .addField("☯ `*ikon`", "Ikonky pro channely.")
                .addField("🗿 `*meme`", "Nahraje random meme z Radittu WoW obrázky.")
                .setColor(0xDE1212)
                .setFooter("📌                                         Naslouchám ti můj synu.                                             📌")
                .setTitle('https://raw.githubusercontent.com/Santa36low/pokus1/master/obr%C3%A1zky/logo.sword.png') 
                .setThumbnail('https://raw.githubusercontent.com/Santa36low/pokus1/master/obr%C3%A1zky/sword-icon-32147-(1).png')
    message.channel.send(embed);

};

module.exports.help = {
    name: "help",
    aliases: ['pomoc', 'příkazy', 'příkazy', 'prikaz', 'prikazy']
};
