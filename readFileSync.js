//declaring a variable for fs module
var fs = require('fs');

//reading the input file and storing the data in the data variable
var data = fs.readFileSync('input.txt');

//printing the file data in the console
console.log(data.toString());

//end statement of the program
console.log('Program ended');





