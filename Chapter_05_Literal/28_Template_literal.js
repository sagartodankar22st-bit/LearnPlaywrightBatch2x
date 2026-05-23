let Firstname="Sagar";
let fullname= `Hi, ${Firstname} Todankar`;
console.log(fullname);

let env="staging";
env="production";
const USRID= 12345;
const apiUrl=`https://api-${env}.tekion.com/user/${USRID}`;

console.log(apiUrl);