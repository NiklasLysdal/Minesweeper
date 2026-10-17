import { type BoardData } from '../../game/board/Board';
import { TileView } from '../tile/TileView';

interface BoardViewProps {
    board: BoardData;
}

export function BoardView({ board }: BoardViewProps) {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2px', backgroundColor: '#999', padding: '2px', width: 'fit-content' }}>
            {board.tiles.map((row, y) => (
                <div key={y} style={{ display: 'flex', gap: '2px' }}>
                    {row.map((tile, x) => (
                        // Coordinates are best for React keys in a grid
                        <TileView key={`${x}-${y}`} tile={tile} />
                    ))}
                </div>
            ))}
        </div>
    );
}