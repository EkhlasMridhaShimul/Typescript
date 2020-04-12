enum ScoreBoard {
  John = 100,
  Sam = 40,
  Layn = 50,
  Hank = 30
}
console.log(ScoreBoard.John);
console.log(ScoreBoard[50]);

/**Not assigned any value */
enum Users {
  Jony,
  Tom,
  Mark
}
console.log(Users);
console.log(Users.Jony);
console.log(Users.Tom);

/**will start with initial 2 in sequence */
enum Users2 {
  Kim = 2,
  Froid,
  Xing
}
console.log(Users2.Kim);
console.log(Users2.Froid);
console.log(Users2[2]);

/**can be a return type */
function getXing(name: string): Users2 {
  if (name == "Xing") {
    return Users2.Xing;
  }
}
