import { rollDice, solveTrie, sowpodsTrie } from "boogie-solver";

async function demo() {
  const dice = rollDice(4, 4);
  const solution = await solveTrie(dice, sowpodsTrie);
  const str = `
Board:
  ${dice.map(row => row.join(",")).join("\n  ")}

Words:
  ${solution.words.sort().join(",")}

Found: ${solution.words.length} words
Found: ${solution.paths.length} paths

Took: ${solution.time} seconds
`;
  // tslint:disable-next-line:no-console
  console.log(str);
}

demo();
