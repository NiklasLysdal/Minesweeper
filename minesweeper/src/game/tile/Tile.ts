import type { TileState } from "./TileState";
import type { TileValue } from "./TileValue";
export interface  TileData  {
    state: TileState;
    value: TileValue; 
    neighborBombs: number | null;
}
export const createSafeTile = (): TileData => ({
    state: 'default',
    value: 'safe',
    neighborBombs: null
});
export const createBombTile = (): TileData => ({
    state: 'default',
    value: 'bomb',
    neighborBombs: null
});