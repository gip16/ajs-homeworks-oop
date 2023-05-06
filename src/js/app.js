// TODO: write your code here
import sum from './basic';

console.log('worked');

console.log(sum([1, 2]));

class Character {
  constructor(name, type) {
    const types = [Bowman, Swordsman, Magician, Daemon, Undead, Zombie]

    if (typeof name === 'string' && name.length >= 2 && name.length <= 10) {
      this.name = name;
    } else {
      throw new Error('Длина имени должна быть от 2 до 10 символов')
    }

    if (types.includes(type)) {
      this.type = type;
    } else {
      throw new Error('Такого класса не существует')
    }

    this.type = type;
    this.health = 100;
    this.level = 1;
    this.attack;
    this.defence;
  }

  levelUp() {
    if (this.health !== 0) {
      this.level += 1;
      this.attack += this.attack * 0.2;
      this.defence += this.defence * 0.2;
      this.health = 100;
    } else {
      throw new Error('Нельзя повысить левел умершего')
    }
  }

  damage(points) {
    this.health -= points * (1 - this.defence / 100);
    if (this.health < 0) {
      this.health = 0;
    }
  }
}

class Bowman extends Character {
  constructor(name, type = Bowman) {
    super(name, type);
    this.attack = 25;
    this.defence = 25;
  }
}

class Swordsman extends Character {
  constructor(name, type = Swordsman) {
    super(name, type);
    this.attack = 40;
    this.defence = 10;
  }
}

class Magician extends Character {
  constructor(name, type = Magician) {
    super(name, type);
    this.attack = 10;
    this.defence = 40;
  }
}

class Undead extends Character {
  constructor(name, type = Undead) {
    super(name, type);
    this.attack = 25;
    this.defence = 25;
  }
}

class Zombie extends Character {
  constructor(name, type = Zombie) {
    super(name, type);
    this.attack = 40;
    this.defence = 10;
  }
}

class Daemon extends Character {
  constructor(name, type = Daemon) {
    super(name, type);
    this.attack = 10;
    this.defence = 40;
  }
}

const bowman1 = new Bowman('bow', Bowman);
console.log(bowman1);
bowman1.levelUp();
console.log(bowman1);
bowman1.damage(31);
console.log(bowman1);