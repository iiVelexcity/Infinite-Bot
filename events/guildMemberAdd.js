const Discord = require('discord.js');

module.exports = (guild, user) => {

  const embed = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .setTimestamp()
    .setDescription(`${user.username} Just joined Infinite Bot's Official Discord Server! Please welcome them!`);
  return guild.channels.get(guild.channels.find('name', 'general').id).send({embed});

};
