import { Player } from './game/player';
import Board from './game/board';
import * as readline from 'readline';

class Game {
    private board: Board;
    private player: Player;
    private rl: readline.Interface;

    constructor(playerName: string, boardSize: number) {
        this.board = new Board(boardSize);
        this.player = new Player(playerName);
        this.rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
        this.initializeGame();
    }

    private initializeGame() {
        this.board.initializeBoard();
        this.placeShips();
    }

    private placeShips() {
        const ships = [
            { length: 5, name: 'Carrier' },
            { length: 4, name: 'Battleship' },
            { length: 3, name: 'Cruiser' },
            { length: 3, name: 'Submarine' },
            { length: 2, name: 'Destroyer' }
        ];

        const placeNextShip = (index: number) => {
            if (index >= ships.length) {
                this.startGameLoop();
                return;
            }

            const ship = ships[index];
            this.rl.question(`Place your ${ship.name} (length ${ship.length}). Enter start coordinates (x y) and orientation (h/v): `, (input) => {
                const [x, y, orientation] = input.split(' ');
                const startX = parseInt(x);
                const startY = parseInt(y);
                const isHorizontal = orientation === 'h';

                if (this.board.placeShip(startX, startY, ship.length, isHorizontal)) {
                    this.player.addShip(new Ship(ship.length, this.getShipCoordinates(startX, startY, ship.length, isHorizontal)));
                    placeNextShip(index + 1);
                } else {
                    console.log('Invalid placement. Try again.');
                    placeNextShip(index);
                }
            });
        };

        placeNextShip(0);
    }

    private getShipCoordinates(startX: number, startY: number, length: number, isHorizontal: boolean): { x: number, y: number }[] {
        const coordinates = [];
        for (let i = 0; i < length; i++) {
            coordinates.push(isHorizontal ? { x: startX + i, y: startY } : { x: startX, y: startY + i });
        }
        return coordinates;
    }

    private startGameLoop() {
        this.rl.question('Enter coordinates to attack (x y): ', (input) => {
            const [x, y] = input.split(' ').map(Number);
            const hit = this.player.makeMove(this.board, { x, y });

            console.log(hit ? 'Hit!' : 'Miss!');
            if (this.player.checkWin()) {
                console.log('You win!');
                this.rl.close();
            } else {
                this.startGameLoop();
            }
        });
    }
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter your name: ", (name) => {
    const playerName = name || "Player";
    const boardSize = 10;
    const game = new Game(playerName, boardSize);
});