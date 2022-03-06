var dataset = [2,2,4,2,6,4,7,8];
var search = 2;

var count = dataset.reduce(function(n, val) {
    return n + (val === search);
}, 0);

console.log(count);