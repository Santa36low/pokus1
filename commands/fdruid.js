const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

            message.channel.send ("**Talenty na Feral Druida**")
            message.channel.send ("talenty na medvídka tank \n 🔗 _http://db.excalibur.ws/?talent#0ZEhGsfboezioVxcz_", {files: ["https://raw.githubusercontent.com/Santa36low/pokus1/master/obr%C3%A1zky/fdruid1.jpg"]});
            message.channel.send ("talenty na kočku dps \n 🔗 _http://db.excalibur.ws/?talent#0ZEh0cfr0ezioExhz_", {files: ["https://raw.githubusercontent.com/Santa36low/pokus1/master/obr%C3%A1zky/fdruid2.jpg"]});

};

module.exports.help = {
  name: "fdruid",
  aliases: ['fdudu']
};
