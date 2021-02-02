const mysql = require("mysql");
const { conexaodb, userdb, senhadb, db } = require("../config.json")
module.exports.run = async (bot, message, args) => {
    let con = mysql.createConnection({
        host: conexaodb,
        user: userdb,
        password: senhadb,
        database: db
    })
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
    if(!message.member.hasPermission('ADMINISTRATOR')) return message.reply('🚫 SEM PERMISSÃO PARA USAR ESSE COMANDO, SEU CARGO É MUITO BAIXO!🚫')
con.connect(function(err) {
    if(err) {
        console.log('[MYSQL] error connect' + err.stack)
        return err;
    }
    var banned = '1'
    var id = args.join("")
    var sql = `UPDATE vrp_users SET banned = '${banned}' WHERE id = '${id}'`;
    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log (result.affectedRows + `to banned ID: ${id}`)
        return message.channel.send(
            `**O ID ${id} foi banido❌**`
        );
    }) 

})
} 
module.exports.help = {
    name: "ban"
}
