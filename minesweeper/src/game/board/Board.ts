import type { TileData } from '../tile/Tile';

export interface BoardData {
    tiles: TileData[][];
}

export function reveal_tile(board: BoardData, x: number, y: number): BoardData {
    const newBoard: BoardData = {
        tiles: board.tiles.map((row, rowIndex) =>
            row.map((tile, colIndex) => {
                if (rowIndex === x && colIndex === y) {
                    return { ...tile, state: 'revealed' };
                }
                return tile;
            })
        )
    }; 
    console.log(`Revealed tile at (${x}, ${y})`);
    return newBoard; 
}