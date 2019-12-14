const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

            message.channel.send ("**Talenty na Elemental Samana**")
            message.channel.send ("🔗 _http://db.excalibur.ws/?talent#hEczVoMsAotZxbjz0x_", {files: ["https://raw.githubusercontent.com/Santa36low/pokus1/master/obr%C3%A1zky/elesaman.jpg"]});

};

module.exports.help = {
  name: "elesaman",
  aliases: ['ele', 'elesam']
};
