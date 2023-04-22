export class Aliendestroyer {
    
    unit1 = null;
    
    constructor() {
        this.unit1 = this.getHelpFrom('Баба Зина') + " -> Оружие: " + this.createWeapon();
    }
    
    createWeapon() {
        let weapon = 'RPG';
        return weapon;
    }
    
    getHelpFrom(name) {
        return name;
    }
    
    zinaInit() {
        console.log('Подмога с Марса \n');
        console.log(this.unit1);
        console.log('У нас 3 секунды до полного пиздеца!');
    }
    
}