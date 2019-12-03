const readline = require('readline');
const fs = require('fs');
function getFuelRequirements(mass:number){
	let req= Math.floor(mass/3)-2;
	//console.log(req);
	return req;
}

let total:number=0;
const readInterface=readline.createInterface({
	input: fs.createReadStream('input')
});
readInterface.on('line',function(line:number){
	total+=getFuelRequirements(+line);
});
readInterface.on('close',function(line){
	console.log(total);
});