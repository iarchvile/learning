import {signal, microwave, Starship} from './base';
import {Aliendestroyer} from './mars';

let time = 10;
let counter = setInterval(countdown, 1000);

const nazi1 = new Starship('Nazi1')
const nazi2 = new Starship('Nazi2')
const nazi3 = new Starship('Nazi3')

console.log(nazi1.sayName());
nazi1.init();
console.log(nazi2.sayName());
nazi2.init();
console.log(nazi3.sayName());
nazi3.init();

const helper = new Aliendestroyer();


function countdown() {
    console.log(time);
    time -= 1;
    if (time === 2) {
        helper.zinaInit();
    }
    if (time < 1) {
        console.log('Пиздец предотвращен!');
        clearInterval(counter);
    }
}

countdown();





