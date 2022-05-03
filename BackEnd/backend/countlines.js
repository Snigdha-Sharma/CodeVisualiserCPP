const { timeStamp } = require('console');
const fs = require('fs')

fs.readFile('temp.cpp', 'utf8' , (err, data) => {
  if (err) {
    console.error(err)
    return
  }
  var counter = 0;
  for(var i=0; i<data.length; i++) {
      if(data[i]=='\n')
        counter++;
  }
  console.log(counter);
  console.log(data);
})