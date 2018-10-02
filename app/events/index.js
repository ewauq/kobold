const fs = require('fs');
const log = require('../utils/logger');

module.exports = class Events {
  constructor(bot) {
    this.bot = bot;
  }
  load() {
    return new Promise((resolve, reject) => {
      try {
        const files = fs.readdirSync(__dirname);
        files.splice(files.indexOf('index.js'), 1);
        files.forEach((file) => {
          log('verbose', `Importing event ${file}...`);
          require(`${__dirname}/${file}`)(this.bot);
          log('verbose', `${file} event imported.`);
        });
        resolve({ status: 'OK', message: 'Events successfully imported.' });
      } catch (error) {
        log('error', error);
        reject(error);
      }
    });
  }
};
