import fs from "fs"

fs.writeFileSync("data.txt", "testing \n");

fs.appendFileSync("data.txt", "nanonanananan \n");

const result = fs.readFileSync("data.txt");
console.log(result);
console.log(result.toString());