const Discord = require('discord.js');
const bot = new Discord.Client();
var Gcount = 0
const prefix = 'w!'
const list = ['Warriors\' Server', 'détruit par les Warriors⚔']

bot.on('ready', () => {
	bot.guilds.forEach(guild => {
		Gcount++
	});
	bot.user.setActivity(`${Gcount} serveurs | ${prefix}help`, { type: 'WATCHING' });
});

bot.on('message', msg => {
	
	if(msg.channel.name === '🚪porte-inter-serveur🚪'){
		var date = msg.createdAt.toString().split(" ");
		var heure = date[4].split(":")
		var mess = new Discord.RichEmbed()
			.setColor('#ff0000')
			.setAuthor(`serveur : ${msg.guild.name}`, `${msg.guild.iconURL}`)
			.setTitle(`MESSAGE DE ${msg.author.tag}`)
			.setThumbnail(`${msg.author.avatarURL}`)
			.setFooter(`${date[0]} ${date[1]} ${date[2]} ${date[3]} ${heure[0]}:${heure[1]}`)
			.addField("message :", `${msg.content}`)
		for (var i = 1; i >= 0; i--) {
		 const g = bot.guilds.find(gu => gu.name === list[i]).channels.find(ch => ch.name === '🚪porte-inter-serveur🚪');
		 g.sendEmbed(mess);
		}
	}
	
	if (msg.content === prefix + 'help'){
		msg.reply('désolé mais y a encore rien sur ce bot il est en phase de développement, de test et d\'amélioration... faudra essayer une autre fois :/');
	}
	
	if (msg.content === 'oui' && msg.member.hasPermission(8192)){
		msg.reply('yup');
	}
	
});

bot.login(process.env.TOKEN);
