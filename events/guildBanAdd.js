module.exports = (guild, user) => {
  guild.channel.get('417475192462376987').send(`${user.username} was just banned!`);
};
