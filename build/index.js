"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const boogie_solver_1 = require("boogie-solver");
async function demo() {
    const dice = boogie_solver_1.rollDice(4, 4);
    const start = process.hrtime();
    const solution = await boogie_solver_1.solveTrie(dice, boogie_solver_1.sowpodsTrie);
    const end = process.hrtime();
    const str = `
Board:
  ${dice.map(row => row.join(",")).join("\n  ")}

Words:
  ${solution.words.sort().join(",")}

Found: ${solution.words.length} words
Found: ${solution.paths.length} paths

Took: ${end[0] - start[0]}.${end[1]} seconds
`;
    // tslint:disable-next-line:no-console
    console.log(str);
}
demo();
