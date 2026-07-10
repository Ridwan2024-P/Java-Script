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


// Exercise
function sum(...args) {
    return args.reduce((a, b) => a + b, 0);
}

console.log(sum(1, 2, 3, 4, 5));

const circle = {
    radius: 1,

    get area() {
        return Math.PI * this.radius * this.radius;
    }
};

console.log(circle.area);