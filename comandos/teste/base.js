const Discord = require("discord.js")

module.exports = {
name: "base",
run: async (bot, message) => {
 message.channel.send("msg "+ message.author)//para mandar uma msg normal!
 const embed = new Discord.MessageEmbed()
 .setColor("cor em hex")
 .setAuthor("titulo acima do .setTitle ;-;")
 .setTitle("titulo da embed")
 .setDescription("descrição da embed")
 .addField("field da embed", "valor embed")
 .setTimestamp()
 .setFooter("footer da embed")
 .setThumbnail("img da thumbnail")
 
 message.channel.send(embed)
 }
}
