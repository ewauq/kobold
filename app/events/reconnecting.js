const log = require('../utils/logger');

module.exports = (bot) => {
  bot.on('reconnecting', () => {
    log('info', 'Reconnecting.');
  });
};
