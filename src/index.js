
import _, { functionsIn } from 'lodash';
import { random } from './maths.js';
import { NAME, LOREM } from './texts/special.js';

console.log("Hello");
console.log(random(5, 10));
console.log(NAME + ' ' + LOREM);
let a1 = [ 1, 455, 6 ];
let a2 = [ 454, 33, 1 ];
let a3 = [ 2 ];

let a4 = _.concat(a1, a2, a3);
console.log(a4);
function click(){
    alert('Katt')
}

document.getElementById('button').addEventListener('click', click);