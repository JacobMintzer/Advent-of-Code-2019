const fs = require('fs');

interface coords{
    x:number,
    y:Array<number>
};
class Board{
    locations:{};
    curLoc:[number,number]=[0,0];
    collisions:[number,number][]=[];
    Add(instruction:string){
        let dir=instruction.charAt(0);
        let magnitude=parseInt(instruction.substr(1))
            for (let i=0;i<Math.abs(magnitude);i++){
                if (dir=='L'){
                    this.curLoc[0]-=1;
                }
                else if(dir=='R'){
                    this.curLoc[0]+=1;
                }
                else if(dir=='U'){
                    this.curLoc[1]+=1;
                }
                else{
                    this.curLoc[1]-=1;
                }
                if (this.locations.hasOwnProperty(this.curLoc[0])){
                    if (this.curLoc[1] in this.locations[this.curLoc[0]]){
                        this.collisions.push(this.curLoc);
                    }   
                    else{
                        this.locations[this.curLoc[0]].push(this.curLoc[1]);
                    }
                }
                else{
                    this.locations[this.curLoc[0]]=[this.curLoc[1]];
                }
                
            }
        };
    };
};

let codes:string[]=fs.readFileSync('./input.txt','utf-8').split('\n');
codes.forEach(function(instructionSet){
    let board=new Board();
    let instructions=instructionSet.split(',');
    instructions.forEach(board.Add,board);
    let minimum=-1;
    board.collisions.forEach(function(collision){
        let distance=Math.sqrt(collision[0]*collision[0]+collision[1]*collision[1]);
        if (minimum==-1||distance<minimum){
            minimum=distance;
        }
    });
    console.log(minimum);
    
});