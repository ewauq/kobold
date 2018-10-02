const log = require('../utils/logger');

module.exports = (bot) => {
  bot.on('error', (error) => {
    log('error', error);
  });
};
