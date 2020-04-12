function printer(): void {
  console.log("I am printing");
}

/**Never reaches the end point */
function printer2(): never {
  while (true) {
    console.log("I am printing too");
  }
}

/**void returns undefined */

let test: any = printer();
console.log(test);

/**never returns anything */
//let test2: never = null;
let test2 = printer2();
console.log(test2);
