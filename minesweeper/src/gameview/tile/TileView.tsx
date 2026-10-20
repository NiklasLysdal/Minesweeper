import React from 'react';
import type { TileData } from '../../game/tile/Tile';

interface TileViewProps {
    tile: TileData;
    onClick : () =>void;
    onRightClick: ()=>void;
}

export function TileView({ tile, onClick,onRightClick}: TileViewProps ) {
 
    const isBomb = tile.value === 'bomb';
    const isRevealed = tile.state ==='revealed'
    const neighborBombCount = tile.neighborBombs ?? 0;
    let icon:string|number = 'e';
    let bgColour = '#ff0101'
    if (isRevealed) {
        icon = isBomb ? '💣' : (neighborBombCount > 0 ? neighborBombCount : '')
        bgColour = (isBomb ? '#dddddd' :  '#fbfafa')
    } else {
        switch (tile.state) {
            case 'default': {
                icon = '';
                bgColour = '#859bfc'
                break;
                }
            case 'flagged':
                {
                    icon = '🚩'
                    bgColour = '#f4f812'
                    break;
                }
            case 'question':
                {
                   icon = '❓'
                    bgColour = '#12f825'
                    break; 
                }

        }
    }
    

    
    

   return (
    <button 
        onClick={onClick}
        onContextMenu={(e) => {
        // 2. Call preventDefault() BEFORE firing your logic
        e.preventDefault(); 
        // 3. Fire your right-click logic
        onRightClick();     
        }}
        style={{
            width: '30px',
            height: '30px',
            backgroundColor: bgColour,
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
        {icon}
    </button>
);
}