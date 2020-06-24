const readline = require('readline');
const inp = readline.createInterface({
  input: process.stdin
});
const userInput = [];
inp.on("line", (data) => {
 userInput.push(data);
});
inp.on("close", () => {
var data = userInput[0].split(" ");

var x = parseInt(data[0]);
var y = parseInt(data[1]);

let power = x^y

console.log(power) ;
});