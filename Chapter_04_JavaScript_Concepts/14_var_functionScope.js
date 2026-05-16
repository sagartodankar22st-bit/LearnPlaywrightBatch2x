function printHello() {
    var a=20;
    console.log(a);
    if(true){
        var a=30; // this variable is also local to the function and does not affect the global variable 'a'
        console.log(a);
    }
    console.log("F -> " + a); // this will print 30 because the variable 'a' declared with var is function-scoped and the value is updated within the function
}   
printHello(); // calling the function to execute the code inside it