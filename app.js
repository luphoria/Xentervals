import { CompareEDOs } from "./compareEDOs.js";
import { CalculateEDO } from "./calculateEDO.js";
import promptSync from "prompt-sync";
const prompt = promptSync();

// initialize
let EDOs = {};
let res = null;

// Ask the user for what EDOs to compare later
while (true) {
  res = prompt("Enter a number to create an EDO, leave blank to continue: ");
  if (Number.isInteger(parseInt(res))) {
    // Create the EDO
    EDOs[res.toString() + "edo"] = CalculateEDO(res);
    console.log(`${res}edo created and added.`);
  } else break;
}

// Error margin (how far the intervals can be from each other for the program to mark them as related)
let errorMargin =
  parseInt(prompt("Enter the margin of error in cents (10): ")) || 10;

// Run comparison
let EDOComparison = CompareEDOs(EDOs, errorMargin);
// console.log(EDOComparison);

// String for logging later
let EDOChoices = "";

// Log totals of comparison
for (let EDO in EDOComparison) {
  console.log(
    `${EDO} had ${Object.keys(EDOComparison[EDO]).length} interval matches.`
  );
  EDOChoices += `, ${EDO}`;
}

// Remove preceding `, `
EDOChoices = EDOChoices.slice(2);

// Let user view results directly
while (true) {
  let viewEDO =
    parseInt(
      prompt(
        `Which EDO would you like to view? (${EDOChoices}, or 0 to exit): `
      ).replace(/edo/gim, "") // Handle both raw number and Xedo inputs
    ) + "edo"; // Data in EDOComparison is keyed as Xedo
  if (viewEDO == "0edo") process.exit(0); // We just added `edo` on earlier
  if (!EDOComparison[viewEDO]) {
    console.log("Invalid input, please choose from the EDOs listed.");
  } else {
    // console.log(viewEDO);
    // Log object in formatted manner
    for (let steps in EDOComparison[viewEDO]) {
      console.log(
        `${steps}\\${viewEDO} was ${
          EDOComparison[viewEDO][steps].diff > 0
            ? `+${EDOComparison[viewEDO][steps].diff}`
            : EDOComparison[viewEDO][steps].diff
        }c away from ${EDOComparison[viewEDO][steps].interval}.`
      );
    }
  }
}
