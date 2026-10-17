import React from 'react';
import type { TileData } from '../../game/tile/Tile';

interface TileViewProps {
    tile: TileData;
}

export function TileView({ tile }: TileViewProps) {
 
    const isBomb = tile.value === 'bomb';
    const neighborBombCount = tile.neighborBombs ?? 0;


    const content = isBomb ? '💣' : (neighborBombCount > 0 ? neighborBombCount : '');
    const bgColor = isBomb ? '#dddddd' :  '#fbfafa';

    return (
        
        <div 
            style={{
                width: '30px',
                height: '30px',
                backgroundColor: bgColor,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: 'bold',
                fontFamily: 'sans-serif'
            }}
        >
            {content}
        </div>
    );
}