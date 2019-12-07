const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

            message.channel.send ("**Talenty na Resto Druida**")
            message.channel.send ("🔗 _http://db.excalibur.ws/?talent#0xZZxVIteqMest_", {files: ["https://raw.githubusercontent.com/Santa36low/pokus1/master/obr%C3%A1zky/rdruid.jpg"]});

};

module.exports.help = {
  name: "rdruid",
  aliases: ['rdudu']
};
