const log = require('../utils/logger');

module.exports = (bot) => {
  bot.on('ready', () => {
    log('success', 'Bot ready.');
  });
};
