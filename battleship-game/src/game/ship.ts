class Ship {
    length: number;
    coordinates: number[][];
    hits: number;

    constructor(length: number, coordinates: number[][]) {
        this.length = length;
        this.coordinates = coordinates;
        this.hits = 0;
    }

    hit(coordinate: number[]): boolean {
        for (let i = 0; i < this.coordinates.length; i++) {
            if (this.coordinates[i][0] === coordinate[0] && this.coordinates[i][1] === coordinate[1]) {
                this.hits++;
                return true;
            }
        }
        return false;
    }

    isSunk(): boolean {
        return this.hits >= this.length;
    }
}

export default Ship;