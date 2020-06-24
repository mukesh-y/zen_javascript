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
var original_price = parseInt(data[0]);
var selling_price = parseInt(data[1]);



let discounted_perce = original_price - selling_price

console.log(discounted_perce)

});