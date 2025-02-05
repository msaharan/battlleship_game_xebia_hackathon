import { Ship } from './ship';

export class Board {
    size: number;
    ships: Ship[];

    constructor(size: number = 10) {
        this.size = size;
        this.ships = [];
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
                return true;
            }
        }
        return false;
    }
}

export default Board;