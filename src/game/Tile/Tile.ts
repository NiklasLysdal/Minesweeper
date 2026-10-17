export interface  TileData  {
    state: TileState;
    value: TileValue; 
    neighborBombs: number | null;
}
export const createSafeTile = (): TileData => ({
    state: TileState.default,
    value: TileValue.Safe,
    neighborBombs: null
});
export const createBombTile = (): TileData => ({
    state: TileState.default,
    value: TileValue.Bomb,
    neighborBombs: null
});