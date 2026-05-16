function getuserstatus(){
    console.log(status_code);
    var status_code="Active"; // this variable is local to the function and does not affect the global variable 'status_code'
    console.log(status_code); // this will print "Active" because the variable 'status_code' declared with var is function-scoped and the value is updated within the function  
}
getuserstatus();
