


var readlineSync = require('readline-sync');


let num1 = readlineSync.question('Please enter your first number: ');
let num2 = readlineSync.question('Please enter your second number: ');
const operations = ["ADD", "SUB", "MUL", "DIV"];
const selectOperation = readlineSync.keyInSelect(operations, "What operation would you like to perform?");

function addition (num1,num2) {
console.log('The result is: ' + (Number(num1) + Number(num2)) +'!');
}
function subtraction (num1,num2) {
console.log('The result is: ' + (Number(num1) - Number(num2)) +'!');
}
function multiplication (num1,num2) {
console.log('The result is: ' + (num1) * (num2) +'!');
}
function divison (num1,num2) {
console.log('The result is: ' + (num1) / (num2) +'!');
}

if(selectOperation === 0) {
    addition(num1,num2);
}
else if(selectOperation === 1) {
    subtraction(num1,num2);
}
else if(selectOperation === 2) {
    multiplication(num1,num2);
}
else if(selectOperation === 3) {
    divison(num1,num2);
}



