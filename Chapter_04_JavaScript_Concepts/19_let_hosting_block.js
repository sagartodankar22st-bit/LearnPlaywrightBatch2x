let x= "global";
if (true){
    let x="block"; // this variable is local to the block and does not affect the outer variable 'x'
    console.log(x); // this will print "block" because the variable 'x' declared with let is block-scoped and the value is updated within the block
}
console.log(x); // this will print "global" because the variable 'x' declared with let is block-scoped and does not affect the outer variable 'x'   