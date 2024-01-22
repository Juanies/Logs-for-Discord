const { Client, GatewayIntentBits, MessageCollector } = require('discord.js'); 
const { token } = require('./config.json'); 
const fs = require('fs'); 

//  DISCORD BOT LOG 

const client = new Client({
    intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.DirectMessages, GatewayIntentBits.MessageContent]
});

client.on('messageCreate', async interaction => {


    const username = interaction.author.username   
    const usernameID = interaction.author.discriminator 
    const message = interaction.content 

    const date = new Date(); 

    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();

    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();

    fs.appendFile('.\archivos\LogsChat.txt', 
    `[ ${username} #${usernameID} ] : [ ${hours}:${minutes}:${seconds}   / ${day}/${month}/${year}  ]  ${message}`  + `\n`, function (err) { 
        if (err) throw err;
        console.log('Updated!'); 
    });
});

client.login(token);




