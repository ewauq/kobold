const log = require('../utils/logger');

module.exports = (bot) => {
  bot.on('message', (message) => {
    // Logging messages and sent files
    if (message.attachments.array().length) {
      log(`📄 <${message.author.username}> File sent: <${message.attachments.first().filename}>`);
    } else {
      log(`💬 <${message.author.username}> ${message}`);
    }
  });
};
