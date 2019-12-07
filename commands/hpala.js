const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

            message.channel.send ("Talenty na Holy Paladina")
            message.channel.send ("užitečný do raidu pro maximalni buffy (king,bom,bow) \n 🔗 _http://db.excalibur.ws/?talent#sVxubgzhestxMuZx_", {files: ["https://raw.githubusercontent.com/Santa36low/pokus1/master/obr%C3%A1zky/hpala1.jpg"]});
            message.channel.send ("neni max bow mala šance na resist fear,curse, disorient a disease efekty \n 🔗 _http://db.excalibur.ws/?talent#sVxurgkGestxMu_", {files: ["https://raw.githubusercontent.com/Santa36low/pokus1/master/obr%C3%A1zky/hpala2.jpg"]});

};

module.exports.help = {
  name: "hpala",
  aliases: []
};
