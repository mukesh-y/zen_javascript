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

var score1 = parseInt(data[0]);
var score2 = parseInt(data[1]);
var score3 = parseInt(data[2]);
var score4 = parseInt(data[3]);
var score5 = parseInt(data[4]);

let allscores = score1+score2+score3+score4+score5

let average = allscores / 5

console.log("The average Test Score  is  "+average) ;
});