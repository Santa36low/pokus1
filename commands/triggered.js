const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

            message.channel.send ({files: ["https://raw.githubusercontent.com/Santa36low/pokus1/master/obr%C3%A1zky/trigger.gif"]});

};

module.exports.help = {
    name: 'triggered',
    aliases: ['trig', 'nasrat', 'nasrany']
};
