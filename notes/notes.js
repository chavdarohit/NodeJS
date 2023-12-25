const fs = require("fs");

const notes = function () {
  return "your notes...";
};
const addNote = function (title, body) {
  const notes = loadNotes();
  // console.log(notes);

  const dupli = notes.filter((note) => note.title === title);
  if (dupli.length === 0) {
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

const saveNotes = function (notes) {
  const dataJSon = JSON.stringify(notes);
  fs.writeFileSync("notes.json", dataJSon);
};

const loadNotes = function () {
  try {
    const databuffer = fs.readFileSync("notes.json");
    return (dataJSON = JSON.parse(databuffer.toString()));
  } catch (e) {
    return [];
  }
};

module.exports = {
  getNote: notes,
  addNote: addNote,
};
