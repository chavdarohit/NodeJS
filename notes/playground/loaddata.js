const fs = require('fs');

const person = JSON.parse(fs.readFileSync('data.json'.toString()));
person.name="mayank";
person.age=25;
person.surname="sharma";
console.log(person);

fs.writeFileSync('data.json',JSON.stringify(person));