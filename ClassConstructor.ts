class Car {
  carname: string;
  constructor(carname: string) {
    this.carname = carname;
  }

  startCar() {
    console.log("Engine starting... of " + this.carname);
  }

  accelerate() {
    console.log("Accelerating");
  }

  break() {
    console.log(this.carname + " stopped");
  }

  horn() {
    console.log("beep beep....");
  }
}

let BMW = new Car("BMW");
let ford = new Car("Ford");
BMW.startCar();
BMW.accelerate();
BMW.break();

ford.startCar();
ford.accelerate();
ford.break();

class CarShop {
  private carShopName: string;
  private availCar: string[] = ["Lamborghini", "Bugatti veyron"];
  constructor(carShopName: string) {
    this.carShopName = carShopName;
  }

  addCartoStock(name: string) {
    this.availCar.push(name);
  }

  sellCar(name: string): Car {
    let index = this.availCar.indexOf(name);
    if (index >= 0) {
      return new Car(name);
    } else {
      console.log(name + " is not available");
      return null;
    }
  }

  seeCarOnStock(): void {
    console.log(this.availCar);
  }
}

let carShop = new CarShop("Elite Moto");
carShop.seeCarOnStock();
carShop.addCartoStock("BMW");

let myCar: Car = carShop.sellCar("Lamborghini");

myCar.startCar();
