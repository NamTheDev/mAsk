require('dotenv').config()
const { CommandClient } = require("eris");
const { join } = require("path");
const config = require('./config');

const client = new CommandClient(config.token, {
    intents: ['all']
}, {
    defaultHelpCommand: true,
    ignoreBots: true,
    ignoreSelf: true,
    name: config.bot.name,
    description: config.helpDescription,
    owner: config.owner.name,
    prefix: config.bot.prefix
})

client.config = config
module.exports = client
require(join(process.cwd(), 'handlers', 'index'))

client.connect()