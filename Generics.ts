interface System<Type> {
  name: string;
  elements: Type[];
}

function getValue<Type>(name: string, value: Type[]): System<Type> {
  let system: System<Type> = { name: name, elements: value };

  return system;
}

let value = ["value1", "value2", "value3"];
let value2 = [1, 3, 4, 5];

let val: System<String> = getValue<String>("First", value);

let val2: System<number> = getValue<number>("Second", value2);

console.log(val);
console.log(val2);

class JungleBird {
  fly() {
    console.log("Birds flying..");
  }

  sing() {
    console.log("Birds singing");
  }
}

class WildAnimal {
  run() {
    console.log("Animal running");
  }

  roar() {
    console.log("Animal's roar...");
  }
}

class ActionGenerator {
  getInstance<Type>(subject: new () => Type): Type {
    return new subject();
  }
}

let generate = new ActionGenerator();

let bird = generate.getInstance<JungleBird>(JungleBird);
let wildAnimal = generate.getInstance<WildAnimal>(WildAnimal);

bird.fly();
wildAnimal.roar();
