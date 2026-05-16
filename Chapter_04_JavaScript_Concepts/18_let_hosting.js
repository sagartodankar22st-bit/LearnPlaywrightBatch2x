console.log(Score);
let score=10;
{
    let score=20; // this variable is local to the block and does not affect the outer variable 'score'
console.log(score); // this will print 20 because the variable 'score' declared with let is block-scoped and the value is updated within the block  
}       