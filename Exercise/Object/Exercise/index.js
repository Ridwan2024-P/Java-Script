// let address = {
//     street: 'a',
//     city:'b',
//     zipCode:c
// };
// function showAddress(address){
//     for(let key in address){
//         console.log(key,address[key]);
//     }
// }

function address (a , b , c){
    this.a=a;
    this.b=b;
    this.c=c;
}
let address1 =new address ('a','b','c');
let address2 =new address ('a','b','c');
function areEqual(address1,address2){
    if(address1 ===  address2) console.log("Equal");
    else console.log("not Equal");
}