const Discord = require('discord.js');
const Events = require('./events');
const log = require('./utils/logger');
const config = require('../config.json');

const bot = new Discord.Client();
const events = new Events(bot);

log('info', 'Starting the bot...');

Promise.all([
  events.load(),
  bot.login(config.token),
]).then((status) => {
  log('success', 'Bot connected.');
  log('debug', status);
}).catch((error) => {
  log('error', error.message);
  process.exit(1);
});
