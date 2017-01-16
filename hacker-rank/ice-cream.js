var fs = require('fs');

var chooseOptions = function(c) {
    var option1, option2;

    var N = c.options.length
    for(var i = 0; i < N; i++) {
        option1 = c.options[i];
        for(var j = i+1; j < N; j++) {
            option2 = c.options[j];

            if((option1 + option2) === c.money) {
                return [i+1, j+1].sort();
            }
        }
    }
};

var main = function(cases) {
    cases.forEach(function(c) {
       var options = chooseOptions(c);
        console.log(options.join(' '));
    });
};

var processData = function(inputs) {
    var lines = inputs.split('\n');
    var cases = [];

    console.log(lines);
    for(var i = 3; i < lines.length; i += 3) {
        cases.push({
            money: Number.parseInt(lines[i-2]),
            options: lines[i].split(' ').map(function(n) { return Number.parseInt(n); })
        });
    }
    return main(cases);
}

var data = fs.readFileSync('ice-cream-test-case.js');
processData(data.toString());

// process.stdin.resume();
// process.stdin.setEncoding("ascii");
// _input = "";
// process.stdin.on("data", function (input) {
//     _input += input;
// });
//
// process.stdin.on("end", function () {
//    processData(_input);
// });
