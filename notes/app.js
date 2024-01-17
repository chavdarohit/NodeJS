//yargs npm package for doing the user input from cmd and using it like commands

let notes = require("./notes.js");

const yargs = require("yargs");

yargs.command({
  command: "readall",
  handler() {
    const allNotes = notes.getAllNotes();
    for (const ele of allNotes) {
      console.log(`Title = ${ele.title} and body = ${ele.body}`);
    }
  },
});

yargs.command({
  command: "read",
  builder: {
    title: {
      describe: "title",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    notes.readNotes(argv.title);
  },
});

yargs.command({
  command: "list",
  handler() {
    notes.listNotes();
  },
});

// console.log(yargs.argv);

yargs.command({
  command: "remove",
  builder: {
    title: {
      describe: "title",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    notes.removeNote(argv.title);
  },
});

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
  handler(argv) {
    notes.addNote(argv.title, argv.body);
  },
});

// console.log(yargs.argv);
yargs.parse();
