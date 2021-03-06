const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const jsonParser = bodyParser.json()
const urlencodedParser = bodyParser.urlencoded({extended: false})
const fs = require('fs');

app.use(function(req, res, next) {
   res.header("Access-Control-Allow-Origin", "*");
   res.header('Access-Control-Allow-Methods', 'DELETE, PUT');
   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
   if ('OPTIONS' == req.method) {
      res.sendStatus(200);
    }
    else {
      next();
    }});

app.get('/', (req, res) => {
	var cmd_output = '';
	var cp = commandLine("gdb -ex 'source functions.gdb' -ex start -ex step_mult -ex qquit ./temp", function(err, data) {
	// var cp = commandLine("whoami", function(err, data) {
		console.log('Callback Called');
		if(err) {
			console.log(err);
		}
		cmd_output = Buffer.from(data).toString('utf8');
	})

	cp.on('close', function() {
		console.log("Closed");
		res.send(parseData(cmd_output));
	// res.send(cmd_output);
	});

});

app.post('/', jsonParser, (req, res) => {
	console.log(req.body.a);
//	res.send("Temp Exit");
	fs.writeFile('temp.cpp', req.body.a, function(err) {
		if(err)
			return console.log(err);
	});
	var compileFile = commandLine("g++ -g temp.cpp -o temp", function(err, data) {
		console.log("Compiler Called");
		if(err) {
			console.log(err);
		}
//		cmd_output = Buffer.from(data).toString('utf8');
	})
	compileFile.on('close', function() {
		console.log("Compilation Complete");
	})
	res.send("Hello World");
});

commandLine = function(command, callback) {
	var exec = require('child_process').exec;
	var child_process = exec(command, function(err, stdout, stderr) {
		if(err && err.length>1) {
			console.log("failed to find playback");
			callback(error("InternalError", "na", 500));
			return;
		} else {
			if(stdout) {
				callback(null, stdout);
			}
			if(stderr) {
				callback(new Error("STDERR"), stderr);
			}
		}
	});
	return child_process;
};


app.listen(3001, () => {
	console.log('Listening to 3001');
});

parseData = function(data) {
//        console.log(data);
        var i, count=0;
        for(i=0; i<data.length; i++) {
            if(data[i]=='\n')
                count++;
       	    if(count==21)
                break;
        }
        data = data.substring(i+1, data.length);
//	console.log(data);
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
//       	        console.log(midValue);
            }
            currString = "";
        }
//        console.log(JSON.stringify(returnValue))
        //console.log(typeof(returnValue));
	returnValue = returnValue.slice(1, returnValue.length);
        fs.writeFile('temp.txt', JSON.stringify(returnValue), function(err) {
            if(err)
                return console.log(err);
        });
	return JSON.stringify(returnValue);
}
parseStringToObject = function(str) {
    lhs = str.substring(0, str.indexOf("=")-1);
    rhs = str.substring(str.indexOf("=")+1, str.length-1);
//    console.log(lhs + "\t" + rhs);
    let variables = {};
    variables.variable = lhs;
    variables.value = removeExtraDigits(rhs);
//    variables.value = rhs;
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

//parseData();
