const TextFinder = require("./text-finder");
const textFinder = new TextFinder(/hello \w+/);

textFinder.addFile('./files/fileA.txt')
    .addFile('./files/fileB.json')
    .find()
    .on('found', (file, match) => console.log(`Matched "${match}" in file ${file}`))
    .on('error', err => console.log(`Error emitted ${err.message}`));