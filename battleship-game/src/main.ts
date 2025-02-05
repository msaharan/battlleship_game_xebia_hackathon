// This file is the entry point of the application. It initializes the game, sets up the game loop, and manages user interactions.

import Board from './game/board';
import { Player } from './game/player';

class Game {
    private board: Board;
    private player: Player;

    constructor(playerName: string, boardSize: number) {
        this.board = new Board(boardSize);
        this.player = new Player(playerName);
        this.initializeGame();
    }

    private initializeGame() {
        this.board.initializeBoard();
        this.setupEventListeners();
        this.startGameLoop();
    }

    private setupEventListeners() {
        // Set up user interaction listeners (e.g., for making moves)
    }

    private startGameLoop() {
        // Main game loop logic
    }
}

const playerName = prompt("Enter your name:") || "Player";
const boardSize = 10;
const game = new Game(playerName, boardSize);