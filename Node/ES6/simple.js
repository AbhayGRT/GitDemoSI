// const calc = require('./calculator')
const {add,PI} = require('./calculator')
// const calc = require('./calcESModule.mjs')

console.log("Welcome" );
// console.log(calc.message)

let addResult = add(5,6);

console.log("Add result" + addResult)
let area = PI * 3 * 3;

console.log("Area" + area)

// To import a ES6 module dynamically
import ('./calcESModule.mjs').then(
    es => {console.log(es.default);
        console.log(es.multiply(10,10))
    }
)

async function divide (){
    const es6Module = await import('./calcESModule.mjs')
    const result = await es6Module.divide(100,5)
    console.log("Add result" + result)
}

divide();