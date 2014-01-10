#!/usr/bin/env node
var fs = require('fs'),
		q  = require('q');

var args = process.argv.splice(2),
		usage = 'Usage: csv2json [# of columns] [input file] [output file]';

if(args.length === 0) {
	console.log(usage);
	return;
}

if(args.length < 2) {
  console.error('invalid arguments');
	console.log(usage);
	return;
}

 var columns = parseInt(args[0],10),
     input = args[1],
		 output = args[2];

fs.exists(input,function(exists) {
	if(!exists) {
		throw new Error('Input file not found');
	}

	fs.readFile(input,function(err,data) {
			if(err) throw err;
			data = data.toString().replace('\n','').split(',');
			
			var columnData = data.splice(columns),
			    columnHeaders = data;
			
			var numberOfRows = columnData.length / columns;
			var splitData = [];

			for(var i=0; i < numberOfRows;i++) {
				var t = columnData.splice(columns);
				splitData[i] = columnData;
				columnData = t;
			}

			var d = {}
			for(i=0; i < numberOfRows;i++) {
				d[i] = {};
				for(var j =0; j<numberOfRows;j++) {
					d[i][columnHeaders[j]] = splitData[i][j];
				}
			}

			fs.writeFile(output,JSON.stringify(d,null,2),function(err){
				if(err) throw err;
				console.log('Written to ' + output);
			});
	});
});
