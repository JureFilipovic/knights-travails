import Vertex from "./vertex.js";

/**
 * Creates a graph representation of an 8x8 chessboard for knight's moves.
 *
 * Each cell on the board is represented by a Vertex object containing:
 *  - Its position as [x, y]
 *  - An array of valid moves (positions) reachable by a knight from that cell
 *
 * The graph is a 2D array indexed as graph[x][y], where each element is a Vertex.
 *
 * Knight's movement rules are enforced: moves that go off the board are excluded.
 *
 * @returns {Array<Array<Vertex>>} graph - 2D array of Vertex objects representing the board
 */
export default function createGraph() {
    const graph = [];
    const boardSize = 8;
    const knightMoves = [
        [2, 1], [1, 2], [-1, 2], [-2, 1],
        [-2, -1], [-1, -2], [1, -2], [2, -1]
    ];

    for (let x = 0; x < boardSize; x++) {
        graph[x] = [];

        for (let y = 0; y < boardSize; y++) {
            //create new Vertex with position [x][y]
            const position = [x, y];
            graph[x][y] = Vertex(position);
            const validMoves = [];

            //calculate valid moves, store them in an array, and set it to current Vertex
            for (let [dx, dy] of knightMoves) {
                const newX = x + dx;
                const newY = y + dy;

                if (newX >= 0 && newX < boardSize && newY >= 0 && newY < boardSize) {
                    validMoves.push([newX, newY]);
                }
            }

            graph[x][y].setMoves(validMoves);
        }

    }

    return graph;
}