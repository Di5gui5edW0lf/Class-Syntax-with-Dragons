const { returns } = require("chai-spies");

class Dragon {
  constructor(name, color) {
    this.name = name
    this.color = color
  }

breathesFire() {
  returns `${this.name} breathes fire everywhere! Burn!!!.`
}

static cd

}

/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

try {
  module.exports = Dragon;
} catch {
  module.exports = null;
}