const { Client, GatewayIntentBits, MessageCollector } = require('discord.js'); // npm package discord.js
const { token } = require('./config.json'); // JSON with the token
const fs = require('fs'); // npm package fs


const client = new Client({
    intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.DirectMessages, GatewayIntentBits.MessageContent]
});

// Message collector and generator
client.on('messageCreate', async interaction => {

    // We can see the available values of each message

    const username = interaction.author.username    // We save the author name of each message ( Lucas )
    const usernameID = interaction.author.discriminator // We save the author ID of each message ( #0000 )
    const message = interaction.content // We save the message of each message ( Hello Wold! )

    const date = new Date(); 

    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();

    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();

    fs.appendFile('.\archivos\LogsChat.txt', // Directory where is located the file with the log messages 
    `[ ${username} #${usernameID} ] : [ ${hours}:${minutes}:${seconds}   / ${day}/${month}/${year}  ]  ${message}`  + `\n`, function (err) { // Message of each logged message
        if (err) throw err;
        console.log('Updated!'); // Menssage that indicates that the log/message has been registered correctly
    });
});

// Log in to Discord with your client's token
client.login(token);




