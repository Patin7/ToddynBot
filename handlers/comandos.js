const { readdirSync } = require("fs");

const ascii = require("ascii-table");
let table = new ascii("Comandos");

table.setHeading("Nome", "status");

module.exports = (bot) => {

    readdirSync("./comandos/").forEach(dir => {
        const commands = readdirSync(`./comandos/${dir}/`).filter(file => file.endsWith(".js"));
    
        for (let file of commands) {
            let pull = require(`../comandos/${dir}/${file}`);
    
            if (pull.name) {
                bot.commands.set(pull.name, pull);
                table.addRow(file, '✅');
            } else {
                table.addRow(file, `❌  -> falta um help.name ou help.name não é uma string.`);
                continue;
            }
    
            
            if (pull.aliases && Array.isArray(pull.aliases)) pull.aliases.forEach(alias => bot.aliases.set(alias, pull.name));
        }
    });

    console.log(table.toString());
}
