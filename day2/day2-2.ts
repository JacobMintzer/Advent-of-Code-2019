var fs = require('fs');



function getBase(noun:number,verb:number,orig:number[]){
	let codes=orig;
	codes[1]=noun;
	codes[2]=verb;
	for(let i=0;i<codes.length;i+=4){
		switch(codes[i]){
			case 1:
				codes[codes[i+3]]=codes[codes[i+1]]+codes[codes[i+2]];
				break;
			case 2:
				codes[codes[i+3]]=codes[codes[i+1]]*codes[codes[i+2]];
				break;
			case 99:
				if(codes[0]==19690720){
					console.log(noun.toString()+" "+verb.toString());
				}
				return;
			default:
				return;
		};
	}
}
function loop(original:number[]){
	for (let i=0;i<=9999;i++){
		let codes=original.slice(0);
		getBase((i-i%100)/100,i%100,codes);
	}
}
let orig:number[]=fs.readFileSync('./input.txt','utf-8').split(',').map(function(item){
	return parseInt(item,10);
});
loop(orig);