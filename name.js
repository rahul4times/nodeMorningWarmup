var fs = require('fs');
fs.readFile('myFile.txt', 'utf8', function(err, data){
  var myData = JSON.parse(data);
  console.log(myData.name);
});
