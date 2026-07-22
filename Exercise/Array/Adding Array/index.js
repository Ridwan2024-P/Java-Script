 const numbers = [3,4];
 numbers.push(5,6);
  numbers.unshift(1,2);
 console.log(numbers)

//  Finding array

const array = [1,2,3,4,5,1];
console.log(array.indexOf(1,2));
console.log(array.lastIndexOf(1));
console.log(array.includes(1));


// Removing Array
console.log(array.pop());
numbers.splice(2,2);


const message = 'This is my first message';
const parts = message.split(' ');
console.log(parts);

const combined = parts.join('-');
console.log(combined)

let array = [3,5,2,6,1,7,4,8,3,9];
let sum = 0;
console.log(array.length);

for(let i = 0; i < array.length  ; i++){
    console.log(`On iteration ${i}`);
    console.log(`Selected Element ${array[i]}`)
    
    console.log(array[i] > array [i+1]);
    // if(array[i] > array [i+1]){
        console.log(array[i]);
    //     console.log(array[i+1]);
       
    //     console.log(array[i]);
    // }
    console.log();
}
let array = [3,5,2,6,1,7,4,8,3,9];
let sum = 0;
let array2 = [];
let selectedElement = array[0];
let total = 0;
array2.push(array[0]);
for(let i = 1; i < array.length  ; i++){
    if(selectedElement < array[i]){
        array2.push(array[i]);
        selectedElement= array[i];
    }
    
}
for(let i = 0; i < array2.length-1 ; i++){
   sum = sum +( array2[i+1]- array2[i]);
  
    console.log(sum);
}
 console.log(sum);

//  Array2
let array = [1,5,2,6,3,7,4,8,2];
let sum = 0;
let array2 = [];
let selectedElement = array[0];
let total = 0;

for(let i = 1; i < array.length  ; i++){
  if(array[i-1] < array[i] && array[i] >array[i+1] ){
      array2.push(array[i]);
  }
} 
for(let i = 0; i < array2.length-1; i++){
  sum = sum +(array2[i+1]- array2[i]);
} 
 console.log(sum);

