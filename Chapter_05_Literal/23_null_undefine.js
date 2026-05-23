// Null vs Undefined in JavaScript

// --- undefined ---
// Means: variable declared but NOT assigned a value
let a;
console.log(a); // undefined

function foo() {}
console.log(foo()); // undefined (no return)

// --- null ---
// Means: explicitly set to "nothing" / "empty" by the programmer
let b = null;
console.log(b); // null

// --- Key differences ---

// 1. Type
console.log(typeof undefined); // "undefined"
console.log(typeof null);      // "object" (this is a known JS bug)

// 2. Loose equality (==) considers them equal
console.log(null == undefined);  // true

// 3. Strict equality (===) does NOT
console.log(null === undefined); // false

// 4. Common use cases
let user = undefined; // avoided – let JS set this
let profile = null;   // common – intentional "no value"
