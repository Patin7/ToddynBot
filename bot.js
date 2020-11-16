//exports
const {
 db2, moment, ms
} = require("./config/modulos.js")
//pra ficar on
var express = require('express');
var app = express();
const http = require('http');

app.get("/", (request, response) => {
  response.sendStatus(200); //reponde qdo recebe ping
  //console.log("fui pingado!");
});
app.listen(process.env.PORT);
//iniciando bot
const Discord = require("discord.js")
const config = require("./config/client/config.json")


const client = new Discord.Client();
//modulos
fs.readdir("./eventos/", (err, files) => {//eventos nas pastas
    if (err) return console.log(`evento mal executado, por causa do erro: ${err}`);

    files.forEach(file => {
        const evento = require(`./eventos/${file}`);//requerindo o eventos.
        let eventoNome = file.split(".")[0];
        console.log(`evento: ${eventoNome} carregados!`)
        client.on(eventoNome, evento.bind(null, client));//pegando o eventos.
    });
});

client.commands = new discord.Collection();
client.aliases = new discord.Collection();

["command"].forEach(handler => { 
  require(`./handlers/${handler}`)(client)
})

client.login(config.bot.token)
