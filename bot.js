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




client.on('message' , message => {
    var prefix = "*";
    if(message.content.startsWith(prefix + 'ticket')) {
        message.channel.send('The Ticket has been create');
        client.users.get('347048358529204226').send({embed: new Discord.RichEmbed()
        .setDescription(**<@${message.author.id}> has Create a Ticket call him**)
        });
    }
});


client.on('message', message => {
              if(!message.channel.guild) return;
    var prefix = ".";
    if(message.content.startsWith(prefix + 'bc')) {
    if(!message.channel.guild) return message.channel.send('هذا الأمر فقط للسيرفرات').then(m => m.delete(5000));
  if(!message.member.hasPermission('ADMINISTRATOR')) return      message.channel.send('للأسف لا تمتلك صلاحية ADMINISTRATOR' );
    let args = message.content.split(" ").join(" ").slice(2 + prefix.length);
    let copy = "BY XMAS";
    let request = Requested By ${message.author.username};
    if (!args) return message.reply('
يجب عليك كتابة كلمة او جملة لإرسال البرودكاست
');message.channel.send(**هل أنت متأكد من إرسالك البرودكاست؟ \nمحتوى البرودكاست:** \ ${args}``).then(msg => {
    msg.react(':white_check_mark:')
    .then(() => msg.react(':x:'))
    .then(() =>msg.react(':white_check_mark:'))

    let reaction1Filter = (reaction, user) => reaction.emoji.name === ':white_check_mark:' && user.id === message.author.id;

    let reaction2Filter = (reaction, user) => reaction.emoji.name === ':x:' && user.id === message.author.id;

    let reaction1 = msg.createReactionCollector(reaction1Filter, { time: 12000 });
    let reaction2 = msg.createReactionCollector(reaction2Filter, { time: 12000 });
reaction1.on("collect", r => {
    message.channel.send(☑ | Done ... The Broadcast Message Has Been Sent For ${message.guild.members.size} Members).then(m => m.delete(5000));
    message.guild.members.forEach(m => {
    var bc = new
       Discord.RichEmbed()
       .setColor('RANDOM')
       .setTitle('Broadcast')
       .addField('Server', message.guild.name)
       .addField('Sender', message.author.username)
       .addField('Message', args)
       .setThumbnail(message.author.avatarURL)
       .setFooter(copy, client.user.avatarURL);
    m.send({ embed: bc })
    msg.delete();
    })
    })
    reaction2.on("collect", r => {
    message.channel.send(**Broadcast Canceled.**).then(m => m.delete(5000));
    msg.delete();
    })
    })
    }
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
