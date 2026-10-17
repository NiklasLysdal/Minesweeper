import { useState } from 'react';
import { generate_board } from '../game/board/BoardGenerator';

import type { BoardData } from '../game/board/Board';

export interface GameData {
    board: BoardData;
    status: 'playing' | 'won' | 'lost';
    
}






export function create_new_game(width: number, height: number, bombs: number): GameData {
    const board = generate_board(width, height, bombs);
    console.log(`Created new game with board size ${width}x${height} and ${bombs} bombs`);
    return {
        board,
        status: 'playing',
    };
}