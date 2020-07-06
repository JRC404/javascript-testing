// something will go here

class FifaPlayer {
  constructor(name, pace, shooting, passing) {
    this.name = name;
    this.pace = pace;
    this.shooting = shooting;
    this.passing = passing;
  }
  // increase functions
  increasePace() {
    this.pace++;
  }
  increaseShooting() {
    this.shooting++;
  }
  increasePassing() {
    this.passing++;
  }

  // decrease functions
  decreasePace() {
    this.pace--;
  }
  descreaseShooting() {
    this.shooting--;
  }

  descreasePassing() {
    this.passing--;
  }
}

const abrar = new FifaPlayer("Abrar", 97, 95, 4);

module.exports = {
  FifaPlayer,
  abrar
};
