import fs from 'fs'

const args = process.argv;
const word = args.slice(2);

fs.writeFileSync("data.txt", '');

word.map ((index) => {
    console.log(`${index}`);
    fs.appendFileSync("data.txt", `${index.toString()} \n`);
})

/* console.log(`${word}`);
fs.writeFileSync("data.txt", `${word}`); */
