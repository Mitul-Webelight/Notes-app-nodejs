// const sum = require('./utils');

// console.log(sum);

// const getNotes = require('./notes');

// console.log(getNotes);

// const chalk = require('chalk');

// const msg = chalk.blue('This is message.');
// console.log(msg);

// console.log(process.argv);

// const command = process.argv[2];

// if (command === 'add') {
//   console.log(chalk.yellow('Adding notes!'));
// } else if (command === 'remove') {
//   console.log(chalk.red('Removing notes!'));
// }

const yargs = require('yargs');

yargs.command({
  command: 'add',
  describe: 'Add a note',
  builder: {
    title: {
      describr: 'Note title',
      demandOption: true,
      type: 'string',
    },
    body: {
      describe: 'Note body',
      demandOption: true,
      type: 'string',
    },
  },
  handler: function (argv) {
    console.log('Title: ' + argv.title);
    console.log('Body: ' + argv.body);
  },
});
               
yargs.command({
  command: 'remove',
  describe: 'Remove a note',
  handler: function () {
    console.log('Removing a note!');
  },
});

yargs.command({
  command: 'list',
  describe: 'List your notes',
  handler: function () {
    console.log('Listing your notes!');
  },
});

yargs.command({
  command: 'read',
  describe: 'Read a note',
  handler: function () {
    console.log('Reading a note!');
  },
});

// console.log(yargs.argv);
yargs.parse();
