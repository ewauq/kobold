const log = require('../utils/logger');

module.exports = (bot) => {
  bot.on('disconnect', (event) => {
    log('info', `Disconnecting... ${event}`);
  });
};
