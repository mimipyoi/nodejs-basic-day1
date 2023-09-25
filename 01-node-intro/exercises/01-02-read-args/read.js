import fs from 'fs'

const read = fs.readFileSync("data.txt");

console.log(`${read.toString()}`)