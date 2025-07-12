const arg = process.argv[2];
const number = Int(arg);

if (isNaN(number)) {
  console.log("Not a number");
} else {
  console.log(`My number: ${number}`);
}
