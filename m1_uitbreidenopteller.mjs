// Begin van userInput voorbereiden
import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});
// Einde van userInput voorbereiden



// Voeg hier je eigen code in
let getal1 = parseFloat(55)
let getal2 = parseFloat(67)
let som = getal1 + getal2;
let verschil = getal1 - getal2;
let product = getal1 * getal2;
let deling = getal1 / getal2;

console.log('Het eerste getal is ' + getal1 + ', het tweede is ' + getal2 + '.');
console.log('de som is ' + som);
console.log('het verschil is ' + verschil);
console.log('het product is ' + product);
console.log('de deling is ' + deling);

process.exit();
