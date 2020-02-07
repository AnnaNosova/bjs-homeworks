'use strict'

//task 1

class Weapon {

    constructor(name, attack, durability, range) {
        this.name = name;
        this.attack = attack;
        this.durability = durability;
        this.range = range;
        this.fullDurability = durability;
    }
    
    takeDamage(damage) {
        if (this.durability > damage) {
            return this.durability -= damage;
        } else {
            return this.durability = 0;
        }
   }

   getDamage() {
       if (this.durability >= 0.3 * this.fullDurability) {
           return this.attack;
       } else if (this.durability == 0) {
           return 0;
       } else {
           return this.attack / 2;
       }
   }

   isBroken() {
       if(this.durability > 0) {
           return false;
       }
       return true;
   }
}

const arm = new Weapon ('Рука', 1, Infinity, 1);
const bow = new Weapon ('Лук', 10, 200, 3);
const longBow = new Weapon ('Длинный лук', 15, 200, 4);
const sword = new Weapon ('Меч', 25, 500, 1);
const poleAxe = new Weapon ('Секира', 27, 800, 1);
const knife = new Weapon ('Нож', 5, 300, 1);
const staff = new Weapon ('Посох', 8, 300, 2);
const stormStaff = new Weapon ('Посох бури', 10, 300, 3);

  
sword.takeDamage(5);
console.log(sword.durability); 
sword.takeDamage(50);
console.log(sword.durability); 
  
arm.takeDamage(20);
console.log(arm.durability); 

bow.takeDamage(20);
console.log(bow.durability); 
  
bow.takeDamage(200);
console.log(bow.durability);


//task 2

class Bow extends Weapon {
    constructor() {
        super();
        this.name = 'Лук';
        this.attack = 10;
        this.durability = 200;
        this.range = 3;
        this.fullDurability = this.durability;
    }
}

class Sword extends Weapon {
    constructor() {
        super();
        this.name = 'Меч';
        this.attack = 25;
        this.durability = 500;
        this.range = 1;
        this.fullDurability = this.durability;
    }
}

class Knife extends Weapon {
    constructor() {
        super();
        this.name = 'Нож';
        this.attack = 5;
        this.durability = 300;
        this.range = 1;
        this.fullDurability = this.durability;
    }
}

class Staff extends Weapon {
    constructor() {
        super();
        this.name = 'Посох';
        this.attack = 8;
        this.durability = 300;
        this.range = 2;
        this.fullDurability = this.durability;
    }
}

class Arm extends Weapon {
    constructor() {
        super();
        this.name = 'Рука';
        this.attack = 1;
        this.durability = Infinity;
        this.range = 1;
        this.fullDurability = this.durability;
    }
}

class PoleAxe extends Sword {
    constructor() {
        super();
        this.name = 'Секира';
        this.attack = 27;
        this.durability = 800;
        this.fullDurability = this.durability;
    }
}

class LongBow extends Bow {
    constructor() {
        super();
        this.name = 'Длинный лук';
        this.attack = 15;
        this.range = 4;
    }
}

class StormStaff extends Staff {
    constructor() {
        super();
        this.name = 'Посох бури';
        this.attack = 10;
        this.range = 3;
    }
}

const myWeapon = new Sword();
const myWeapon2 = new PoleAxe();


console.log(myWeapon);
console.log(myWeapon2);

const goldenBow = new Bow();

console.log(bow.name); 
console.log(bow.attack);
console.log(bow.durability);
console.log(bow.range);

//task 3

class StudentLog {
    constructor (name) {
        this.name = name;
        this.grades = {}
    }

    getName() {
        return this.name;
    }

    addGrade(grade, subject) {
        if (grade < 1 || grade > 5 || grade !== Number(grade)) {
            console.log(`Вы пытались поставить оценку ${grade} по предмету ${subject}. Допускаются только числа от 1 до 5.`);
            return this.grades[subject].length;
        } if (this.grades.hasOwnProperty(subject)) {
            this.grades[subject].push(Number(grade));
        } else {
            this.grades[subject] = [];
            this.grades[subject].push(Number(grade));
        }

        return this.grades[subject].length;
    }

    getAverageBySubject(subject) {

        if (this.grades.hasOwnProperty(subject)) {

            let marksSum = 0;
            
            for (let i = 0; i < this.grades[subject].length; i++) {
                marksSum += this.grades[subject][i];
            } 
        
            return (marksSum / this.grades[subject].length).toFixed(2); 

        } 
        else {
            return 0;
        }
    }

    getTotalAverage() {
        let gradesSum = 0;
        let allSubjectsArray = Object.values(this.grades)
        let allGradesArray = [];
        for (let i = 0; i < allSubjectsArray.length; i++) {
            for (let j = 0; j < allSubjectsArray[i].length; j++) {
                allGradesArray.push(allSubjectsArray[i][j]);
            }
        }

        for (let i = 0; i < allGradesArray.length; i++) {
            gradesSum += allGradesArray[i];
        }
        return gradesSum / allGradesArray.length;
    }
}


const log = new StudentLog('Олег Никифоров');
console.log(log.getName()) 



log.addGrade(2, 'algebra');
log.addGrade(4, 'algebra');
log.addGrade(5, 'geometry');
log.addGrade(4, 'geometry');

console.log(log.getAverageBySubject('geometry')); // 4.5
console.log(log.getAverageBySubject('algebra')); // 3
console.log(log.getAverageBySubject('math')); // 0
console.log(log.getTotalAverage());
