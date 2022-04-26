// Soldier
class Soldier {
  constructor(health, strength) { 
    this.health = health;
    this.strength = strength;   
  }

  attack() {
    return this.strength;
  }

  receiveDamage(damage) {
    this.health = health - damage;
  }
}

// Viking
class Viking extends Soldier{
  constructor(name, health, strength){
    super(health, strength);
    this.name = name;
    
  }

  attack() {
    return this.strength;
  }

  receiveDamage(damage){
    this.health = health - damage;
    if (this.health >= 1) {
      return `${this.name} has received ${damage} points of damage`
    }
    else {
      return `${this.name} has died in act of combat `
    }
  }

  battleCry(){
    return 'Odin Owns You All!'
  }

}

// Saxon
class Saxon extends Soldier {
  constructor (health, strength) {
    super(health, strength);
  }

  attack() {
    return this.strength;
  }

  receiveDamage(damage){
    this.health = health - damage;
    if (this.health >= 1) {
      return `A Saxon has received ${damage} points of damage`
    }
    else {
      return `A Saxon has died in act of combat `
    }
  }

}

// War
class War {
  constructor() {
    this.vikingArmy = [];
    this.saxonArmy = [];
}

  addViking(Viking) {
    this.vikingArmy.push(Viking) 
  }

  addSaxon(Saxon) {
    this.saxonArmy.push(Saxon)
  }

  vikingAttack() {
    let randomSaxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)]
    let randomViking =this.vikingArmy[Math.floor(Math.random() * this.saxonViking.length)]
    let randomDamage = randomsSaxom.receiveDamage(this.randomViking.attack());
    if (randomSaxon.health <= 0 ) {
      this.saxonArmy.splice(randomSaxon.indexOf(randomSaxon),1)
    }
  }

  saxonAttack() {
    let randomSaxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)]
    let randomViking =this.vikingArmy[Math.floor(Math.random() * this.saxonViking.length)]
    let randomDamage = randomViking.receiveDamage(this.randomSaxon.attack());
    if (randomViking.health <= 0 ) {
      this.vikingArmy.splice(randomViking.indexOf(randomViking),1)
    }
  }


  // FALTA BONUS 5 

  showStatus()

}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
