var fs = require('fs');

var myObject = {
name: "Rahul",
school: "galvanize",
color: "your favorite Blue",
};

fs.writeFile('myFile.txt', JSON.stringify(myObject, null, 2) , function(err){
  if(err){
    throw err;
  }
  console.log('File created!');
});
