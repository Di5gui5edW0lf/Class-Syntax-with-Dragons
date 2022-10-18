const FriendlyDragon = require("./classes/friendly-dragon")

const EvilDragon = require("./classes/evil-dragon")

const falkor = new FriendlyDragon("Falkor"){
  name: "Falkor";
  color: "white";
  lifeGoals: "save Atreyu from the swamp", "save Atreyu from the Nothing", "scare the local bullies into a dumpster";
  friend: "Bastian"
}

/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

try {
  module.exports.falkor = falkor
  module.exports.smaug = smaug
} catch {
  module.exports = null;
}
