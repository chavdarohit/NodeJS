const { default: chalk } = require("chalk");
const fs = require("fs");

const getAllNotes = () => loadNotes();

const listNotes = () => {
  const notes = loadNotes();

  const titles = notes.map((doc) => doc.title);
  console.log(chalk.bgGreen("Your Notes"));
  // console.log(...titles);

  for (let [index, title] of titles.entries()) {
    console.log(`${index + 1} is ${title}`);
  }
};

const addNote = (title, body) => {
  const notes = loadNotes();
  // console.log(notes);

  const dupli = notes.find((note) => note.title === title);
  if (!dupli) {
    notes.push({
      title: title,
      body: body,
    });

    saveNotes(notes);
    console.log("New notes added");
  } else {
    console.log("Note title taken");
  }
};

const removeNote = (title) => {
  const notes = loadNotes();

  const findtitle = notes.find((note) => note.title === title);
  if (findtitle) {
    const newArray = notes.filter((note) => note.title != title);
    saveNotes(newArray);
    console.log(chalk.bgGreen("Note deleted Succesfully"));
  } else {
    console.log(chalk.bgRed("Note not found"));
  }
};

const readNotes = (title)=>{

const notes= loadNotes()
  const found = notes.find(doc => doc.title === title)

  if(!found)
    console.log(chalk.red.inverse("No data found"));
  else
      console.log(`Title = ${chalk.inverse(found.title)} and body = ${found.body}`);
    
}

const saveNotes = (notes) => {
  const dataJSon = JSON.stringify(notes);
  fs.writeFileSync("notes.json", dataJSon);
};

const loadNotes = () => {
  try {
    const databuffer = fs.readFileSync("notes.json");
    return (dataJSON = JSON.parse(databuffer.toString()));
  } catch (e) {
    return [];
  }
};

module.exports = {
  getAllNotes,
  addNote,
  removeNote,
  listNotes,
  readNotes,
};
