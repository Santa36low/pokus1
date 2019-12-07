const discord = require("discord.js");

var fortunes = [
    "Našamána",
    "Mladý gnom hledá gnomku kolem 39 levelu. :D",
    "A dáváte dmg?",
    "Co je to blízátko?",

];

module.exports.run = async (bot, message, args) => {

    message.channel.sendMessage(fortunes[Math.floor(Math.random() * fortunes.length)]);
};

module.exports.help = {
  name: "hlasky",
  aliases: ['hlas', '!', 'hlaska']
};
