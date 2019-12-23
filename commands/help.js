const discord = require("discord.js");
const config = require('../config.json');

module.exports.run = async (bot, message, args) => {

    
    let embed = new discord.RichEmbed()
                .addField("❓ `*?`", "Položíš Kardinalovi otázku.")
                .addField("💾 `*info`", "Zobrazí informace o serveru.") 
                .addField("🎶 `*dj`", "Příkazy pro DJ bota. Hrajeme na vaše přání.")
                .addField("💊 `*spec`", "Zobrazí guidy ma classy a specy.")
                .addField("🔰 `*ali`", "Ukaže banner alliance.")
                .addField("🔰 `*hord`", "Ukaže banner hordy.")
                .addField("📜 `*hlasky`", "Napíše nahodnou hlášku.")
                .addField("☯ `*ikon`", "Ikonky pro channely.")
                .addField("🗿 `*meme`", "Nahraje random meme z Radittu WoW obrázky.")
                .addField("⛔ `*gm`", "Příkazy pro Moderátory")    
                .setAuthor('Kardinal Richelieu je připravený. ✅', 'https://raw.githubusercontent.com/Santa36low/pokus1/master/obr%C3%A1zky/logo.sword.png')
                .setTitle('Volitelné příkazy.')
                .setColor(0xDE1212)
                .setFooter("📌                                         Naslouchám ti můj synu.                                             📌")
                .setThumbnail('https://raw.githubusercontent.com/Santa36low/pokus1/master/obr%C3%A1zky/sword-icon-32147%20(1).png')
    message.channel.send(embed);

};

module.exports.help = {
    name: "help",
    aliases: ['pomoc', 'příkazy', 'příkazy', 'prikaz', 'prikazy']
};
