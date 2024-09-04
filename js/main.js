'use strict';
 

//1 задание
let name ;
name='Джон'
let admin= name;
alert(admin);

//2 задание

let nazv;
let god;
let narod;

nazv=prompt('Введите название города', 'gorod');

god=prompt('Введите год основания города', 'god');
narod=prompt('Введите насееление города', 'naselenie');

alert(`Городу ${nazv} исполнилось ${2024-god} лет с момента его образования. Население - ${narod} человек`);

//3 задание

const PI=Math.PI;;
let radius='r';

let area;

area=PI*(Number(radius)*Number(radius));
console.log(area);

//4 задание

let a;
let b;

a=prompt('введите первое число',0);
b=prompt('введите второе число', 0);

alert(`Сумма:${Number(a)+Number(b)}`);
alert(`Разница:${a-b}`);

alert(`Произведение:${a*b}`);

alert(`Частное:${a/b}`);





