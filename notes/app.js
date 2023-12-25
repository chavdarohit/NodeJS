//yargs npm package for doing the user input from cmd and using it like commands

let notes = require('./notes.js');

const yargs = require("yargs");

yargs.command({
  command: "read",
  handler: function () {
    console.log("this is reading");
  },
});

yargs.command({
  command: "list",
  handler: function () {
    console.log("this is listing");
  },
});

console.log(yargs.argv);

yargs.command({
  command: "add",
  describe: "Adding a note",
  builder: {
    title: {
      describe: "title",
      demandOption: true,
      type: "string",
    },
    body: {
      describe: "this is body",
      demandOption: true,
      type: "string",
    },
  },
  handler: function (argv) {
    notes.addNote(argv.title,argv.body);
  },
});

// console.log(yargs.argv);
yargs.parse();
