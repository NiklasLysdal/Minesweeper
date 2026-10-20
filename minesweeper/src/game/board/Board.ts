import type { TileData } from '../tile/Tile';
import { type BoardActionResult } from '../BoardActionResult';
export interface BoardData {
    tiles: TileData[][];
}

export function reveal_tile_click(board: BoardData, x: number, y: number): BoardActionResult {
    
    let [new_board,_] = reveal_tile_cascade(board,x,y,new Set<string>());
    if (new_board.tiles[x][y].value === 'bomb') {
        return {board:board, result : 'lost'} //currently just to save computation time.
    }
    let victory = check_wincon(new_board);

    return {board: new_board, result : victory ? 'won' : 'none'}
}

/// reveals tiles until bomb is reached or tile is marked
function reveal_tile_cascade(board: BoardData, x: number, y: number,visited:Set<string>): [BoardData,Set<string>] { //returns list of already visited coordinates
    
    console.log(`Revealing tile at (${x}, ${y})`);
    console.log('visited is',visited)
    if (visited.has(`${x},${y}`)) {
        console.log('already visited')
        return [board,visited];
    }
    if (board.tiles[x][y].state === 'revealed') {
        console.log(`Tile at (${x}, ${y}) is already revealed.`);
        return [board,visited.add(`${x},${y}`)]; 
    }
    if (board.tiles[x][y].state==='flagged') {
        console.log(`Tile at (${x}, ${y}) is flagged. Action ignored`);
        return [board,visited.add(`${x},${y}`)]; 
    }
    if (board.tiles[x][y].state==='question') {
        console.log(`Tile at (${x}, ${y}) is quetion. Action ignored`);
        return [board,visited.add(`${x},${y}`)]; 
    }
    if (board.tiles[x][y].state!=='default') {
        throw Error('unreachable state when revealing tile');
    }
    
    if (board.tiles[x][y].value==='bomb') {
        console.log('met bomb')
        return [board,visited.add(`${x},${y}`)]; 
    }
    
    ///default and not bomb
    
    const neighbour_vectors : [number, number][] = [
        [-1,-1],[0,-1],[1,-1],
        [-1,0] ,         [1,0],
        [-1,1],[0,1],[1,1]
    ];
    let max_x:number  = board.tiles.length-1;
    if (board.tiles[0] === null) {
        throw Error('empty board error when revealing')
    }
    let max_y:number = board.tiles[0].length-1;
    let bomb_counter:number = 0;
    let recurse_neighbours:[number,number][] = [];
    for (const [dx,dy] of neighbour_vectors) {
        
        let nx:number = x+dx;
        let ny:number = y+dy;
        console.log(`checking out (${nx}, ${ny})`);
        if (nx<0 || nx>max_x || ny<0 || ny>max_y) {
            continue; //out of bounds
        }
        if (board.tiles[nx][ny].value === 'bomb') {
            bomb_counter+=1;
        } else {
            recurse_neighbours.push([ nx,ny] );
        }
    }
    const newTiles = [...board.tiles];
    newTiles[x] = [...newTiles[x]];
    newTiles[x][y] = { 
    ...newTiles[x][y], 
    neighborBombs: bomb_counter,
    state: 'revealed'
    };
    
    let new_board = { ...board, tiles: newTiles };
    let new_visited = visited.add(`${x},${y}`);
    if (bomb_counter===0) {
        console.log('recursing')
        for (const [x2,y2] of recurse_neighbours) { 
        [new_board,new_visited] = reveal_tile_cascade(new_board,x2,y2,new_visited)
    }
    }
    //only cascase if current tile has 0 neighbours
    

    return [new_board,new_visited]; 
}

export function mark_tile(board: BoardData, x: number, y: number): BoardData {
    console.log('tried to mark tile {},{y}')
    throw Error('yet to implement tile marking')
    return board

} 

function check_wincon(board:BoardData) : boolean {
    let tiles = board.tiles;
    let width =tiles.length;
    if (tiles[0] === null) {
        throw Error('invalid board for wincon')
    }
    let height = tiles[0].length;
    for (let x = 0; x <width;x++) {
        for (let y = 0; y<height;y++) {
            let tile = tiles[x][y];
            if (tile.value === 'safe' && tile.state!=='revealed') {
                return false;
            }
        }
    }
    return true 
}