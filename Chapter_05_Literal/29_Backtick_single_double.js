// Key difference: Backtick (template literal) supports interpolation & multi-line; single/double don't.

let name = "Sagar";

console.log('Single: Hello', name);       // no interpolation
console.log("Double: Hello", name);       // no interpolation
console.log(`Backtick: Hello ${name}`);   // interpolation with ${}

// Multi-line:
console.log("Single:\nline2");
console.log("Double:\nline2");
console.log(`Backtick:
line2`); // cleaner
