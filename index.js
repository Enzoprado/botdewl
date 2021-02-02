const cheerio = require('cheerio');
const Discord = require("discord.js")
const rp = require('request-promise');
const config = require("./config.json");
const bot = new Discord.Client();
const fs = require('fs')



bot.commands = new Discord.Collection();

fs.readdir("./commands/", (err, files) => {
    if (err) console.error(err);

    let arquivojs = files.filter(f => f.split(".").pop() == "js");
    arquivojs.forEach((f, i) => {
        let props = require(`./commands/${f}`);
        console.log(`O comando ${f} foi carregado com Sucessoo.`)
        bot.commands.set(props.help.name, props);
    });
});


        bot.on("ready", () => {
            console.log(`bot foi iniciado, com ${bot.users.size} usuários, em ${bot.channels.size} canais, em ${bot.guilds.size} servidores.`);
            bot.user.setPresence({

                game: {
                    name: '𝗗𝗿𝗮𝗴𝗼𝗻 𝗥𝗲𝘀𝗼𝘂𝗿𝗰𝗲𝘀 - https://discord.gg/djC5Kf9 A Melhor Loja Para Compra De Bases , Resources e Bots Para FiveM',
                    type: 0
                }
            });
        });

bot.on("message", async message => {

    if (message.channel.type === "dm") return;

    let prefix = config.prefix;
    let messageArray = message.content.split(" ");
    let command = messageArray[0].toLowerCase();
    let args = messageArray.slice(1);

    if (!command.startsWith(prefix)) return;

    let cmd = bot.commands.get(command.slice(prefix.length));
    if (cmd) cmd.run(bot, message, args);

});

bot.login(config.token); 