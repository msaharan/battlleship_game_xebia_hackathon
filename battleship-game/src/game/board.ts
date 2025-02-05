import { Ship } from './ship';

export class Board {
    size: number;
    ships: Ship[];
    hits: Set<string>;
    misses: Set<string>;

    constructor(size: number = 10) {
        this.size = size;
        this.ships = [];
        this.hits = new Set();
        this.misses = new Set();
    }

    initializeBoard() {
        // Initialize the board if needed
    }

    placeShip(x: number, y: number, length: number, isHorizontal: boolean): boolean {
        const coordinates = [];
        for (let i = 0; i < length; i++) {
            const coord = isHorizontal ? { x: x + i, y } : { x, y: y + i };
            if (coord.x >= this.size || coord.y >= this.size) {
                return false;
            }
            coordinates.push(coord);
        }

        const newShip = new Ship(length, coordinates);
        this.ships.push(newShip);
        return true;
    }

    checkHit(x: number, y: number): boolean {
        for (const ship of this.ships) {
            if (ship.hit(x, y)) {
                this.hits.add(`${x},${y}`);
                return true;
            }
        }
        this.misses.add(`${x},${y}`);
        return false;
    }

    getBoardState(): string[][] {
        const boardState = Array.from({ length: this.size }, () => Array(this.size).fill(' '));

        this.hits.forEach(hit => {
            const [x, y] = hit.split(',').map(Number);
            boardState[y][x] = 'X';
        });

        this.misses.forEach(miss => {
            const [x, y] = miss.split(',').map(Number);
            boardState[y][x] = 'O';
        });

        return boardState;
    }
}

export default Board;