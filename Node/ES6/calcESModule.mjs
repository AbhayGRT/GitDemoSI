const message = "From ES6 module";
function multiply(x,y){
    return x * y
}

function divide(x,y){
    return x / y
}

export default message;
export {multiply,divide}