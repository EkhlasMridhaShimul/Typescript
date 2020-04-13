class Numbers {
  private oddNumber: number;

  get odd(): number {
    return this.oddNumber;
  }

  set odd(number: number) {
    let num = number % 2;
    if (num != 0) {
      this.oddNumber = number;
    }
  }
}

let number = new Numbers();
number.odd = 14;
console.log(number.odd);
number.odd = 15;
console.log(number.odd);

class MakeSquareRoot {
  private store: number;

  get squareRoot(): number {
    return Math.sqrt(this.store);
  }

  set squareRoot(num: number) {
    this.store = num;
  }
}

let root = new MakeSquareRoot();
root.squareRoot = 17;
console.log(root.squareRoot);

class ATM {
  private password = "password";
  private availMoney: number = 100000;
  private withdraw: number;
  private myPass: string;

  get money(): string {
    if (this.myPass == this.password) {
      if (this.withdraw <= this.availMoney) {
        this.availMoney = this.availMoney - this.withdraw;
        return this.withdraw.toString();
      } else {
        return "Insufficient balance";
      }
    } else {
      return "Invalid password";
    }
  }

  set money(credWithMoney: string) {
    let credMoney = credWithMoney.split(" ");
    let pass = credMoney[0];
    let myMoney = parseInt(credMoney[1]);

    this.withdraw = myMoney;
    this.myPass = pass;
  }
}

let atm = new ATM();
atm.money = "password 50000";
console.log(atm.money);

atm.money = "wrong 50000";
console.log(atm.money);

atm.money = "password 500000";
console.log(atm.money);
