/**Example 1 */
let a: number = 12;
let b: number = 10;
let d = new Number("1200");

let c: number = a / b;

console.log("Object Number: " + typeof d);
console.log("Object Number: " + d);
console.log(c);

/**Number operation */
console.log("with presision: " + c.toPrecision(3));
console.log("Exponential: a^2= " + b.toExponential(2));

/**binary to decimal*/
let binaryB: number = 0b100;
let binaryC: number = 0b110;

console.log("Will get result in decimal: " + binaryC);
