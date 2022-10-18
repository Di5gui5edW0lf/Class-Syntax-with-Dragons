const { returns } = require("chai-spies");

class Dragon {
  constructor(name, color) {
    this.name = name
    this.color = color
  }

breathesFire() {
  returns `${this.name} breathes fire everywhere! Burn!!!.`
}

static getDragons(...dragons) {
  return dragons.map(dragons => `${this.name}`)
}

}

/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

try {
  module.exports = Dragon;
} catch {
  module.exports = null;
}