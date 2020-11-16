const moment = require("moment");
const ms = require('ms')
const low = require('lowdb') //banco de dados
const FileSync = require('lowdb/adapters/FileSync')
const adapter = new FileSync('./config/client/database.json')
const db = low(adapter)

exports.ms = ms
exports.db = db
exports.moment = moment
