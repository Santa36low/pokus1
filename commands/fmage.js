const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

            message.channel.send ("**Talenty na Fire Mage**")
            message.channel.send ("talenty s resetem velkých cd na kostku... \n 🔗 _http://db.excalibur.ws/?talent#oZxxMofMf0gRxbA0Is00o_", {files: ["https://raw.githubusercontent.com/Santa36low/pokus1/master/obr%C3%A1zky/fmage1.jpg"]});
            message.channel.send ("talenty pro flamestrike (plošky) \n 🔗 _http://db.excalibur.ws/?talent#oZxxMufcI0eRxMhhhs_", {files: ["https://raw.githubusercontent.com/Santa36low/pokus1/master/obr%C3%A1zky/fmage2.jpg"]});

};

module.exports.help = {
  name: "fmage",
  aliases: ['fire', 'fmag']
};
