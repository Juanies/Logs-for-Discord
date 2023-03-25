const { Client, GatewayIntentBits, MessageCollector } = require('discord.js');
const { token } = require('./config.json');
const fs = require('fs');

const client = new Client({
    intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.DirectMessages, GatewayIntentBits.MessageContent]
});


client.on('messageCreate', async interaction => {
    console.log(interaction)

    const username = interaction.author.username
    const usernameID = interaction.author.discriminator
    const message = interaction.content

    fs.appendFile('.\archivos\LogsChat.txt',  
    `[ ${username} #${usernameID} ]  ${message}`  + `\n`, function (err) {
        if (err) throw err;
        console.log('Updated!');
    });
});

// Log in to Discord with your client's token
client.login(token);