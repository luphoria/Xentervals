import { CompareEDOs } from "./compareEDOs.js";
import { CalculateEDO } from "./calculateEDO.js";
import promptSync from 'prompt-sync';
const prompt = promptSync();

let EDOs = {};
let res = null;

while (true) {
    res = prompt("Enter a number to create an EDO, leave blank to continue: ");
    if (Number.isInteger(parseInt(res))) {
        EDOs[res.toString() + "edo"] = CalculateEDO(res);
        console.log(`${res}edo created and added.`)
    } else break;
}

let errorMargin = parseInt(prompt("Enter the margin of error in cents (10): ")) || 10;

let EDOComparison = CompareEDOs(EDOs, errorMargin);

console.log(EDOComparison);

let EDOChoices = "";

for (let EDO in EDOComparison) {
    console.log(`${EDO} had ${Object.keys(EDOComparison[EDO]).length} interval matches.`);
    EDOChoices += `, ${EDO}`
}

EDOChoices = EDOChoices.slice(2);

while (true) {
    let viewEDO = parseInt(prompt(`Which EDO would you like to view? (${EDOChoices}, or 0 to exit): `).replace(/edo/gmi,"")) + "edo";
    if (viewEDO == "0edo") process.exit(0);
    if (!EDOComparison[viewEDO]) {
        console.log("Invalid input, please choose from the EDOs listed.");
    } else {
        console.log(viewEDO);
        for (let steps in EDOComparison[viewEDO]) {
            console.log(`${steps}\\${viewEDO} was ${EDOComparison[viewEDO][steps].diff > 0 ? `+${EDOComparison[viewEDO][steps].diff}` : EDOComparison[viewEDO][steps].diff}c away from ${EDOComparison[viewEDO][steps].interval}.`)
        }
    }
}