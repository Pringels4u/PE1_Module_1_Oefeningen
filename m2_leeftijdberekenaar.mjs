import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let geboortejaar = parseFloat(await userInput.question('Geef je geboorte jaar in: '));
let toekomstjaar = parseFloat(await userInput.question('Geef het jaar in om te weten hoe oud je dan zal zijn: '));

let toekomstleeftijd = parseFloat(toekomstjaar - geboortejaar);

console.log('In ' + toekomstjaar + ' ben je ' + (toekomstleeftijd - 1) + ' of ' + toekomstleeftijd);