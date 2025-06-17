import createGraph from "./graph.js";
import Vertex from "./vertex.js";

const graph = createGraph();

/**
 * Finds the shortest path a knight can take from start to target on a chessboard.
 * @param {number[]} start - Starting position [x, y]
 * @param {number[]} target - Target position [x, y]
 * @returns {Array} - Array of positions from start to target
 */
export default function knightMoves(start, target) {
    const queue = [];
    const visited = new Set();

    const positionToKey = ([x, y]) => `${x},${y}`;

    queue.push({ position: start, path: [start] });
    visited.add(positionToKey(start));

    while (queue.length > 0) {
        const { position, path } = queue.shift();

        if (position[0] === target[0] && position[1] === target[1]) {
            return path;
        }

        const node = graph[position[0]][position[1]];
        const moves = node.getMoves();

        for (let move of moves) {
            const key = positionToKey(move);

            if (!visited.has(key)) {
                visited.add(key);
                queue.push({ position: move, path: [...path, move] });
            }
        }
    }
}