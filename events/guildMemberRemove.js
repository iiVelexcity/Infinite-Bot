module.exports = member => {
  const guild = member.guild;
  guild.channel.get('419481529530449922').send(`Please say goodbye to ${member.user.username} we will miss you!`);
};
