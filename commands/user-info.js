  
const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    let embed = new discord.RichEmbed()
        .setColor(0x75d340)
        .setTitle("Tvoje Informace")
        .setThumbnail(message.guild.iconURL)
        .setAuthor(`${message.author.username}`, message.author.displayAvatarURL)
        .addField("**Jméno:**", `${message.author.username}`, true)
        .addField("**ID:**", `${message.author.id}`, true)
        .addField("**Status:**", `${message.author.presence.status}`, true)
        .addField("**Vytvoření Učtu:**", `${message.author.createdAt}`, true)
        .setFooter(`Kardinal Richelieu`, bot.user.displayAvatarURL);

    message.channel.send(embed);
};

module.exports.help = {
  name: "user",
  aliases: ['já']
};
