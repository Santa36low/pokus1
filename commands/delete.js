const discord = require("discord.js");


module.exports.run = async (bot, message, args) => {

       
        
 
        let author = message.member;
        let role = message.guild.roles.find("817335479820746762");
        if(message.member.roles.has(role)){
            if(!args[0]){
                message.delete();
                message.author.send("Chybí číslo od 2 do 100 - počet zpráv kolik smažu");
                return;
            }
            if(args[0] > 100){
                message.delete();
                message.author.send("Maximum je 100");
                return;
            }
            message.delete();
            message.channel.bulkDelete(args[0]);
            message.author.send("✅ Hotovo smazáno" + args[0] + " messages");
            return;
        
        }
    

};

module.exports.help = {
  name: "delete",
  aliases: ['del']
};
