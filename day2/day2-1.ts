var fs = require('fs');
let codes:number[]=fs.readFileSync('./input.txt','utf-8').split(',').map(function(item){
	return parseInt(item,10);
});
codes[1]=12;
codes[2]=2;
for(let i=0;i<codes.length;i+=4){
	switch(codes[i]){
		case 1:
			codes[codes[i+3]]=codes[codes[i+1]]+codes[codes[i+2]];
			break;
		case 2:
			codes[codes[i+3]]=codes[codes[i+1]]*codes[codes[i+2]];
			break;
		case 99:
			console.log(codes[0]);
			i=codes.length;
			break;
		default:
			throw new Error('unknown code '+codes[i].toString());
	};
}