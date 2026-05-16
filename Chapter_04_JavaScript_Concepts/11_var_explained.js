var a=10;



console.log(a);
function printHello(){
console.log("Hello, Testing academy!    ");
var a=20; // this variable is local to the function and does not affect the global variable 'a'
console.log(a);
}
printHello(); // calling the function to execute the code inside it
