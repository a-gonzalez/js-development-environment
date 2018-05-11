//import "./index.css";
//import numeral from "numeral";
const numeral = require("numeral");

/* eslint no-debugger: 1, no-console: 0 */


const cost = numeral(1200).format("$0,0.00");

debugger; // eslint-disable-line no-debugger

console.log("I would pay %s for this awesome cource!", cost);
//console.log(`I would pay ${cost} for this course!`);