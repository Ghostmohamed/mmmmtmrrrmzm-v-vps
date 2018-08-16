const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '.'

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(`Nothing`,"http://twitch.tv/S-F")
  console.log('')
  console.log('')
  console.log('╔[═════════════════════════════════════════════════════════════════]╗')
  console.log(`[Start] ${new Date()}`);
  console.log('╚[═════════════════════════════════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════════════════════════════]╗');
  console.log(`Logged in as * [ " ${client.user.username} " ]`);
  console.log('')
  console.log('Informations :')
  console.log('')
  console.log(`servers! [ " ${client.guilds.size} " ]`);
  console.log(`Users! [ " ${client.users.size} " ]`);
  console.log(`channels! [ " ${client.channels.size} " ]`);
  console.log('╚[════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════]╗')
  console.log(' Bot Is Online')
  console.log('╚[════════════]╝')
  console.log('')
  console.log('')
});


client.on("ready", async  => {
setInterval(function(){
client.channels.find('id', '478949105771610112).setName("𝐖");
client.channels.find('id', '478949105771610112').setName("𝐖𝐄");
client.channels.find('id', '478949105771610112').setName("𝐖𝐄𝐋");
client.channels.find('id', '478949105771610112').setName("𝐖𝐄𝐋");
client.channels.find('id', '478949105771610112').setName("𝐖𝐄𝐋𝐂𝐎");
client.channels.find('id', '478949105771610112').setName("𝐖𝐄𝐋𝐂𝐎𝐌");
client.channels.find('id', '478949105771610112').setName("𝐖𝐄𝐋𝐂𝐎𝐌𝐄");
client.channels.find('id', '478949105771610112').setName("𝐖𝐄𝐋𝐂𝐎𝐌𝐄 𝐓");
client.channels.find('id', '478949105771610112').setName("𝐖𝐄𝐋𝐂𝐎𝐌𝐄 𝐓𝐎");
client.channels.find('id', '478949105771610112').setName("𝐖𝐄𝐋𝐂𝐎𝐌𝐄 𝐓𝐎 𝐃");
client.channels.find('id', '478949105771610112').setName("𝐖𝐄𝐋𝐂𝐎𝐌𝐄 𝐓𝐎 𝐃𝐌");
client.channels.find('id', '478949105771610112').setName("𝐖𝐄𝐋𝐂𝐎𝐌𝐄 𝐓𝐎 𝐃𝐌𝐑");
  }, 3000);
});








client.login(process.env.BOT_TOKEN);
