//declaring fs function for the fs module
var fs = require('fs');

//read the input file & print the file content
fs.readFile('input.txt', function(err, data){
  if(err) return console.error(err);
  console.log(data.toString());
});

//printing the last line of the program
console.log('End of the program');
