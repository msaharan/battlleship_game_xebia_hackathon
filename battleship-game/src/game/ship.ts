export class Ship {
    length: number;
    coordinates: { x: number, y: number }[];
    hits: Set<string>;

    constructor(length: number, coordinates: { x: number, y: number }[]) {
        this.length = length;
        this.coordinates = coordinates;
        this.hits = new Set();
    }

    hit(x: number, y: number): boolean {
        const coord = `${x},${y}`;
        if (this.coordinates.some(c => c.x === x && c.y === y)) {
            this.hits.add(coord);
            return true;
        }
        return false;
    }

    isSunk(): boolean {
        return this.hits.size === this.length;
    }
}

export default Ship;