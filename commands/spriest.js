const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

            message.channel.send ("**Talenty na Shadow Priesta**")
            message.channel.send ("🔗 _http://db.excalibur.ws/?talent#bxMhzhZZxGxpMLohtEo_", {files: ["https://raw.githubusercontent.com/Santa36low/pokus1/master/obr%C3%A1zky/spriest.jpg"]});

};

module.exports.help = {
  name: "spriest",
  aliases: ['sp']
};
