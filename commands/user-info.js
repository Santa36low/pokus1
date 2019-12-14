  
const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    let embed = new discord.RichEmbed()
        .setColor(red_light)
        .setTitle("User Info")
        .setThumbnail(message.guild.iconURL)
        .setAuthor(`${message.author.username} Info`, message.author.displayAvatarURL)
        .addField("**Username:**", `${message.author.username}`, true)
        .addField("**Discriminator:**", `${message.author.discriminator}`, true)
        .addField("**ID:**", `${message.author.id}`, true)
        .addField("**Status:**", `${message.author.presence.status}`, true)
        .addField("**Created At:**", `${message.author.createdAt}`, true)
        .setFooter(`TestBot | Footer`, bot.user.displayAvatarURL);

    message.channel.send(uEmbed);
    }
};

module.exports.help = {
  name: "user",
  aliases: ['já']
};
