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

str = Number(str2)
str3 = Number(str1)

console.log("Swappwed Value of First Input is " +str);
console.log("Swappwed Value of Second Input is " +str3);

});