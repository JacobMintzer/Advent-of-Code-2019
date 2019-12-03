var readline = require('readline');
var fs = require('fs');
function getFuelRequirements(mass) {
    var req = Math.floor(mass / 3) - 2;
    if (req >= 0) {
        return req + getFuelRequirements(req);
    }
    else {
        return 0;
    }
}
var total = 0;
var readInterface = readline.createInterface({
    input: fs.createReadStream('input')
});
readInterface.on('line', function (line) {
    total += getFuelRequirements(+line);
});
readInterface.on('close', function (line) {
    console.log(total);
});
