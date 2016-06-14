var Discord = require('discord.js');

var request = require('request');

var bot = new Discord.Client({autoReconnect: true});


bot.on("message", function(message)
{
	var input = message.content.toLowerCase();
	
	if(input === "hi"){
		bot.sendMessage(message, "Hey there")
	}
	if(input === "night"){
		bot.sendMessage(message, "Goodnight")
	}
	if(input === "morning"){
		bot.sendMessage(message, "Good morning")
	}
	if(input === "yo"){
		bot.sendMessage(message, "o/")
	}
	if(input === "!faq acreos"){
		bot.sendMessage(message, "He's watching you!")
	}
	if(input === "!faq topic"){
		bot.sendMessage(message, "Can we please drop the topic and talk about something else?")
	}
	if(input === "!faq osu!"){
		bot.sendMessage(message, "osu! is a rythum game created and developed by peppy (Also known as Dean Herbert). you can check out the game at: http://osu.ppy.sh/")
	}
	if(input === "!server"){
		bot.sendMessage(message, "Name: " + message.channel.server.name + "\n" + "Region: " + message.channel.server.region + "\n" + "Number Of Members: " + message.channel.server.members.length + "\n" + "N. of Roles: " + message.channel.server.roles.length + "\n" + "Creator: " + message.channel.server.owner + "\n" + "Icon: " + message.channel.server.iconURL)
	}
	if(input === "cute"){
		bot.sendMessage(message, ">△<")
	}
	if(input === "!about"){
		bot.sendMessage(message, "I am a Bot created by Acreos, You can add me to your server using this link: \n https://discordapp.com/oauth2/authorize?&client_id=191672857103826944&scope=bot")
	}
});
	bot.on("ready", function() {
		console.log("Up and ready to go!")
});
	bot.on('serverNewMember', (server, user) => {
		bot.sendMessage(server.channels.get('name', 'general'), "Welcome " + user + " to osu!discord server!")
});
	bot.on('message', m => {
		if (m.content.startsWith("!game") && m.author.id === "159592526498496512" && m.author.id === "167978509795459072") {
			var game = m.content.split(' ');
			game.shift();
			game = game.join(' ');
        
			bot.setPlayingGame(game, err => {
				bot.sendReply(m, "Done! :thumbsup:");
			});
		}
});
	bot.on('message', m => {
		if (m.content.startsWith("!name") && m.author.id === "159592526498496512" && m.author.id === "167978509795459072") {
			var name = m.content.split(' ');
			name.shift();
			name = name.join(' ');
        
			bot.setUsername(name, err => {
				bot.sendReply(m, "Done :thumbsup:");
			});
		} 
});

	bot.on('message', msg => {
		if(msg.content.startsWith("!kick") && msg.mentions[0]) {
			bot.kickMember(msg.mentions[0], msg.channel.server)
			bot.deleteMessage(msg);
		}
	});

	bot.on('message', msg => {
		if(msg.content.startsWith("!ban") && msg.mentions[0]) {
			bot.banMember(msg.content.split(" ")[0], msg.channel.server)
			bot.deleteMessage(msg);
		}
	});
	bot.on("message", (msg) => {
		if (msg.channel.id != "191673385938321408" && msg.channel.name === "general") {
        bot.sendMessage("191673385938321408", "<@" + msg.author.id + ">" + " Sent a Message" + "\n" + "Content: " + msg.content);
	}
});



bot.login("inoribot1@gmail.com", "MTg3NjExMDI2NzY4Nzg5NTA0.CjCl4g.KJA7wwMD4Dy7JOo3VTHd4uXUwho");as 