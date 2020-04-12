interface GeneralBird {
  name: string;
  gender: string;
}

interface FlyingBird extends GeneralBird {
  fly(): void;
}

interface NotFlyingBird extends GeneralBird {
  run(): void;
}

class Cuckoo implements FlyingBird {
  name: string;
  gender: string;

  constructor(name: string, gender: string) {
    this.name = name;
    this.gender = gender;
  }

  fly() {
    console.log(this.gender + " " + this.name + " is flying");
  }
}

class Ostrich implements NotFlyingBird {
  name: string;
  gender: string;

  constructor(name: string, gender: string) {
    this.name = name;
    this.gender = gender;
  }

  run(): void {
    console.log(this.gender + " " + this.name + " is running..");
  }
}

let ostrich = new Ostrich("Ostrich", "Male");
let cuckoo = new Cuckoo("Cuckoo", "Female");

ostrich.run();
cuckoo.fly();

class Vehicle {
  go(): void {
    console.log("going..");
  }
  break(): void {
    console.log("stopped.");
  }
}

class ByCycle extends Vehicle {
  wheels(): void {
    console.log("has two wheels");
  }
  engine(): void {
    console.log("Has to paddle..");
  }
}

let bycycle = new ByCycle();
bycycle.wheels();
bycycle.go();

class MyCar extends Vehicle {
  start(): void {
    console.log("Engine starting..");
  }
}

let myCar2 = new MyCar();
myCar2.start();
myCar2.break();
