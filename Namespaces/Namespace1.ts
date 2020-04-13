namespace MyNameSpace {
  export class MyCar {
    start() {
      console.log("Car engine start");
    }
    accelerate() {
      console.log("Car accelerate");
    }
    break() {
      console.log("Car stopped.");
    }
  }

  export class Truck {
    start() {
      console.log("Truck engine started");
    }
    loaded() {
      console.log("Truck is loaded");
    }
    break() {
      console.log("Truck stopped");
    }
  }
}
