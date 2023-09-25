import fs from "fs";

const filePath = "data.txt";
const input = process.argv[2];
const word = process.argv.slice(3);

console.log(word)

if (input === 'w') {
    word.map ((index) => {
        fs.appendFileSync(filePath, index + "\n");
        console.log( index, "was written in", filePath);
    })
} else {
    console.log('invalid option')
}



