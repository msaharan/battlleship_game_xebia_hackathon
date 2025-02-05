class Board {
    private grid: string[][];
    private size: number;

    constructor(size: number) {
        this.size = size;
        this.grid = this.initializeBoard();
    }

    initializeBoard(): string[][] {
        return Array.from({ length: this.size }, () => Array(this.size).fill('~'));
    }

    placeShip(startX: number, startY: number, length: number, isHorizontal: boolean): boolean {
        if (this.canPlaceShip(startX, startY, length, isHorizontal)) {
            for (let i = 0; i < length; i++) {
                if (isHorizontal) {
                    this.grid[startY][startX + i] = 'S';
                } else {
                    this.grid[startY + i][startX] = 'S';
                }
            }
            return true;
        }
        return false;
    }

    private canPlaceShip(startX: number, startY: number, length: number, isHorizontal: boolean): boolean {
        for (let i = 0; i < length; i++) {
            const x = isHorizontal ? startX + i : startX;
            const y = isHorizontal ? startY : startY + i;

            if (x >= this.size || y >= this.size || this.grid[y][x] !== '~') {
                return false;
            }
        }
        return true;
    }

    checkHit(x: number, y: number): boolean {
        if (this.grid[y][x] === 'S') {
            this.grid[y][x] = 'H'; // Mark as hit
            return true;
        }
        this.grid[y][x] = 'M'; // Mark as miss
        return false;
    }

    getGrid(): string[][] {
        return this.grid;
    }
}

export default Board;