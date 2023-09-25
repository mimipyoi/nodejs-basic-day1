import fs from "fs";

const filePath = "data.txt";

const option = process.argv[2];
const input = process.argv[3];

if (option === "w") {
  fs.appendFileSync(filePath, input + "\n");
  console.log("appended:", input);
} else if (option === "r") {
  const read = fs.readFileSync("data.txt");
  console.log(read.toString())
} else if (option === "c") {
  fs.writeFileSync("data.txt", '');
} else if (option === "d") {
  const read = fs.readFileSync("data.txt");
  fs.appendFileSync("data.txt", read + "\n");
  console.log('duplicate complete')
}else {
  console.log("invalid option");
}
