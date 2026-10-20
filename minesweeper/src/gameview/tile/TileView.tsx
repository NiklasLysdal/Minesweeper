import React from 'react';
import type { TileData } from '../../game/tile/Tile';

interface TileViewProps {
    tile: TileData;
    onClick : () =>void;
}

export function TileView({ tile, onClick}: TileViewProps ) {
 
    const isBomb = tile.value === 'bomb';
    const neighborBombCount = tile.neighborBombs ?? 0;


    const content = isBomb ? '💣' : (neighborBombCount > 0 ? neighborBombCount : '');
    const bgColor = isBomb ? '#dddddd' :  '#fbfafa';

   return (
    <button 
        onClick={onClick} 
        style={{
            width: '30px',
            height: '30px',
            backgroundColor: bgColor,
            color: 'black', // Forces the number to be visible
            
            // Flex properties perfectly center the number
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            
            fontWeight: 'bold',
            fontFamily: 'sans-serif',
            
            // Overrides default browser button styles
            padding: 0,
            margin: 0,
            border: '1px solid #999',
            cursor: 'pointer'
        }}
    >
        {content}
    </button>
);
}