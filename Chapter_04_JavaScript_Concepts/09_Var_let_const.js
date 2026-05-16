var v=10;
let l=20;
const c=3.14;
var browser="chrome"
var browser="firefox" // re-declaring a variable with var is allowed
browser="edge" // re-assigning a variable declared with var is allowed

var testcase=["login","logout","search"];
for(var i=0;i<testcase.length;i++){
    console.log("running test:" + testcase[i] );
}
console.log("loop counter leaked outside the loop: " + i);  