const calc = require('./calculator')
// const {add,PI} = require(./calculator)
console.log("Welcome" );
console.log(calc.message)

let addResult = calc.add(5,6);

console.log("Add result" + addResult)
let area = calc.PI * 3 * 3;

console.log("Area" + area)