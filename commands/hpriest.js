const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

            message.channel.send ("**Talenty na Holy Priesta**")
            message.channel.send ("🔗 _http://db.excalibur.ws/?talent#bxMhkhxZfhxcf0qVhVo_", {files: ["https://raw.githubusercontent.com/Santa36low/pokus1/master/obr%C3%A1zky/hpriest.jpg"]});

};

module.exports.help = {
  name: "hpriest",
  aliases: ['hp']
};
