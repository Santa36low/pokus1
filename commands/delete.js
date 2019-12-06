const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  client.on("message", (message)=>{
    if (message.author.equals(client.user)) return;

    if (!message.content.startsWith(prefix)) return;
    
    if(message.content.startsWith(prefix + "delete")){
        let args = message.content.split(" ").slice(1);
        let author = message.member;
        let role = message.guild.roles.find('name', "Moderator");
        if(message.member.roles.has(role.id)){
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
    }

};

module.exports.help = {
  name: "delete",
  aliases: ['del']
};
