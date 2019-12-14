const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

            message.channel.send ("**Talenty na Resto Samana**")
            message.channel.send ("talenty pro víc redukci agra a redukce fire,natural a frost dmg \n 🔗 _http://db.excalibur.ws/?talent#hxcZZEcxtAeotcd_", {files: ["https://raw.githubusercontent.com/Santa36low/pokus1/master/obr%C3%A1zky/rsaman1.jpg"]});
            message.channel.send ("talenty do raidu pro agi + streanght totem a armor totem \n 🔗 _http://db.excalibur.ws/?talent#hZxbdbZEc0tVjoted_", {files: ["https://raw.githubusercontent.com/Santa36low/pokus1/master/obr%C3%A1zky/rsaman2.jpg"]});

};

module.exports.help = {
  name: "rsaman",
  aliases: ['rsam']
};
