// All Number Types in JavaScript

// JS has only ONE number type: Number (IEEE 754 double-precision)
// But it can represent different forms:

// 1. Integer
let int = 42;
console.log("Integer:", int);

// 2. Float / Decimal
let float = 3.14;
console.log("Float:", float);

// 3. Scientific (exponential) notation
let sci = 5e3;    // 5 * 10^3 = 5000
let sci2 = 1.5e-2; // 0.015
console.log("Scientific:", sci, sci2);

// 4. Binary (0b prefix)
let bin = 0b1010; // 10 in decimal
console.log("Binary:", bin);

// 5. Octal (0o prefix – ES6)
let oct = 0o77; // 63 in decimal
console.log("Octal:", oct);

// 6. Hexadecimal (0x prefix)
let hex = 0xFF; // 255 in decimal
console.log("Hexadecimal:", hex);

// 7. BigInt (ES2020) – for arbitrarily large integers
let big = 9007199254740991n; // note the n suffix
console.log("BigInt:", big);

// 8. Special number values
console.log("Infinity:", Infinity);
console.log("-Infinity:", -Infinity);
console.log("NaN (Not a Number):", NaN);
console.log("1/0:", 1 / 0); // Infinity
console.log("'abc' * 2:", "abc" * 2); // NaN

// 9. Number limits
console.log("MAX_SAFE_INTEGER:", Number.MAX_SAFE_INTEGER);
console.log("MIN_SAFE_INTEGER:", Number.MIN_SAFE_INTEGER);
console.log("MAX_VALUE:", Number.MAX_VALUE);
console.log("MIN_VALUE:", Number.MIN_VALUE);
