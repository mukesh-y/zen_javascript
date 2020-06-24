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

var str1 = parseInt(data[0]);
var str2 = parseInt(data[1]);
var str3 = parseInt(data[2]);

let addition = (str1+str2+str3)

console.log("Addition of Three Numbers " +addition);

});