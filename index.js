const { MessageEmbed, Client, Message } = require("discord.js");
const client = new Client();
const prefix = "+";
const fetch = require("node-fetch");
const { get } = require('axios');
const moment = require('moment');
const disbut = require('discord-buttons')(client);
const { MessageButton } = require('discord-buttons');


client.on('ready', function() {
	console.log("Prêt à être utiliser à 100%.")
	setInterval(async () => {
		try {
			//--------STATUS INFOS--------//
			const statuslist = [
				`${prefix}help | ${client.guilds.size} serveurs`,
				`${prefix}help | ${client.channels.size} channels`,
				`${prefix}help | ${client.users.size} utilisateurs`
			];
			const random = Math.floor(Math.random() * statuslist.length);
			//------STATUS URL TWITCH------//
			const statusurl = [
				`https://www.twitch.tv/oldmodz95off`
			];
			const randomurl = Math.floor(Math.random() * statusurl.length);
			client.user.setPresence({ game: { name: statuslist[random]}, status: 'online' })
		} catch (error) {
			(console.log)
		};
	}, 10000);
});

client.on('message', async function(message) {
	////////-------////////
	//--A NE PAS TOUCHER-//
	////////-------////////
	if(message.author.bot) return;
	if(message.channel.type === "dm") return;
	////////////////////
	////////////////////
	if (!message.content.startsWith(prefix)) return;

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////


	if(message.content.startsWith(prefix + "help")){
		message.delete(message.author);
		let embed_hhwid = new MessageEmbed()
			.setColor('random')
			.setTitle(`Base Bot By OldModz95`)
			.setImage("https://media.discordapp.net/attachments/755487927588618274/756826026557964328/bannergif.gif")
			.setDescription(`Coding Bot Discord Tool By OldModz95\nhttps://discord.gg/3t2568W`)
			.setTimestamp()
			.setFooter(`Demander par ${message.author.tag}`)
		message.channel.send(embed_hhwid);
	}
//////////////////////////////////////////////////////////////////////
	if(message.content.startsWith(prefix + "avatar")){
		message.delete(message.author);
		const mentionned = message.mentions.users.first() || message.author;
		const avatarEmbed = new MessageEmbed()
			.setTitle(`Avatar of **${mentionned.username}**`)
			.setColor("RANDOM")
			.setImage(mentionned.displayAvatarURL({ dynamic: true, size: 512 }));
		message.channel.send(avatarEmbed);
	}
//////////////////////////////////////////////    

	if (message.content.startsWith(prefix + 'url')) {
        message.delete(message.author);

		let btn = new disbut.MessageButton()
		.setStyle('url')
		.setLabel('Discord Button Link NPM')
		.setURL('https://npmjs.com/discord-button')
		.setID('clickto');

        await message.channel.send(`Button Discord Link`, btn);
	}


	if (message.content.startsWith(prefix + 'click')) {
        message.delete(message.author);
		let btn3 = new disbut.MessageButton()
		.setStyle('red')
		.setLabel('Button Red')
		.setID('click');

		let btn2 = new disbut.MessageButton()
		.setStyle('green')
		.setLabel('Discord Button')
		.setID('clickwo');

		await message.channel.send(`https://discord.gg/3t2568W`, {
			 buttons: [
			   btn2, btn3
			 ]
		});
	}

})//

client.login("724484161762754701");
