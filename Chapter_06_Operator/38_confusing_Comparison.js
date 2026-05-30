console.log('--- Confusing == (loose) vs === (strict) ---');

// Type coercion leads to unexpected results with ==
console.log(0 == "0");        // true  (string "0" coerced to number 0)
console.log(0 == "");         // true  (empty string coerced to 0)
console.log("" == "0");       // false (both strings, no coercion needed, different values)
console.log(0 == false);      // true  (false coerced to 0)
console.log(null == 0);       // false (null only equals undefined, not 0)
console.log(null == undefined); // true  (special rule)
console.log(NaN == NaN);      // false (NaN is never equal to anything, even itself)
console.log([] == ![]);       // true  (both coerce to 0)
console.log({} == {});        // false (different object references)
console.log([1,2] == "1,2");  // true  (array coerced to string "1,2")

console.log('--- Strict === (no coercion) ---');
console.log(0 === "0");        // false (number vs string)
console.log(0 === "");         // false
console.log(0 === false);      // false
console.log(null === undefined); // false (different types)
console.log(NaN === NaN);      // false (NaN is never equal)
console.log([] === ![]);       // false (object vs boolean)
