const Discord = require('discord.js');
const client = new Discord.Client();
client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'zg') {
        message.reply('pong');
      }
});

client.on('ready', async() => {
var server = "527911586023735593"; // ايدي السررفر
var channel = "527911586023735597";//ايدي الروم
    setInterval(()=>{
    client.guilds.get(server).channels.get(channel).send('**<@304626622902960128> <@525267206884556800> كسم دين امكو يا لباوي  **')
    },305);
})

client.on('ready', async() => {
var server = "527911586023735593"; // ايدي السررفر
var channel = "527911586023735597";//ايدي الروم
    setInterval(()=>{
    client.guilds.get(server).channels.get(channel).send('**<@304626622902960128> <@525267206884556800> كسم دين امكو يا لباوي  **')
    },86400);
})

client.login(process.env.BOT_TOKEN);
const client2 = new Discord.Client();
client2.on('ready', () => {
    console.log('I am ready!');
});

client2.on('message', message => {
    if (message.content === 'zg') {
        message.reply('pong');
      }
});

client2.on('ready', async() => {
var server = "527911586023735593"; // ايدي السررفر
var channel = "527911586023735597";//ايدي الروم
    setInterval(()=>{
    client2.guilds.get(server).channels.get(channel).send('**كودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودز **')
    },305);
})

client2.on('ready', async() => {
var server = "527911586023735593"; // ايدي السررفر
var channel = "527911586023735597";//ايدي الروم
    setInterval(()=>{
    client2.guilds.get(server).channels.get(channel).send('#daily')
    },86400);
})

client2.login(process.env.BOT_TOKEN2);
