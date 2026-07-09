// 1 = 01
// 2 = 10
// 3 = 11

const readPermission = 4;
const writePermission = 2;
const executePermission =1;
let myPermission = 0;
myPermission = myPermission | readPermission | writePermission ;
let message =(myPermission & readPermission) ? 'yes' : no;
console.log(message);