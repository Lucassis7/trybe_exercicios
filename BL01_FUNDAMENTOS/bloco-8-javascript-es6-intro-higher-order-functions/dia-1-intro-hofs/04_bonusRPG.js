const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

const battleMembers = { mage, warrior, dragon };

// função que retorna o dano do dragão
const dragonDamage = (dragonObj) => {
  const minDamage = 15;
  const dragonDmg = Math.floor((Math.random() * (dragonObj.strength - minDamage + 1) + minDamage));
  return dragonDmg;
};

// console.log(dragonDamage(dragon));

// função que retorna o dano do guerreiro
const warriorDamage = (warriorObj) => {
  const minDamage = warriorObj.strength;
  const maxDamage = minDamage * warriorObj.weaponDmg;
  const warriorDmg = Math.floor((Math.random() * (maxDamage - minDamage + 1) + minDamage));
  return warriorDmg;
};

// console.log(warriorDamage(warrior));

// função que retorna dano do mago e a mana gasta
const mageDamage = (mageObj) => {
  const mageMana = mageObj.mana;
  const minDamage = mageObj.intelligence;
  const stats = {
    usedMana: 0,
    damageDealt: 'Não possui mana suficiente...',
  };

  if (mageMana > 15) {
    const mageDmg = Math.floor((Math.random() * ((minDamage * 2) - minDamage + 1) + minDamage));
    stats.usedMana = 15;
    stats.damageDealt = mageDmg;
    return stats;
  };
  return stats;
};

// criando o game actions
// turno do guerreiro
const gameActions = {
  warriorTurn: (warriorAction) => {
    const warriorDamage = warriorAction(warrior);
    warrior.damage = warriorDamage;
    dragon.healthPoints -= warriorDamage;
  },
  mageTurn: (mageAction) => {
    const mageTurnStats = mageAction(mage);
    const mageDamage = mageTurnStats.damageDealt;
    mage.damage = mageDamage;
    mage.mana -= mageTurnStats.usedMana;
    dragon.healthPoints -= mageDamage;
  },
  dragonTurn: (dragonAction) => {
    const dragonDamage = dragonAction(dragon);
    mage.healthPoints -= dragonDamage;
    warrior.healthPoints -= dragonDamage;
    dragon.damage = dragonDamage;
  },
  turnResults: () => battleMembers,
};

gameActions.warriorTurn(warriorDamage);
gameActions.mageTurn(mageDamage);
gameActions.dragonTurn(dragonDamage);

console.log(gameActions.turnResults());
