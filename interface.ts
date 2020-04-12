interface UserData {
  username: string;
  isActive: boolean;
  accountNum: number;
}

function getUser(): UserData {
  let data: UserData = {
    username: "Rafiq",
    isActive: true,
    accountNum: 12343242
  };

  return data;
}

let uData: UserData = getUser();
console.log(uData.username);
console.log(uData.accountNum);

interface Bird {
  name: string;
  fly(): void;
}

class FlyingBird implements Bird {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  fly(): void {
    console.log(this.name + " is flying");
  }
}

let pegion = new FlyingBird("Pegion");

pegion.fly();
