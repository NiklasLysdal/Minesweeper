//utility to generate random board

function GenerateBoard(width:number, height: number, bombs:number): Board { //needs parameter to choose bomb generation algorithm
    let width_array = new Array<Array<Tile>>(width);

    for (let x = 0; x < width; x++) {
        width_array[x] = new Array<Tile>(height);
    }
    let bombPositions = GenerateBombsRandom(width, height, bombs);
    for (let x = 0; x < width; x++) {
        for (let y = 0; y < height; y++) {
            if (bombPositions.some(([bx, by]) => bx === x && by === y)) {
                width_array[x][y] = Tile.createBombTile();
            } else {
                width_array[x][y] = Tile.createSafeTile();
            }

        }
    
    }
    return new Board(width, height, bombs, width_array);
}
/// generates board coordinates
function GenerateBombsRandom(width:number, height:number, bombs:number): Array<[number,number]> {
    let bombPositions: Array<[number,number]> = [];
    //unoptimal due to risk of collision
    while (bombPositions.length < bombs) {
        let x = Math.floor(Math.random() * width);
        let y = Math.floor(Math.random() * height);
        if (!bombPositions.some(([bx, by]) => bx === x && by === y)) {
            bombPositions.push([x, y]);
        }
    }
    return bombPositions;
}