import "./index.css";

import numeral from "numeral";

const cost = numeral(1200).format("$0,0.00");

console.log("I would pay %s for this awesome cource!", cost);
//console.log(`I would pay ${cost} for this course!`);