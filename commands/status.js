const cheerio = require("cheerio"); // npm install cheerio
const Discord = require("discord.js"); // npm install discord.js
const rp = require("request-promise"); // npm i request-promise

const URL = "https://www.trackyserver.com/server/607078";
module.exports.run = async (bot, message, args) => {
    const headerObj = {
        uri: URL
    };
// PRODUTO FEITO PELA DRAGON RESOURCES ( NÃO É PERMITIDO VENDA DESTE BOT! )
//                    DRAGON RESOURCES © 2021    
//       🐉🐉🐉🐉🐉                🐉🐉🐉🐉🐉🐉
//       🐉          🐉              🐉           🐉
//       🐉    🐉🐉   🐉            🐉  🐉🐉🐉    🐉
//       🐉    🐉   🐉   🐉         🐉  🐉     🐉    🐉
//       🐉    🐉    🐉    🐉       🐉  🐉🐉🐉        🐉    
//       🐉    🐉     🐉     🐉     🐉          🐉🐉🐉       
//       🐉    🐉    🐉     🐉      🐉   🐉      🐉           
//       🐉    🐉 🐉     🐉         🐉   🐉 🐉     🐉        
//       🐉            🐉            🐉   🐉   🐉     🐉      
//       🐉          🐉              🐉   🐉      🐉   🐉           
//       🐉🐉🐉🐉🐉                 🐉🐉🐉        🐉🐉🐉  
    rp(headerObj)
        .then(html => {
            var $ = cheerio.load(html);

            const players = $("#general > table > tbody > tr:nth-child(5) > td:nth-child(2) > strong").text()
            const status = $("#general > table > tbody > tr:nth-child(4) > td:nth-child(2)").text()
            const embed = new Discord.RichEmbed()
                .setTitle("Servidor Status")
                .addField(`🕴Total de Moradores(as) Na Cidade Agora` ,`${players}🕴`,true)
                .addField(`🌇Status Da Cidade🌇`,`${status}`,true)
                .setColor("#0000FF")
                .setThumbnail("https://irp-cdn.multiscreensite.com/067a1513/dms3rep/multi/vis%C3%A3ogeo-mapeamento-de-terra-com-imagens-de-sat%C3%A9lite.jpg")// ENTRE AS ASPAS COLOQUE A LOGO SO SEU SERVIDOR OU QUALQUER OUTRA COISA!
                .setTimestamp()
                .setFooter(`Comando solicitado por: ${message.author.tag}`,`${message.author.avatarURL}`)
                message.channel.send(embed)
        })
}
module.exports.help = {
    name: "status"
}
