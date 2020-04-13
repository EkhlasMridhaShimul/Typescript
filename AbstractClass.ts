abstract class Human {
  abstract getName(): void;
  walk(): void {
    console.log("walking");
  }
  run(): void {
    console.log("Running");
  }

  abstract favouriteFood(): void;
}

class Rahim extends Human {
  getName(): void {
    console.log("My name is Rahim");
  }
  favouriteFood(): void {
    console.log("Favourite food is Chicken");
  }
}

class Karim extends Human {
  getName(): void {
    console.log("My name is Karim");
  }
  favouriteFood(): void {
    console.log("Favourite food is Burger");
  }
}

let rahim = new Rahim();
let karim = new Karim();

rahim.walk();
karim.walk();

rahim.getName();
karim.getName();
