//Arguments
function sum(a,b){
    console.log(arguments)
    return a + b;
}
console.log (sum(1,2,3,4,5));

// rest oeratoe
function sum(...args){
    console.log(arguments)
    return a + b;
}
console.log (sum(1,2,3,4,5));