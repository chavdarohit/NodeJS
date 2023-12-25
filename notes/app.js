//yargs npm package for doing the user input from cmd and using it like commands

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
    console.log("Title " + argv.title);
    console.log("Body " + argv.body);
  },
});

// console.log(yargs.argv);
yargs.parse();
