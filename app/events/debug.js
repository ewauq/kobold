const log = require('../utils/logger');

const env = process.env.NODE_ENV;

module.exports = (bot) => {
  bot.on('debug', (info) => {
    if (env === 'dev') log('debug', info);
  });
};
