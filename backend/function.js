const fs = require('fs');

parseData = function() {
    fs.readFile('gdb.txt', 'utf8', (err, data) => {
        if(err) {
            console.error(err);
            return;
        }
        // console.log(data);
        var i, count=0;
        for(i=0; i<data.length; i++) {
            if(data[i]=='\n')
                count++;
       	    if(count==6)
                break;
        }
        data = data.substring(i+1, data.length);
        returnValue = [];
        midValue = [];
        currString = "";
	        for(i=0; i<data.length; i++) {
            if(data[i]!='\n') {
                currString = currString + data[i];
                continue;
            }
            if(currString.indexOf("step")!=-1) {
                returnValue.push(midValue);
		midValue = [];
            } else if(currString[0]>='0' && currString[0]<='9') {
                currString = "";
            } else {
//                console.log("Here");
                tempObject = parseStringToObject(currString);
                midValue.push(tempObject);
       	        // console.log(midValue);
            }
            currString = "";
        }
	        console.log(returnValue)
        console.log(typeof(returnValue));
        fs.writeFile('temp.txt', JSON.stringify(currString), function(err) {
            if(err)
                return console.log(err);
        });
    })
}
parseStringToObject = function(str) {
    lhs = str.substring(0, str.indexOf("=")-1);
    rhs = str.substring(str.indexOf("=")+1, str.length-1);
    // console.log(lhs + "\t" + rhs);
    let variables = {};
    variables.variable = lhs;
//    variables.value = removeExtraDigits(rhs);
    variables.value = rhs;
    return variables;
}

removeExtraDigits = function(str) {
    strTemp = "";
    for(var i=0; i<str.length; i++) {
       if((str[i]>='0' && str[i]<='9') || (str[i]>='a' && str[i]<='z') || (str[i]>='A' && str[i]<='Z') || str[i]=='\\')
            strTemp = strTemp+str[i];
    }
    return strTemp;
}

parseData();
