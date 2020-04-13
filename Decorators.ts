function initials() {
  console.log("Initializing values..");
  return function (
    target,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    descriptor.value;
  };
}

function calculateValues() {
  console.log("Calculating Values..");
}

class Game {
  @initials()
  mymethod() {
    console.log("Playing games...");
  }
}

let game = new Game();

game.mymethod();
