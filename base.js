export const signal = '--- . --- . ... ---'

export function microwave() {
    return 'new tech microwave';
}

export class Starship {
    
    unit1 = null;
    unit2 = null;
    unit3 = null;
    unit4 = null;
    
    shipName = null;
    
    constructor(shipName) {
        this.unit1 = this.createUnit(shipName + '-> Адольф') + '->' + this.createFood() + '->' + this.createWeapon() + "\n";
        this.unit2 = this.createUnit(shipName + '-> Садам') + '->' + this.createFood() + '->' + this.createWeapon() + "\n";
        this.unit3 = this.createUnit(shipName + '-> Мусолини') + '->' + this.createFood() + '->' + this.createWeapon() + "\n";
        this.unit4 = this.createUnit(shipName + '-> Картман') + '->' + this.createFood() + '->' + this.createWeapon() + "\n";
        
        this.shipName = shipName;
        console.log('Корабль ' + this.shipName + " создан");
    }
    
    createUnit(name) {
        let lvl = 0;
        return name + ' ' + lvl;
    }
    
    createFood() {
        let food = 365;
        return food;
    }
    
    createWeapon() {
        let power = 1000;
        return power;
    }
    
    init() {
        console.log("Высадка: ");
        console.log(this.unit1, this.unit2, this.unit3, this.unit4);
    }
    
    sayName() {
        return this.shipName + ' ready!';
    }
    
}

/*const nazi1 = new Starship('Nazi1');
const nazi2 = new Starship('Nazi2');
const nazi3 = new Starship('Nazi3');

//------a few moments later--------------

console.log(nazi1.sayName());
console.log(nazi2.sayName());
console.log(nazi3.sayName());

nazi1.init();
nazi2.init();
nazi3.init();*/


