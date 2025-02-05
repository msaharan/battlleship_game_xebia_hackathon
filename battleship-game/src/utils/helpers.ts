export function randomizeShipPlacement(boardSize: number, shipLength: number): { x: number; y: number; orientation: 'horizontal' | 'vertical' } {
    const orientation = Math.random() < 0.5 ? 'horizontal' : 'vertical';
    let x, y;

    if (orientation === 'horizontal') {
        x = Math.floor(Math.random() * (boardSize - shipLength));
        y = Math.floor(Math.random() * boardSize);
    } else {
        x = Math.floor(Math.random() * boardSize);
        y = Math.floor(Math.random() * (boardSize - shipLength));
    }

    return { x, y, orientation };
}

export function validateCoordinates(x: number, y: number, boardSize: number): boolean {
    return x >= 0 && x < boardSize && y >= 0 && y < boardSize;
}