function zero(a) { return a == undefined ? '0' : Math.floor(eval('0'.concat(a))) }
function one(a) { return a == undefined ? '1' : Math.floor(eval('1'.concat(a))) }
function two(a) { return a == undefined ? '2' : Math.floor(eval('2'.concat(a))) }
function three(a) { return a == undefined ? '3' : Math.floor(eval('3'.concat(a))) }
function four(a) { return a == undefined ? '4' : Math.floor(eval('4'.concat(a))) }
function five(a) { return a == undefined ? '5' : Math.floor(eval('5'.concat(a))) }
function six(a) { return a == undefined ? '6' : Math.floor(eval('6'.concat(a))) }
function seven(a) { return a == undefined ? '7' : Math.floor(eval('7'.concat(a))) }
function eight(a) { return a == undefined ? '8' : Math.floor(eval('8'.concat(a))) }
function nine(a) { return a == undefined ? '9' : Math.floor(eval('9'.concat(a))) }

function plus(a) { return ` + ${a}` }
function minus(a) { return ` - ${a}` }
function times(a) { return ` * ${a}` }
function dividedBy(a) { return ` / ${a}` }

console.log(seven(times(five())))
console.log(four(plus(nine())))
console.log(eight(minus(three())))
console.log(six(dividedBy(four())))