var chalk = require('chalk');

var message = 'Hello ' + chalk.yellow('World ' + chalk.blue('Wow ') + chalk.red.bold('!!!!!!!! '));
console.log(message);