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
client.channels.find('id', '478949105771610112').setName("W");
client.channels.find('id', '478949105771610112').setName("We");
client.channels.find('id', '478949105771610112').setName("Wel");
client.channels.find('id', '478949105771610112').setName("Welc");
client.channels.find('id', '478949105771610112').setName("Welco");
client.channels.find('id', '478949105771610112').setName("Welcom");
client.channels.find('id', '478949105771610112').setName("Welcome");
client.channels.find('id', '478949105771610112').setName("Welcome T");
client.channels.find('id', '478949105771610112').setName("Welcome To");
client.channels.find('id', '478949105771610112').setName("Welcome To D");
client.channels.find('id', '478949105771610112').setName("Welcome To DM");
client.channels.find('id', '478949105771610112').setName("Welcome To DMR");
  }, 3000);
});








client.login(process.env.BOT_TOKEN);
