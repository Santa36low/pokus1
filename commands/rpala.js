const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

           return message.channel.send ("Talenty na Retri Paladina")
           return message.channel.send ("http://db.excalibur.ws/?talent#sxZxGzZVf0tbcuiIot", {files: ["./obrázky/rpala.jpg"]});

};

module.exports.help = {
  name: "rpala",
  aliases: []
};
