/**
 * Represents a vertex (node) on the chessboard for the knight's traversal graph.
 *
 * Each Vertex stores:
 *  - position: the coordinates [x, y] of this vertex on the board
 *  - moves: an array of valid positions ([x, y]) that the knight can move to from this vertex
 *
 * Provides getter methods for position and moves, and a setter method to update moves.
 * The moves array is replaced entirely when setMoves is called.
 *
 * This abstraction allows clean encapsulation of node data and neighbor relationships.
 *
 * @param {Array<number>} position - The [x, y] coordinates of this vertex on the chessboard
 * @returns {Object} Vertex instance with methods: getPosition, getMoves, setMoves
 */
export default function Vertex(position) {
    const moves = [];

    const getPosition = () => position;

    const getMoves = () => moves;

    const setMoves = (movesArray) => {
        moves.splice(0, moves.length, ...movesArray);
    }

    return {
        getPosition,
        getMoves,
        setMoves,
    }
}