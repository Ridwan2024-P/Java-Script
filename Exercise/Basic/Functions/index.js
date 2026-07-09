function greet(){
    console.log('Hello World');
}
greet();
//Performing a task
function greet1(name,lastName){
    console.log('Hello World ' + name  + lastName);
}

greet1('Rid');
greet1('Ridwan','Bin Ahsan' );

//calculating a value
function square(number){
    return number * number;
}
let number = square(2);
console.log(number);