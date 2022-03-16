/* Fighter class definition */
const MAX_LIFE = 100;

class Fighter
{
    constructor(name, strength, dexterity) {
        this.name = name
        this.strength = strength
        this.dexterity = dexterity
        this.life = MAX_LIFE
    }

    fight(opponent) {
        let attack = this.getRandomNumber(1, this.strength)
        
        let damage = opponent.dexterity - attack
        
        damage = this.limitToZero(damage)
      
        opponent.life -= damage
        opponent.life = this.limitToZero(opponent.life)

        return damage
    }

    getRandomNumber(min, max) {
        return min + Math.floor(Math.random() * (max-min + 1))
    }

    limitToZero(property) {
        return property < 0 ? 0 : property
    }
}

module.exports = Fighter