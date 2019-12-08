const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

            message.channel.send ("Za Allianci !!!")
            message.channel.send ({files: ["https://raw.githubusercontent.com/Santa36low/pokus1/master/obr%C3%A1zky/ali.jpg"]});

};

module.exports.help = {
  name: "ali",
  aliases: ['alliance', 'za alianci', 'ali', 'aliance']
};
