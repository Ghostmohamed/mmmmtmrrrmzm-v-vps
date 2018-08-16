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


client.on('message', message => {
    if (message.author.id === client.user.id) return;
    if (message.guild) {
   let embed = new Discord.RichEmbed()
    let args = message.content.split(' ').slice(1).join(' ');
if(message.content.split(' ')[0] == prefix + 'bc1') {
    if (!args[1]) {
return;
}
        message.guild.members.forEach(m => {
   if(!message.member.hasPermission('ADMINISTRATOR')) return;
            var bc = new Discord.RichEmbed()
            .addField(' » الرسالة : ', args)
            .setColor('#ff0000')
            // m.send(`[${m}]`);
            m.send(`${m}`,{embed: bc});
        });
    }
    } else {
        return;
    }
});






client.on('guildMemberAdd', member => {
    var embed = new Discord.RichEmbed()
    .setAuthor(member.user.username, member.user.avatarURL)
    .setThumbnail(member.user.avatarURL)
    .setTitle(`عضو جديد`)
    .setDescription(`اهلا بك في السيرفر`)
    .addField(' :bust_in_silhouette:  انت رقم',`**[ ${member.guild.memberCount} ]**`,true)
    .setColor('GREEN')
    .setFooter('The King Bot', 'https://cdn.discordapp.com/icons/390551815072251904/418fa2788d8115808951c9881ba8f190.jpg')

var channel =member.guild.channels.find('name', 'wlc')
if (!channel) return;
channel.send({embed : embed});
});




client.on("guildMemberAdd", function(member) {
    const wc = member.guild.channels.find("name", "member-log")
        const embed = new Discord.RichEmbed()
        .setColor('B90C0C')
        .setAuthor(member.user.tag, member.user.avatarURL)
 .setDescription('***يا مرحبا وسهلاً بضيف لفانا، يزهي بك الأدب العربي وينثر لك أزهار يسقيك من نبع المشاعر وفانا، لين الهلا تثمر على غصونك أطيار. ***')
.setThumbnail(member.avatarURL)
  .setImage('https://www.askideas.com/media/13/Welcome-Deers-Sign.jpg')
        .setTimestamp()
        return wc.sendEmbed(embed);
        
});



















client.login(process.env.BOT_TOKEN);
