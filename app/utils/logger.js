const chalk = require('chalk');
const dateFormat = require('dateformat');
const config = require('../../config.json');

const env = process.env.NODE_ENV;

function getTime() {
  return dateFormat(new Date(), 'dd-mm-yyyy hh:MM:ss');
}

function log(type, ...messages) {
  /* eslint-disable no-console */
  switch (type) {
    case 'info':
      messages.forEach(message => console.log(`[${getTime()}]`, '[info]', chalk.blue(message)));
      break;
    case 'verbose':
      if (env === 'production' || !config.verbose) return;
      messages.forEach(message => console.log(`[${getTime()}]`, '[verbose]', chalk.grey(message)));
      break;
    case 'error':
      messages.forEach(message => console.log(`[${getTime()}]`, '[error]', chalk.red(message)));
      break;
    case 'success':
      messages.forEach(message => console.log(`[${getTime()}]`, '[success]', chalk.green(message)));
      break;
    case 'warning':
      messages.forEach(message => console.log(`[${getTime()}]`, '[warning]', chalk.yellow(message)));
      break;
    case 'debug':
      if (env === 'production' || !config.debug) return;

      messages.forEach((message) => {
        if (typeof (message) === 'object') {
          console.log(`[${getTime()}]`, '[debug]', `Object => length:${Object.keys(message).length}`);
          console.log(chalk.grey('------------------------------------------------------------------------------------'));
          console.dir(message, { depth: 5 });
          console.log(chalk.grey('------------------------------------------------------------------------------------'));
        } else {
          console.log(`[${getTime()}]`, '[debug]', chalk.grey(message));
        }
      });

      break;
    default:
      if (messages.length === 0) {
        console.log(`[${getTime()}]`, type); // When just one parameter is given to log(), 'type' is the message.
      } else {
        console.log(`[${getTime()}]`, type); // First parameter first
        messages.forEach(message => console.log(`[${getTime()}]`, message)); // and then the others
      }
      break;
  }
  /* eslint-enable no-console */
}

module.exports = log;
