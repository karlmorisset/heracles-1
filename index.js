const Fighter = require('./src/Fighter.js')

const heracles = new Fighter("🧔 Heracles", 12, 6)
const lion = new Fighter("🦁 Nemean Lion", 20, 13)

do {
    heracles.fight(lion)
    lion.fight(heracles)
} while(heracles.life > 0 && lion.life > 0)

console.log(heracles);
console.log(lion);

let result = heracles.life == 0 ? "Lion a remporté le combat" : "Héraclès a remporté le combat"
console.log(result)