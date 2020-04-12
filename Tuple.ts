let tuple: [string, boolean, string[]];

let strArray: string[] = ["to", "my"];

tuple = ["Sam", true, strArray];

console.log(tuple);

/**Accessing tuple */
tuple[2].unshift("Welcome");
console.log(tuple);

/**Tuple array */
let tupleArray: [string, boolean, string[]][];

let arr: string[] = ["Juice", "Fruit", "Cake", "Water"];

tupleArray = [["Player", true, arr]];
console.log(tupleArray);

tupleArray.push(tuple);
console.log(tupleArray);
