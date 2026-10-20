import { type BoardData } from '../../game/board/Board';
import { TileView } from '../tile/TileView';

interface BoardViewProps {
    board: BoardData;
    onTileClick: (x:number,y:number)=>void;
    onTileRightClick: (x:number,y:number) =>void;
}

export function BoardView({ board, onTileClick,onTileRightClick }: BoardViewProps) {

    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2px', backgroundColor: '#999', padding: '2px', width: 'fit-content' }}>
            {board.tiles.map((row, x) => (
                <div key={x} style={{ display: 'flex', gap: '2px' }}>
                    {row.map((tile, y) => (
                        // Coordinates are best for React keys in a grid
                        <TileView key={`${x}-${y}`} tile={tile} onClick={() => onTileClick(x,y)} onRightClick = {()=>onTileRightClick(x,y)}/>
                    ))}
                    {/* Comment: needs button to register click. */}
                </div>
            ))}
        </div>
    );
}