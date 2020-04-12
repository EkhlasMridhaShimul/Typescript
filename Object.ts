function generateObject(name: string, age: number, isAlive: boolean): Object {
  const data = {
    name: name,
    age: age,
    isAlive: isAlive
  };
  return data;
}

let userData: Object = generateObject("Sam", 23, true);
console.log(userData);

function sendData(dataObject: Object): void {
  console.log(dataObject);
}

sendData(userData);
