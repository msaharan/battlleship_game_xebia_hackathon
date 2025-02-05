import Ship from './ship';
import Board from './board';

export class Player {
    name: string;
    ships: Ship[];

    constructor(name: string) {
        this.name = name;
        this.ships = [];
    }

    makeMove(board: Board, coordinates: { x: number, y: number }): boolean {
        return board.checkHit(coordinates.x, coordinates.y);
    }

    checkWin(): boolean {
        return this.ships.every(ship => ship.isSunk());
    }

    addShip(ship: Ship): void {``
        this.ships.push(ship);
    }
}