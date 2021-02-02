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
con.connect(function(err) {
    if(err) {
        console.log('[MYSQL] error connect' + err.stack)
        return err;
    }
    var whitelisted = '1'
    var id = args.join("")
    var sql = `UPDATE vrp_users SET whitelisted = '${whitelisted}' WHERE id = '${id}'`;
    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log (result.affectedRows + `to whitelisted ID: ${id}`)
        return message.channel.send(
            `**Parabéns Você Teve Seu Passaporte Aceito na Cidade✔.O seu Passaporte é ${id}💳**`
        );
    }) 
})
} 
module.exports.help = {
    name: "liberar"
}
