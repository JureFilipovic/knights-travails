import knightMoves from "./knight-moves.js";

const path = knightMoves([3,3],[4,3]);

console.log(`You made it in ${path.length - 1} moves! Here is your path:`);
path.forEach(move => {
    console.log(`[${move[0]}, ${move[1]}]`);
});
