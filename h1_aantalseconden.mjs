import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let dagen = parseFloat(await userInput.question('Geef het aantal dagen in: '));
let uren = parseFloat(await userInput.question('Geef het aantal uren in: '));
let minuten = parseFloat(await userInput.question('Geef het aantal minuten in: '));
let seconden = parseFloat(await userInput.question('Geef het aantal seconden in: '));
let Totaalseconden;
Totaalseconden = ((dagen * 24 + uren) * 60 + minuten) * 60 + seconden;


console.log(Totaalseconden);

process.exit();